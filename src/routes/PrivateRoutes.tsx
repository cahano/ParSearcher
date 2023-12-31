//
// Setting Private Routes for Caliburn Site
//

import { Navigate, Route, Routes } from 'react-router-dom';
import DocParser from '../parser/DocParser';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/parser' element={<DocParser />} />
            {/* Again defining cases in which user enters anything other than '/[parser]' */}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};