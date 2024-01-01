//
// Parsearch Homepage
//

import React from 'react'
import './static/HomePage.css';
import { Pagefooter } from '../constants'


const HomePage: React.FC = () => {

  function loginLink() {
    // On button click, client is brought to login
    if (typeof window !== 'undefined') {
      window.location.href = "./login";
      }
  }

  function teamLink() {
    // On button click, client is brought to login
    if (typeof window !== 'undefined') {
      window.location.href = "./team";
      }
  }

  function inquireLink() {
    // On button click, client is brought to login
    if (typeof window !== 'undefined') {
      window.location.href = "./inquire";
      }
  }

  return (

    <div className="whole_main_page">

      <div className='main_navbar'>
      </div>

      <div className="home_frame">

        <div className="home_text">

          <h1>Caliburn <span className="ver">0.1.0</span></h1>

          <p>Prepare your data for the future.</p>

        </div>

          <div className="home_links">

              <button className="team_link" onClick={teamLink}>Project</button>

              <button className="login_link" onClick={loginLink}>Client Login</button>

              <button className="inquire_link" onClick={inquireLink}>Inquire</button>

          </div>

      </div>
      
      <Pagefooter />

    </div>
  );
}

export default HomePage;
