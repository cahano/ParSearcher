//
// Setting Private Routes for Caliburn Site
//

import { useContext, ReactNode } from 'react';
import { Navigate, Route, Routes, redirect } from 'react-router-dom';
import DocParser from '../parser/DocParser';

import { AuthContext } from '../context/AuthContext';
import LoginPage from '../login/loginPage';

import { useAuthenticator } from '@aws-amplify/ui-react';

export const PrivateRoutes = () => {

    // THIS IS STILL DEFAULTING TO '' THEN UPDATES AFTER FIRST RENDER TO LOGGED IN USER 
    const { user, signOut } = useAuthenticator(context => [context.user]);
    // const { auth, setAuth } = useContext(AuthContext);

    // if (auth.username !== '')
    console.log('PRIVATE ROUTES')
    console.log(user)

    return (

        user !== undefined ? (        
        <Routes>
            <Route path='/parser' element={<DocParser />} />
            {/* Again defining cases in which user enters anything other than '/[parser]' */}
            {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>) : (
            <Routes>
                {/* <Route path='/*' element={<LoginPage />} /> */}
                <Route path='/parser' element={<DocParser />} />
                <Route path='/parser' element={<Navigate to='/login' replace />} />
            </Routes>
        )

    );
};