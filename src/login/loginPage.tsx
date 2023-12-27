//
// Parsearch Login
//

import React from 'react'
import './static/loginPage.css';
import { Pagefooter } from '../constants'

// Importing AWS auth widget
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const LoginPage: React.FC = () => {
    const [user, setUser] = React.useState('');
    const [pwrd, setPwrd] = React.useState('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('username:', user);
      console.log('password:', pwrd);

      // ANY AUTH LOGIC GETS INITIATIED HERE USING THE ABOVE STATE VALS

      // On form submit, client is brought to parser
      if (typeof window !== 'undefined') {
        window.location.href = "./#/parser";
        }
    };

    return (

        <div className="whole_main_page">

        <div className='main_navbar'>
          <a href="./#">Home</a>
        </div>

        <div className="login_frame">


            {/* AWS Auth component */}
            <Authenticator>
                {({ signOut, user }) => (
                    <div>
                        <p>Welcome Idiot</p>
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
