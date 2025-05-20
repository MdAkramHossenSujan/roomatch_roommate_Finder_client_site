import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loader}=use(AuthContext)
    if(loader){
        return <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
           <span className="loading loading-spinner text-success"></span>
        </div>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/signIn'}></Navigate>
};

export default PrivateRoute;