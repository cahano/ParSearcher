//
// DOM Base Router for Caliburn Site
//

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Pages viewable to anyone
import TeamPage from '../team/TeamPage';
import HomePage from '../home/HomePage';
import LoginPage from '../login/loginPage';
import InquirePage from '../inquire/InquirePage';

// Custom routes
import { PrivateRoutes } from './PrivateRoutes' 


export const AppRouter = () => {
    return (
            <BrowserRouter>
                <Routes>
                    {/* Pages requiring auth */}
                    <Route path="/*" element={<PrivateRoutes />}/>
                    {/* Pages viewable to anyone */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/inquire" element={<InquirePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/* Redirects any other address extensions to the home page */}
                    <Route path='/*' element={<Navigate to='/' replace />} />
                </Routes>
            </BrowserRouter>

    )
}
