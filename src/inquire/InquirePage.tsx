
import React from 'react'
import './static/InquirePage.css';
import { Pagefooter } from '../constants'


const InquirePage: React.FC = () => {

  return (

    <div className="whole_main_page">

      <div className='main_navbar'>
        <a href="./">Caliburn</a>
        <a className="right_al_link" href="./login">Login</a>
        <a className="right_al_link_active" href="./inquire">Inquire</a>
        <a className="right_al_link" href="./team">Team</a>
      </div>

      <div className='inquire_frame'>

        <div className='header_txt'>
          <h1>Ready to redefine your relationship with business critical data?</h1>
          <h1>Reach out.</h1>
        </div>

        {/* NEED SOME SORT OF EMAIL/INQUIRE COMPONENT HERE */}
        <div className='contact_info'>
          <div className='contact_static'>
            <h1>By phone:</h1>
            <h2>+1-911-911-9911</h2>
          </div>
          <div className='contact_form'>
            <h1>By email:</h1>
            {/* MAILS TO OCC EMAIL BUT WILL NEED TO SEND TO CALIBURN EMAIL */}
            <form method="POST"
                  action="mailto: owencahan1@gmail.com"
                  encType="multipart/form-data">
            
              <input type="text" name="name" placeholder='Your Name'></input>
              <br/>
              <input type="text" name="business" placeholder='Your Business'></input>
              <br/>
              <input type="text" name="email" placeholder='Your Email'></input>
              <br/>
              <input type="text" name="comment" placeholder='Your reasoning as to why we make a good team...'></input>
              <br/>
              <button type="submit">Send</button>
              <button type="reset">Clear</button>

            </form>
          </div>

        </div>

      </div>

      <h1 className='sect_split'>---</h1>

    <Pagefooter />

  </div>
);
}

export default InquirePage;


      {/* <div className="inquire_text">

        <h1>Inquire</h1>
        <p>If your data ingestion pipelines require human intervention,
            it's time for a change - as business intelligence capabilities evolve more rapidly than ever,
            <i> the quality of foundational business data processing is foundational to business survival</i>.</p>

        <p>We collect critical data <u>of all formats</u> with industry-leading reliability
          and create bespoke data pipelines optimized for integrating your business
          with state-of-the-art AI/ML and LLM-based technologies.
        </p>

        <p>Reach out. We work hard to ensure your competition will.</p>

        <ul>
            <li>inquire@OurBusinessEmail911.com</li>
            <li>+1-911-911-9119</li>
            <li>Our, Business, Address</li>
        </ul>

      </div> */}
