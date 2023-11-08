//
// Parsearch Homepage
//

import React from 'react'
import './static/HomePage.css';
import { Pagefooter } from '../constants'


class HomePage extends React.Component {
  render() {
      return (

      <div className="whole_main_page">

        <div className='main_navbar'>
        </div>

        <div className="home_frame">

          <div className="home_text">

            <h1>ParSearch <span className="ver">0.1.0</span></h1>

          </div>

            <div className="home_links">

                <a href="./#/login">
                  <button className="login_link">Client Login</button>
                </a>

                <a href="./#/team">
                  <button className="team_link">About</button>
                </a>

            </div>

        </div>
        
        <Pagefooter />

      </div>
    );
  }
}

export default HomePage;
