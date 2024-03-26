//
// ParSearch private Landing Page
//

import { useNavigate } from "react-router-dom";

import './static/landingPage-styles.css'
import { Parts } from './../../components/particles'
// MAY Need to create custom navbar for logged-in user
//// SHOULD BE ABLE TO CONTROL THAT FROM HEADER COMPONENT
import NavBar from './../../components/header'
import Footer from './../../components/footer'
import { useAuth } from "../../hooks/useAuth"


const LandingPage: React.FC = () => {

    const navigate = useNavigate();

    function goCore() {
        navigate("/core");
    }
    
    // Calling auth hook
    const { username } = useAuth();

    return (

        <div className="parent">

            <NavBar />

            <div id="landing_title">
                <h1>Welcome, {username}</h1>
            </div>

            <div className='content_card' id="tools">
                <h1>Select your tool:</h1>
                <div id="ut_table">
                    <div className='ut_item' onClick={goCore}>
                        <h1 className='ut_title'>Core</h1>
                    </div>
                    <div className='ut_spacer'></div>
                    <div className='ut_item'>
                        <h1 className='ut_title'>Voyager</h1>
                    </div>
                    <div className='ut_spacer'></div>
                    <div className='ut_item'>
                        <h1 className='ut_title'>Analytics</h1>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Adding tsparticles background */}
            <div id="parts">
                <Parts />
            </div>

        </div>

    );
}


export default LandingPage;