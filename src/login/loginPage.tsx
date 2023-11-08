//
// Parsearch Login
//

import React from 'react'
import './static/loginPage.css';
import { Pagefooter } from '../constants'


class LoginPage extends React.Component {
  render() {
      return (

      <div className="whole_main_page">

        <div className='main_navbar'>
        </div>

        <div className="home_frame">

          <div className="home_text">

            <h1>ParSearch <span className="ver">0.1.0</span></h1>

            <h4>Our purpose in a single question:</h4> <p><i> If even 10% of each of the millions of PDF's contents on which you train are
                innaccurately parsed, is the resulting AI model reliable?</i></p>

            <br />

            <p>LOGIN STUFF</p>

          </div>

        </div>
        
        <Pagefooter />

      </div>
    );
  }
}

export default LoginPage;
