//
// About page
//

import React from 'react'
import { Pagefooter } from '../constants'
import './static/TeamPage.css';


const TeamPage: React.FC = () => {
      
  return (

      <div className="whole_main_page">

        <div className='main_navbar'>
          <a href="./">Home</a>
        </div>

        <div className="about_frame">

          <div className="about_text">

            <h1>Our Purpose, Simply</h1>
            <p><i>Bring the future to enterprise data.</i></p>

            <p>Many, multi-trillion dollar industries are stricken with foundational data stored innaccesibly to
              algorithmic tools of today. Worse yet, these foundational data structures require hours of manual work
              for even the simplest of analyses.
            </p>

            <p>We seek to free market participants from the data structures bounding them to the past,
              and introduce to them technologies of the future.
            </p>

            <p>Sound relevant to your firm? <a href="./inquire">Inquire</a></p>

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

export default TeamPage;
