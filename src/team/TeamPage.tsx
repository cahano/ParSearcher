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

      <div className='about_frame'>

        <div className="header_text">
          <h1 className='h_1'>Caliburn is its people.</h1>
          <h1>Obsessed with outdated industries.</h1>
          <h1>Devoted to propogating innovation business-by-business.</h1>
        </div>

        <h1 className='sect_split'>---</h1>

        <div className='owen_sect'>

          <div className="mmb_title">
            <h1>Owen Cahan <span className='j_title'>Founder & CEO</span></h1>
          </div>

          <div className='mmb_header'>

            <div className='mmb_pic'>
              PIC OF OWEN
            </div>
            <div className='mmb_sum'>

              <ul>
                <li><b>Rensselaer Polytechnic Institute</b> (2021)</li>
                <ul>
                  <li>Mathematics</li>
                  <li>Business, Finance</li>
                </ul>

                <br />

                <li><b>J.P. Morgan</b> (2021 - 2024)</li>
                <ul>
                  <li>Investment Banking - CIB CRE Special Situations</li>
                  <li>Quantitative Research - CIB Structured Products Group</li>
                </ul>
              </ul>

            </div>

          </div>

          <div className='mmb_body'>
            <h3>Following an undergraduate experience concentrated heavily in mathematics,
              Owen headed to the Commercial Real Estate (CRE) group at J.P. Morgan where he contributed to advisory on
              highly structured speculative, ground-up development loans as well as special situations restructuring 
              and oppurtunistic credit oppurtunities. Having noticed the widespread oppurtunity for tech-based efficiency
              gain at an industry-leading institution, Owen moved to J.P. Morgan's Quantitative Research division to develop
              full-stack applications for the banking and trading arms of CRE. Looking for a way to more quickly solve the
              same industry-wide problems and better deliver them to businesses, Owen left JPM to start Caliburn
              with a trusted team of developers. 
            </h3>
            <h3>
              When not working on Caliburn, Owen spends time consuming news from all over the world,
              existing in NYC, playing squash, fly fishing, and finding other things to keep busy outdoors.
            </h3>
          </div>
        </div>


        <h1 className='sect_split'>---</h1>

        <div className='bran_sect'>

          <div className="mmb_title">
            <h1>Brandon Huang <span className='j_title'>Founder & CRO</span></h1>
          </div>

          <div className='mmb_header'>

            <div className='mmb_pic'>
              PIC OF Brandon
            </div>
            <div className='mmb_sum'>

              <ul>
                <li><b>Rensselaer Polytechnic Institute</b> (2021)</li>
                <ul>
                  <li>Computer Science</li>
                </ul>

                <br />

                <li><b>P.N.C.</b> (2022 - 2024)</li>
                <ul>
                  <li>Managing Software Engineering</li>
                </ul>
                <li><b>Grammarly</b> (2021 - 2022)</li>
                <ul>
                  <li>Machine Learning</li>
                </ul>
              </ul>

            </div>

          </div>

          <div className='mmb_body'>
            <h3>
              MORE DETAILED STUFF!!!!!
            </h3>
            <h3>
              FUN STUFF!!!!
            </h3>
          </div>
        </div>


        <h1 className='sect_split'>---</h1>

        <div className='mo_sect'>

          <div className="mmb_title">
            <h1>Mo Hayat <span className='j_title'>Founder & CTO</span></h1>
          </div>

          <div className='mmb_header'>

            <div className='mmb_pic'>
              PIC OF Mo
            </div>
            <div className='mmb_sum'>

              <ul>
                <li><b>Rensselaer Polytechnic Institute</b> (2020)</li>
                <ul>
                  <li>Electrical Engineering</li>
                </ul>

                <br />

                <li><b>Amazon</b> (2022 - 2024)</li>
                <ul>
                  <li>Cybersecurity - Software Engineering</li>
                </ul>
                <li><b>Bank of America</b> (2020 - 2022)</li>
                <ul>
                  <li>Software Engineering Associate</li>
                </ul>
              </ul>

            </div>

          </div>

          <div className='mmb_body'>
            <h3>
              MORE DETAILED STUFF!!!!!
            </h3>
            <h3>
              FUN STUFF!!!!
            </h3>
          </div>
        </div>


      </div>

        <Pagefooter />

      </div>
    );
}

export default TeamPage;
