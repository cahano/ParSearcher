
import React from 'react'
import './static/InquirePage.css';
import { Pagefooter } from '../constants'


class InquirePage extends React.Component {

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
          <a href="./#">Home</a>
        </div>

        <div className="inquire_frame">

          <div className="inquire_text">

            <h1>Inquire</h1>
            <p>If any of your data ingestion pipelines require human intervention,
                it's time for a change - as cutting edge technologies continue to evolve more rapidly than ever
                and drive value,<i> the quality of business data processing is business survival</i>.</p>

            <p>Reach out. We work hard to ensure your competition will.</p>

            <ul>
                <li>inquire@OurBusinessEmail.com</li>
                <li>+1-911-911-9119</li>
                <li>Our, Business, Address</li>
            </ul>

          </div>

        </div>

        <Pagefooter />

      </div>
    );
  }
}

export default InquirePage;