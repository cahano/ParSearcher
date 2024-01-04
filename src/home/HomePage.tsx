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
        <a className='active' href="./">Caliburn</a>
        <a className="right_al_link" href="./login">login</a>
        <a className="right_al_link" href="./inquire">Inquire</a>
        <a className="right_al_link" href="./team">Team</a>
      </div>

      <div className="home_header">
        <div className="biggest_txt">
          <h1>The future of business technology is coming fast.</h1>
          <br />
          <h1>We prepare your business faster.</h1>
        </div>
        
        <h1 className="sect_split">---</h1>

        <div className="mission_sect">
          <div className="mission_txt">
            <h3>Caliburn was brought into existance with a straightfoward purpose:</h3>
              <h4>* Identify markets suffering from a foundational reliance on technologies of the passed</h4>
              <h4>** Partner with businesses to develop market-wide solutions reliant on technologies of the future</h4>
          </div>

          <div className="mission_link">
            <h3>More about us:</h3>
            <button className="team_link" onClick={teamLink}>Team</button>
          </div>
        </div>
        
        <h1 className="sect_split">---</h1>

        <div className='inquire_sect'>
          <div className='inquire_txt'>
            <h1>Sound Relevant?</h1>
            <h4>We work with businesses of all sizes to fundamentally change their relationship with data.</h4>
            <h4>And we are prepared to do the same with yours.</h4>
          </div>
          <div className="inquire_link">
            <h3>Let's talk:</h3>
            <button onClick={inquireLink}>Inquire</button>
          </div>
        </div>

        <h1 className="sect_split">---</h1>

        <div className='login_sect'>
          <div className="login_txt">
            <h1>Have an Account?</h1>
          </div>
          <div className='login_link'>
            <h3>Get to work:</h3>
            <button onClick={loginLink}>Client Login</button>
          </div>
        </div>

      </div>

      <Pagefooter />

    </div>
  );
}

export default HomePage;
