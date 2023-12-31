//
// Public Routes for the Caliburn Site
//

import { Navigate, Route, Routes } from 'react-router-dom';

import TeamPage from '../team/TeamPage';
import HomePage from '../home/HomePage';
import LoginPage from '../login/loginPage';
import InquirePage from '../inquire/InquirePage';

// PUBLIC ROUTES SEEM TO SHOW ONLY WHEN USER IS NOT LOGGED IN WITH CURRENT LOGIC
export const PublicRoutes = () => {
    return (
        <Routes>
            {/* Landing Page, w/ link to login, team, and inquire */}
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/inquire" element={<InquirePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Removing the below and moving to private route */}
            {/* <Route path="/parser" element={<DocParser />} /> */}
            {/* Below route redirects any other address extensions to the home page */}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};
