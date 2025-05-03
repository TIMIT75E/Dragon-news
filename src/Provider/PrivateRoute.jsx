import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {


    const { user, loading } = use(AuthContext);
    // console.log(user);
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-xl text-primary"></span>
        </div>
    }

    if (user && user?.email) {

        return children;
    }
    return <Navigate to="/auth/login" ></Navigate>


};

export default PrivateRoute;