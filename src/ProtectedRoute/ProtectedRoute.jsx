import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
const location=useLocation()
    const {user }=UseAuth();
   
   

    if(!user){
        return <Navigate to="/login" state={location.pathname || '/'}  />;
    }
    return(
        <>{children}</>
    )
};

export default ProtectedRoute;