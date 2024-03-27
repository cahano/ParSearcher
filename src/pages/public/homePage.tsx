//
// ParSearch Home page
//

import React from 'react'
import { useNavigate } from "react-router-dom";

import './static/homePage-styles.css'
import { Parts } from './../../components/particles'
import NavBar from './../../components/header'
import Footer from './../../components/footer'


const HomePage: React.FC = () => {

  // Importing router navigation hook
  const navigate = useNavigate();

  // Navigating
  function handleSol() {
    navigate("/solutions");
  }
  function handleInq() {
    navigate("/inquire");
  }
  function handleTeam() {
    navigate("/team");
  }
  function handleLogin() {
    navigate("/login");
  }

  return (

    <div className='parent'>

      {/* Importing navbar */}
      <NavBar />

      <div id="home_frame">

        {/* LANDING PAGE */}
        <div id='title_sect'>

          <h1 id="lead_line">"This process should be automated."</h1>

          <h2 id="sec_line">Still saying it?</h2>
          
          <h2 id="thd_line">Despite the growing power of AI, millions of businesses
                            still handle data <i>no differently than 20 years ago.</i></h2>

          <a className='sol_link' href='#_scrollto'>
            <h2 id="forth_line"><i>Let's finally change that.</i></h2>
          </a>

        </div>

        {/* FOLLOWING LANDING PAGE */}
        <div id="under_page" className='content_card'>
          <br/>
          <h1 id="up_title">ParSearch Platforms</h1>
          {/* _scrollto controls the location of so_link above */}
          <div id="_scrollto"></div>
          <p className='home_p'><b>ParSearch was created to meaningfuly modernize workflows
                                and data handling for businesses requiring
                                100% trust in their data.</b></p>

          {/* TABLE TO HOLD OUR PAGE ITEMS FOR A NICE DISPLAY */}
          <div id='home_table'>

            {/* Solutions panel */}
            <div className='ht_item'>
              <h3>Our Solutions</h3>

              <p>How we work with you to achieve unmatched reliability in automation.</p>

               <button onClick={handleSol}>Solutions</button>
            </div>
            <div className='ht_spacer'></div>
            {/* Inquire Panel */}
            <div className='ht_item'>
              <h3>Sound Relevant?</h3>

              <p>Time to reach out. We're happy to chat about your use case today.</p>

               <button onClick={handleInq}>Inquire</button>
            </div>
            <div className='ht_spacer'></div>
            {/* Team panel */}
            <div className='ht_item'>
              <h3>Our Team</h3>

              <p>Get to know the people behind ParSearch.</p>

              <button onClick={handleTeam}>Team</button>
            </div>
            <div className='ht_spacer'></div>
            {/* Login panel */}
            <div className='ht_item'>
              <h3>Login</h3>

              <p>Welcome back.</p>

              <button onClick={handleLogin}>Login</button>
            </div>

          </div>

        </div>

        
      {/* Importing footer */}
      <Footer />

      </div>
      
      {/* Adding tsparticles background */}
      <div id="parts">
        <Parts />
      </div>

    </div>

  );
}

export default HomePage;
