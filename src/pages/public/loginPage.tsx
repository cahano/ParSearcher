//
// ParSearch User login
//

import { useNavigate } from "react-router-dom";
// Importing AWS auth widget
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './static/loginPage-styles.css';
import NavBar from './../../components/header'
import Footer from './../../components/footer'
import { Parts } from './../../components/particles'
import { useAuth } from "../../hooks/useAuth"


const LoginPage: React.FC = () => {

    // Calling navigate hook
    const navigate = useNavigate();

    // Calling auth hook
    const { isAuthenticated, isLoading, signOut } = useAuth();

    // Handling succesful user login (and succesful logout [edge case])
    if (isAuthenticated && !isLoading) {
        navigate("/landing")
    }

    return (

        <div className="parent">

            <NavBar />

            <div id="login_frame">

                {/* AWS Auth component; hiding sign up button */}
                <Authenticator hideSignUp>
                    {({ user }) => (
                        <div>
                            {/* NEED TO FORWARD TO PARSER ONCE LOGGED IN - MAY JUST NEED TO CALL THAT WIDGET HERE? */}
                            <p>Welcome, {user?.username}</p>
                            {/* "signing out" user from session (i.e. removing their creds from session storage) */}
                            <button onClick={signOut}>Sign out</button>
                        </div>
                        )
                    }
                </Authenticator>
                
            </div>

            {/* Importing footer */}
            <Footer />
            
            {/* Adding tsparticles background */}
            <div id="parts">
                <Parts />
            </div>

        </div>

    );
}


export default LoginPage;




            // {/* PLACEHOLDER UNTIL AUTH COMES INS */}
            // <div id="fake">
            //     <div className="welcome_text">
            //         <h1>Welcome</h1>
            //     </div>
            //     <div className="user_form">
            //         <form>
            //             <input type="text"
            //                 value=''
            //                 onChange={(event) => alert('client')}
            //                 placeholder="Client ID" />
            //             <input type="password"
            //                 value=''
            //                 onChange={(event) => alert('pwrd')}
            //                 placeholder="Password"/>
            //         </form>
            //     </div> 
            // </div>
