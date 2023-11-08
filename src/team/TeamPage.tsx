//
// About page
//

import React from 'react'
import { Pagefooter } from '../constants'
import './static/TeamPage.css';


class TeamPage extends React.Component {
  render() {
      return (

      <div className="whole_main_page">

        <div className='main_navbar'>
        </div>

        <div className="about_frame">

          <div className="about_text">

            <h1>Our purpose in a single question</h1>
            <p><i> If even 10% of each of the millions of PDF's contents on which you train are
                  innaccurately parsed, is the resulting AI model reliable?</i></p>

              <p>No, it isn't. </p>
              <p>PDF parsing is the foundation of any models intending to use it,
                and after seeing the many failures of current parsing techniques and understanding
                the ubiquity of the PDF, a far more precise alternative was needed - for <i>every</i> LLM
                use-case involving PDFs.</p>

            <br />

            <h1>Team</h1>

            <div className='member'>
              <h2>Brandon Huang</h2>
              <p><i>Rensselaer Polytechnic Institute - Computer Science (2021); Grammarly, PNC</i></p>
            </div>

            <div className='member'>
              <h2>Mo Hayat</h2>
              <p><i>Rensselaer Polytechnic Institute - Electrical Engineering (2020); Bank of America, AWS</i></p>
            </div>

            <div className='member'>
              <h2>Owen Cahan</h2>
              <p><i>Rensselaer Polytechnic Institute - Mathematics, Business (2021); JPM Investment Banking,
                 JPM Quantitative Research</i></p>
            </div>

          </div>

        </div>

        <Pagefooter />

      </div>
    );
  }
}

export default TeamPage;
