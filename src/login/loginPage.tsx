//
// Parsearch Login
//

import React from 'react'
import './static/loginPage.css';
import { Pagefooter } from '../constants'


const LoginPage: React.FC = () => {
    const [user, setUser] = React.useState('');
    const [pwrd, setPwrd] = React.useState('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('username:', user);
      console.log('password:', pwrd);
      // On form submit, client is brought to parser
      if (typeof window !== 'undefined') {
        window.location.href = "./#/parser";
        }
    };

    return (

        <div className="whole_main_page">

        <div className='main_navbar'>
        </div>

        <div className="login_frame">

            <div className="welcome_text">

                <h1>Welcome</h1>

            </div>

            <div className="user_form">

                <form onSubmit={handleSubmit}>
                    <input type="text" value={user} onChange={(event) => setUser(event.target.value)} />

                    <input type="password" value={pwrd} onChange={(event) => setPwrd(event.target.value)} />

                    <button type="submit">Login</button>
                </form>

            </div>

        </div>
        
        <Pagefooter />

        </div>

    );
}


export default LoginPage;
