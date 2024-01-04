//
// Setting Private Routes for Caliburn Site
//

import { Navigate, Route, Routes } from 'react-router-dom';
import ParserPage from '../parser/DocParser';


export const PrivateRoutes = () => {

    // Getting current userID if it exists
    let currUser = sessionStorage.getItem("userID")
    console.log(currUser)

    return (
        // If user exists, route to parser
        currUser !== null ? (
            <Routes>
                <Route path='/parser' element={<ParserPage />} />
            </Routes>
            // Otherwise, send to login page
        ) : (
            <Routes>
                {/* If unauthenticated and attempting to use /parser, send to /login */}
                <Route path='/parser' element={<Navigate to='/login' replace />} />
            </Routes>
        )
    );
};