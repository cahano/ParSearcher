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
        <a href="./">Caliburn</a>
        <a className="right_al_link" href="./login">Login</a>
        <a className="right_al_link" href="./inquire">Inquire</a>
        <a className="right_al_link_active" href="./team">Team</a>
      </div>

        <div className="about_frame">

          <div className="about_text">

            <h1>Team</h1>

            <div className='member'>
              <h2>Owen Cahan</h2>
              <p><i>Rensselaer Polytechnic Institute - Mathematics, Business (2021); JPM Investment Banking,
                 JPM Quantitative Research</i></p>
            </div>

            <div className='member'>
              <h2>Brandon Huang</h2>
              <p><i>Rensselaer Polytechnic Institute - Computer Science (2021); Grammarly, PNC</i></p>
            </div>

            <div className='member'>
              <h2>Mo Hayat</h2>
              <p><i>Rensselaer Polytechnic Institute - Electrical Engineering (2020); Bank of America, AWS</i></p>
            </div>

          </div>

        </div>

        <Pagefooter />

      </div>
    );
}

export default TeamPage;
