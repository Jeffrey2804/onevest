import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    const authToken = localStorage.getItem('cflToken');
    return authToken ? true : false;
};

const ProtectedRoutes = ({ path, element }) => {
    return isAuthenticated() ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default ProtectedRoutes;
