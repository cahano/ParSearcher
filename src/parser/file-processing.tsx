//
// File Processing JSX class
//

import * as React from "react"
import { DragEvent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { axiosPDFPost } from "../api/upload-api"
import { StartPyParse, DownloadPoll } from '../api/download-api'

import { numberWithCommas } from "../constants";
import './static/file-processing.css';
 

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
 

  //////// FOR HANDLING 'BROWSE' BUTTOM UPLOAD

  public handleBrowseUpload (event: any) {
    // get the selected file(s) from the input
    const browse_files = event.target.files;
    // Setting uploaded file state
    this.setState({...this.state,
                   isUploading: true,
                   files: Array.from(browse_files)})

    // Loop through updated files
    Array.from(browse_files).forEach((file: any) => {
      console.log(file)
      // create a new FormData object and append the file to it
      //// The below will likely need to go outisde of this for loop for multiple file parsing
      const formData = new FormData();
      formData.append("file", file);
      // make a POST request to the File Upload API
      axiosPDFPost(formData,
                   "https://parsearcher-api-c4c5fa341782.herokuapp.com/upload")
                   .then((value) => {

                    this.setState({...this.state,
                                   isLoaded: true,
                                   isUploading: false})

                 })
    })
  };


  //////// FOR HANDLING DRAG & DROP BUTTOM UPLOAD

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
                     "https://parsearcher-api-c4c5fa341782.herokuapp.com/upload")
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
  public handleDownload() {

    console.log(this.state.isParsing)

    this.setState({
      ...this.state,
      isParsing: true
    })

    // Parse uploaded pdf docs, and once complete, update parse state
    // Connect to Heroku app
    StartPyParse('https://parsearcher-api-c4c5fa341782.herokuapp.com/parse')
                // .then((value) => {
                //       // Setting parser state so loading icon is displayed
                //         this.setState({...this.state,
                //                       isParsing: true})
                // })

    console.log(this.state.isParsing)

    // Ping tornado 'download' api
    DownloadPoll('https://parsearcher-api-c4c5fa341782.herokuapp.com/download', 5000)
                .then(() => {
                        this.setState({...this.state,
                                        isParsing: false})
                })

    console.log(this.state.isParsing)

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
                                onClick={(event) => this.handleDownload}
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
                                    onClick={(event) => this.handleDownload}
                                    disabled>
                              Parse
                            </button>
                        </div>

                        ) : (

                        <div className="parse_btn">
                            <button type="submit"
                                    onClick={(event) => this.handleDownload}>
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

