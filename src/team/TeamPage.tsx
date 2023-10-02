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
          <a href="./#">Home</a>
          <a href="./#/parser">Parser</a>
          <a className="active" href="./#/team">Team</a>
        </div>

        <div className="about_frame">

          <div className="about_text">

            <h1>Team</h1>

            <div className='member'>
              <h2>Brandon Huang</h2>
              <p><i>Rensselaer Polytechnic Institute - Computer Science (2021); Grammarly, PNC.</i></p>
            </div>

            <div className='member'>
              <h2>Mo Hayat</h2>
              <p><i>Rensselaer Polytechnic Institute - Electrical Engineering (2020); Bank of America, AWS.</i></p>
            </div>

            <div className='member'>
              <h2>Owen Cahan</h2>
              <p><i>Rensselaer Polytechnic Institute - Mathematics, Business (2021); Magnetar, JP Morgan.</i></p>
            </div>

          </div>

        </div>

        <Pagefooter />

      </div>
    );
  }
}

export default TeamPage;
