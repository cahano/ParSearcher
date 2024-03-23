//
// ParSearch Inquire page
//

import './static/inquirePage-styles.css';
import NavBar from './../../components/header'
import Footer from './../../components/footer'
import { Parts } from './../../components/particles'

const InquirePage: React.FC = () => {

    return (

        <div id="parent">

            <NavBar />

            <div className='header_txt'>
                <h1>Questions? Have a use case? Want a demo?</h1>
                <h1 id="lets_chat">Let's chat.</h1>
            </div>

            {/* Contact info; phone, email HTML form */}
            <div className='content_card' id="contact_card">

                <div className='contact_static'>
                    <h1>By phone:</h1>
                    <h2>+1-911-911-9911</h2>
                </div>
                <div className='contact_form'>
                    <h1>By email:</h1>
                    {/* MAILS TO OCC EMAIL BUT WILL NEED TO SEND TO CALIBURN EMAIL */}
                    <form method="POST"
                        action="mailto: owencahan1@gmail.com"
                        encType="multipart/form-data">
                        <input type="text" name="name" placeholder='Your Name'></input>
                        <br/>
                        <input type="text" name="business" placeholder='Your Business'></input>
                        <br/>
                        <input type="text" name="email" placeholder='Your Email'></input>
                        <br/>
                        <input type="text" name="comment" placeholder='Hello, ParSearch ...'></input>
                        <br/>
                        <button type="submit">Send</button>
                        <button type="reset">Clear</button>
                    </form>
                </div>

            </div>


            {/* Importing navbar */}
            <Footer />

            {/* Adding tsparticles background */}
            <div id="parts">
                <Parts />
            </div>

        </div>

    );
}


export default InquirePage;

