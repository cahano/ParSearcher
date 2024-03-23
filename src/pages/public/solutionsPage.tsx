//
// ParSearch Solutions Page
//

import './static/solutionsPage-styles.css';
import { Parts } from './../../components/particles'
import NavBar from './../../components/header'
import Footer from './../../components/footer'
import { NavLink } from 'react-router-dom';


const SolutionsPage: React.FC = () => {

    return (

        <div className="parent">

            <NavBar />

            <div id="sol_frame">
                
                <h1 id="lead">Three Products - One ParSearch Platform</h1>

                {/* 'Table' of our products */}
                <div id="sol_table">
                    <a className='sol_link' href='#core'>
                        <div className='st_item'>
                            <h2>Core</h2>
                            <p>Scalable document data extraction with unmatched reliability.</p>
                            
                        </div>
                    </a>
                    <a className='sol_link' href='#voyager'>
                        <div className='st_item'>
                            <h2>Voyager</h2>
                            <p>Integrated private cloud centralization and storage.</p>
                        </div>
                    </a>
                    <a className='sol_link' href='#perpetuity'>
                        <div className='st_item'>
                            <h2>Perpetuity</h2>
                            <p>Impactful application of AI, ML, and LLM.</p>
                        </div>
                    </a>
                </div>

                {/* Subsections for each of our products */}
                <div id="sol_sub">
                    <div className='content_card' id="core">
                        <h1 className='product_title'>Core</h1>
                        <p className='sub_txt'>Proprietary data extraction models built by and for your business
                            eliminate manual data extraction - and set the foundation of your
                            modern data platform.</p>
                        <p>By simply logging in, you will have access to a custom data extraction tool for your businesses critical documents. Upload and
                            in minutes receive extracted data in your desired format.</p>
                        <p>Being the core of your ParSearch platform, this product necessitates a rigorous client onboarding. Please inquire for more details.</p>
                    </div>

                    <div className='content_card' id="voyager">
                        <h1 className='product_title'>Voyager</h1>
                        <p className='sub_txt'>Modern, secure cloud-based storage for your extracted data.</p>
                        <p>By working with you to develop a Core instance, the work to develop a Voyager instance is already done.</p>
                        <p>Creating for your business a built-to-suit modern data platform.</p>
                    </div>

                    <div className='content_card' id='perpetuity'>
                        <h1 className='product_title'>Perpetuity</h1>
                        <p className='sub_txt'>With a ParSearch platform, your business is now positioned
                                               to make meaningful use of AI, ML, and LLM technologies</p>
                        <p>And we have a number of options to get you started.</p>
                        <p><NavLink to="/inquire"> Reach out</NavLink> to get your ParSearch platform started today.</p>
                    </div>
                </div>

                {/* Importing navbar */}
                <Footer />

            </div>

                    
            {/* Adding tsparticles background */}
            <div id="parts">
                <Parts />
            </div>

        </div>

    );
}


export default SolutionsPage;
