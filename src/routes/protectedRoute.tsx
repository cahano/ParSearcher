//
// ParSearch protected route component
//

import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth"


const ProtectedRoute = () => {

    // Calling auth hook 
    const { isAuthenticated, isLoading, username } = useAuth();

    // Render protected route if user is authenticated
    return (
            isLoading ?
            <div>LOADING</div> : isAuthenticated ?
            <Outlet /> : <Navigate to="/login" replace />
           );

};

export default ProtectedRoute;
