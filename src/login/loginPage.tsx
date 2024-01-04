//
// Parsearch Login
//

import React from 'react'
import './static/loginPage.css';
import { Pagefooter } from '../constants'

// Importing AWS auth widget
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// Importing AWS athenticator context
import { useAuthenticator } from '@aws-amplify/ui-react';


const LoginPage: React.FC = () => {

    // WILL NEED TO DETERMINE A BETTER WAY OF HANDLING LOGIN/LOGOUT SESSION MGMT
    //// WHICH COULD INVOLVE USING OUR OWN LOGIN COMPONENT (COMMENTED OUT BELOW)

    // Getting current AWS user
    const { user } = useAuthenticator(context => [context.user]);

    // Storing userID once user is logged in
    if (user !== undefined) {
        console.log('SETTING SESSION ITEM')
        sessionStorage.setItem("userID", user.userId)
        console.log(sessionStorage.getItem("userID"))
    } else {
        // Removing item (i.e. userID) if user is undefined -> i.e. "LOGGING OUT"
        //// THIS IS DONE TO SIMULATE A LOGOUT IN THE sessionStorage
        //// SINCE I AM UNABLE TO DO THIS DIRECTLY FROM AWS (e.g. "onLogout" button)
        try {
            console.log('REMOVING SESSION ITEM')
            sessionStorage.removeItem("userID")
            console.log(sessionStorage.getItem("userID"))
        } catch(e) {
            console.log(e)
        }
    }

    return (

        <div className="whole_main_page">

        <div className='main_navbar'>
            <a href="./">Caliburn</a>
            <a className="right_al_link_active" href="./login">login</a>
            <a className="right_al_link" href="./inquire">Inquire</a>
            <a className="right_al_link" href="./team">Team</a>
        </div>

        <div className="login_frame">


            {/* AWS Auth component */}
            <Authenticator>
                {({ signOut, user }) => (
                    <div>
                        {/* NEED TO FORWARD TO PARSER ONCE LOGGED IN - MAY JUST NEED TO CALL THAT WIDGET HERE? */}
                        <p>Welcome Idiot</p>
                        {/* "signing out" user from session (i.e. removing their creds from session storage) */}
                        <button onClick={signOut}>Sign out</button>
                    </div>

                )}
            </Authenticator>

            {/* OG AUTH COMPONENT */}
            {/* 
            <div className="welcome_text">

                <h1>Welcome</h1>

            </div> */}

            {/* <div className="user_form">

                <form onSubmit={handleSubmit}>

                    <input type="text"
                           value={user}
                           onChange={(event) => setUser(event.target.value)}
                           placeholder="Client ID" />

                    <input type="password"
                           value={pwrd}
                           onChange={(event) => setPwrd(event.target.value)}
                           placeholder="Password"/>

                    {/* Conditionally disabling button */}
                    {/* {user.length > 1 && pwrd.length > 1 ? (<div><button type="submit">Login</button></div>) 
                    : (<div><button type="submit" disabled>Login</button></div>)} */}

                {/* </form> */}

            {/* </div> */} 

        </div>
        
        <Pagefooter />

        </div>

    );
}


export default LoginPage;
