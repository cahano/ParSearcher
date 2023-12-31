//
// Parsearch parser - pdf upload to parser and XLSX download
//

import {useState} from 'react'
import { FileProcessor } from './file-processing'
import { Pagefooter } from '../constants'
import './static/DocParser.css';

// Importing AWS auth 
import { getAuthedUser } from '../login/auth/userInfo'


function DocParser() {

    const [currUser, setUser] = useState()

    let x = getAuthedUser()

    console.log(x)

    return (

      {x} ? (

        <div className="whole_main_page">

        <div className='main_navbar'>
          <a className="active" href="./parser">Parser</a>
          <a className="logout" href="./">Logout</a>
          {/* REMOVING THESE UNTIL NEXT PHASE */}
          {/* <a href="./#/team">Deal Repos</a>
          <a href="./#/team">Analytics</a> */}
        </div>

        <div className="main_frame">

          <div className="intro_box">

            <h1>Parser</h1>

            <p> Upload a single, or up to [1mm], PDF documents from which
                you wish to abstract data. Select your use-case (e.g. 100 Term Sheets to XLSX)
                and relevant parameters (e.g. input XML/JSON specifying search logic).
                Once documents are uploaded an estimated run time will be returned.</p>

            {/* Upload and parse handler */}
            <div className='file_proc'>
              <FileProcessor />
            </div>

          </div>

        </div>
        
        <Pagefooter />

      </div>

      ) : (<div>
            No
           </div>)
  );

}


export default DocParser;
