//
// Parsearch Homepage
//

import React from 'react'
import './static/HomePage.css';
import { Pagefooter } from '../constants'


class AboutPage extends React.Component {
  render() {
      return (

      <div className="whole_main_page">

        <div className='main_navbar'>
          <a className="active" href="./#">Home</a>
          <a href="./#/parser">Parser</a>
          <a href="./#/team">Team</a>
        </div>

        <div className="home_frame">

          <div className="home_text">

            <h1>ParSearch <span className="ver">0.0.1</span></h1>

            <h4>Our purpose in a single question:</h4> <p><i> If even 10% of each of the millions of PDF's contents on which you train are
                innaccurately parsed, is the resulting AI model reliable?</i></p>

            <br />

            <p>No, it isn't. </p>
            <p>PDF parsing is the foundation of any models intending to use it,
               and after seeing the many failures of current parsing techniques and understanding
               the ubiquity of the PDF, a far more precise alternative was needed - for <i>every</i> LLM
               use-case involving PDFs.</p>

          </div>

        </div>
        
        <Pagefooter />

      </div>
    );
  }
}

export default AboutPage;
