//
// DOM Base Router for parsearch Site
//

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Public pages
import HomePage from '../pages/public/homePage';
import LoginPage from "../pages/public/loginPage";
import SolutionsPage from "../pages/public/solutionsPage";
import InquirePage from "../pages/public/inquirePage";
import TeamPage from "../pages/public/teamPage";

// Protected route
import ProtectedRoute from './protectedRoute' 
// Private pages
import LandingPage from "../pages/private/landingPage";
import CorePage from "../pages/private/corePage";


export const AppRouter = () => {
    return (
            <BrowserRouter>
                <Routes>

                    {/* Pages requiring auth */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/landing" element={<LandingPage />} />
                        <Route path="/core" element={<CorePage />} />
                    </Route>

                    {/* Pages viewable to anyone */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/inquire" element={<InquirePage />} />
                    <Route path="/team" element={<TeamPage />} />

                    {/* Redirects any other address extensions to the home page */}
                    <Route path='/*' element={<Navigate to='/' replace />} />

                </Routes>
            </BrowserRouter>

    )
}
