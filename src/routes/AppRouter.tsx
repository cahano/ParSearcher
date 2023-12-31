//
// DOM Base Router for Caliburn Site
//

import { useState, useEffect } from "react"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Pages viewable to anyone
import TeamPage from '../team/TeamPage';
import HomePage from '../home/HomePage';
import LoginPage from '../login/loginPage';
import InquirePage from '../inquire/InquirePage';

// Custom routes
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes' 

import { AuthProvider } from "../context/AuthContext";

// Func for checking if user is authenticated (i.e. logged in)
import { getAuthedUser } from '../login/auth/userInfo';


export const AppRouter = () => {

    // // For storing state of user authentication
    // const [user, setUser] = useState('')

    // // Checking if user is authenticated
    // useEffect(() => {
    //     getAuthedUser().then((r) => {
    //         console.log(r.username)
    //         // If userid isn't 'none; (i.e. not logged in)
    //         if (r.userId === '') {
    //             console.log('SETTING USERNAME IN STATE')
    //             setUser(r.username)
    //         } else {
    //             console.log('USER logged in')
    //             setUser('')
    //         }
    //     })
    // }, [])

    // console.log('USER')
    // console.log(user)

    return (
        <BrowserRouter>
            <Routes>
                {/* {
                    // If user is authenticated -> allow them to view private routes
                    user !== ''
                    ? <Route path="/*" element={<PrivateRoutes />} />
                    // Public routes (ONLY VIEWABLE WHEN *NOT* LOGGED IN)
                    : <Route path="/*" element={<PublicRoutes />} />
                } */}
                <Route path="/*" element={<PrivateRoutes />}/>
                {/* Pages viewable to anyone */}
                <Route path="/" element={<HomePage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/inquire" element={<InquirePage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* Redirects any other address extensions to the home page */}
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </BrowserRouter>
    )
}