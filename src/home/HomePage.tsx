//
// Parsearch Homepage
//

import React from 'react'
import './static/HomePage.css';
import { Pagefooter } from '../constants'


class HomePage extends React.Component {

  public loginLink() {
    // On button click, client is brought to login
    if (typeof window !== 'undefined') {
      window.location.href = "./#/login";
      }
  }

  public teamLink() {
    // On button click, client is brought to login
    if (typeof window !== 'undefined') {
      window.location.href = "./#/team";
      }
  }

  render() {
      return (

      <div className="whole_main_page">

        <div className='main_navbar'>
        </div>

        <div className="home_frame">

          <div className="home_text">

            <h1>ParSearch <span className="ver">0.1.0</span></h1>

            <p>Prepare your data for the future.</p>

          </div>

            <div className="home_links">

                <button className="login_link" onClick={this.loginLink}>Client Login</button>

                <button className="team_link" onClick={this.teamLink}>Project</button>

            </div>

        </div>
        
        <Pagefooter />

      </div>
    );
  }
}

export default HomePage;
