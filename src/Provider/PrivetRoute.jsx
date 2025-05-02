import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivetRoute = ({children}) => {

    const {user,loading} = use(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    // if user thakle return children 
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    // user na thalkle navigate login page

};

export default PrivetRoute;