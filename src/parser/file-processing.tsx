//
// File Processing JSX class
//

import * as React from "react"
import { DragEvent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { axiosPDFPost } from "../api/upload-api"
import { StartPyParse, DownloadPoll } from '../api/download-api'

import { numberWithCommas, API_URL, CERT_URL } from "../constants";
import './static/file-processing.css';
import { error } from "console";
 

export class FileProcessor extends React.Component<{},
                                                  {isOver: boolean,
                                                   files: File[],
                                                   isLoaded: boolean,
                                                   isParsing: boolean,
                                                   isUploading: boolean,
                                                   isFin: boolean}> {

  constructor(props: any) {

    super(props);
    this.state = {
      ...this.state,
      isOver: false,
      isLoaded: false,
      isUploading: false,
      isFin: false,
      isParsing: false
    }

    // Binding events
    this.handleBrowseUpload = this.handleBrowseUpload.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDownload = this.handleDownload.bind(this);

  }
 

  //////// FOR HANDLING 'BROWSE' BUTTON UPLOAD

  public handleBrowseUpload (event: any) {
    // get the selected file(s) from the input
    const browseFiles = event.target.files;
    // list of async requests to file upload
    const asyncUploadRequests: Promise<any>[] = [];

    // Setting uploaded file state
    this.setState({...this.state,
                   isUploading: true,
                   files: Array.from(browseFiles)})

    // Loop through updated files
    Array.from(browseFiles).forEach((file: any) => {
      console.log(file)
      // create a new FormData object and append the file to it
      //// The below will likely need to go outisde of this for loop for multiple file parsing
      const formData = new FormData();
      formData.append("file", file);
      // make a POST request to the File Upload API
      const request = axiosPDFPost(formData,
                  //  API_URL + "upload")
                  file.name,
                  CERT_URL)
                   .then((value) => {

                    this.setState({...this.state,
                                   isLoaded: true,
                                   isUploading: false})

                 }).then(() => {
                  console.log("Downloading ",file)
                  // make a POST request to the File Upload API
                  this.handleDownload(file.name)
                 }).catch(error => {
                  console.log(`Error while uploading file ${file.name} \n ${error}`)
                 })
      asyncUploadRequests.push(request)
    })

    try{
      // can use any to at least try if some fail? 
      // -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
      const uploadResults = Promise.all(asyncUploadRequests)
      console.log("All files uploaded, now polling for downloads", uploadResults)
    } catch (error) {
      console.error("Error while uploading file(s): ", error)
    }
      

    // Array.from(browseFiles).forEach((file: any) => {
    //   console.log("Downloading ",file)
    //   // make a POST request to the File Upload API
    //   this.handleDownload(file.name)

    // })

  };


  //////// FOR HANDLING DRAG & DROP UPLOAD

  // Define the event handlers
  public handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState({...this.state,
                   isOver: true})
  };
  public handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState({...this.state,
                   isOver: false})
  };
  public handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState({...this.state,
                   isOver: false})
 
    // Fetch the files
    const droppedFiles = Array.from(event.dataTransfer.files);
    // store files to state 
    this.setState({...this.state,
                   files: droppedFiles,
                   isUploading: true})
 
    // Use FileReader to read file content
    droppedFiles.forEach((file) => {
      const reader = new FileReader();

      const formData = new FormData();

      formData.append("file", file);

      reader.onloadend = () => {
        // Connect to Heroku app
        axiosPDFPost(formData,
                     //  API_URL + "upload"
                     file.name,
                     CERT_URL)
                     .then((value) => {

                        this.setState({...this.state,
                                       isLoaded: true,
                                       isUploading: false})

                     })
      };

      reader.onerror = () => {
        console.error('There was an issue reading the file.');
      };
 
      reader.readAsDataURL(file);
      return reader;
    });
  };


  // HANDLING DOWNLOAD
  public handleDownload(filename: string) {

    // Displaying 'parser' message/visual
    this.setState({
      ...this.state,
      isParsing: true
    })

    // // Initiate parsing of uploaded doc(s)
    // StartPyParse(API_URL + 'parse')

    // Ping tornado 'download' api until downloadable is present, then download
    //// And update state to remove 'parsing' display once complete
    DownloadPoll(CERT_URL, filename)
                .then(() => {
                        this.setState({...this.state,
                                        isParsing: false})
                })

  }
  
  // HANDLING DOWNLOAD
  public parsePlaceHolder() {

    console.log("pass")

  }
  
  public render() {
    return (

      // Entire output div
      <div>

        {/* Uploads (drag & drop, browse) */}
        <div
          className="drag_box"
          style={{
            backgroundColor: this.state.isOver ? '#222222' : '#161616',
          }}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragLeave}
          onDrop={this.handleDrop}
        >

            <div className="drag_txt">
              < h2>Drag PDF files here</h2>
            </div>

            <div className='browse_txt'>
                <label htmlFor="file_upload" className="custom-file-upload">
                    or browse
                </label>
                <input id="file_upload"
                      type="file"
                      accept=".pdf"
                      onChange={this.handleBrowseUpload}
                      multiple />
            </div>

        </div>

        {/* upload file table, parse button, and state display */}
        <div className="btm_div">

            <div className="table_p_btn">
              
              {/* Upload results and parse section (bottom div) */}
              <div>

                {/* Upload results table and parse button */}
                {!this.state.isLoaded ? (
                  // IF DOCS HAVE NOT LOADED
                  <div>
                      {/* Upload table */}
                      <div className="file_div">
                        <table className="file_table">
                            <tr>
                              <th style={{width: "17vw"}}>File</th>
                              <th>Size</th>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                            </tr>
                        </table>
                      </div>

                      {/* Parse button */}
                      <div className="parse_btn">
                        <button type="submit"
                                onClick={(event) => this.parsePlaceHolder()}
                                disabled>
                          Parse
                        </button>
                      </div>
                  </div>

                ) : (
                  // IF DOCS HAVE LOADED
                  <div>
                      <div className="file_div">
                            <table className="file_table">
                              <tr>
                                <th style={{width: "17vw"}}>File</th>
                                <th>Size</th>
                              </tr>
                              {this.state.files.map(
                                                ({name, size}: any) =>
                                                {return <tr>
                                                          <td>{name} </td>
                                                          <td>{String(numberWithCommas(
                                                                        Math.round(size/1000)
                                                                        )
                                                                      )} KB</td>
                                                        </tr>
                                                }
                                              )
                              }
                          </table>
                      </div>

                      {/* Button state handling */}
                      <div>

                        {this.state.isParsing ? (

                        <div className="parse_btn">
                            <button type="submit"
                                    onClick={(event) => this.parsePlaceHolder()}
                                    disabled>
                              Parse
                            </button>
                        </div>

                        ) : (

                        <div className="parse_btn">
                            <button type="submit"
                                    onClick={(event) => this.parsePlaceHolder()}>
                              Parse
                            </button>
                        </div>
                        )}

                      <div/>

                  </div>
                
                </div>

                )}

              </div>
              
            </div>

            <div className="state_frame">

                {/* state displays */}
                <div>
                  
                  {/* Parsing display */}
                  {this.state.isParsing ? (

                    <div className="circ_loader">
                      <h3>Parsing</h3>
                      <h5><i>This may take awhile...</i></h5>
                      {/* Circular loader from material UI */}
                      <CircularProgress style={{'color': "rgb(137, 137, 255)"}}/>
                    </div>

                  ) : (

                    <div>
                      {this.state.isUploading ? (
                          <div>

                            <div className="circ_loader">
                                <h3>Uploading</h3>
                                <h5><i>Just a moment...</i></h5>
                                {/* Circular loader from material UI */}
                                <CircularProgress style={{'color': "rgb(137, 137, 255)"}}/>
                            </div>

                          </div>

                        ) : (

                          <div>
                              {/* CAN ADD MORE STATE LOGIC HERE, ABOVE FOR BEFORE/AFTER UPLOADS */}
                          </div>

                        )}

                    </div>
                    
                  )}

                </div>

            </div>

          </div>

      </div>
    );
  }
}

