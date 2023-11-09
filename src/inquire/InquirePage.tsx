
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
            <p>If your data ingestion pipelines require human intervention,
                it's time for a change - as business intelligence capabilities evolve more rapidly than ever,
                <i> the quality of foundational business data processing is foundational to business survival</i>.</p>

            <p>We collect critical data <u>of all formats</u> with industry-leading reliability
              and create bespoke data pipelines optimized for integrating your business
              with state-of-the-art AI/ML and LLM-based technologies.
            </p>

            <p>Reach out. We work hard to ensure your competition will.</p>

            <ul>
                <li>inquire@OurBusinessEmail911.com</li>
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