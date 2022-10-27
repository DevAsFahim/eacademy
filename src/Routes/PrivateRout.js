import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


// only allow authenticated user to visit the route

const PrivateRout = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="text-center py-5 my-5"><Spinner animation="border" variant="warning" /></div>
    }
    
    if(!user) {
        return <Navigate to="/login" state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default PrivateRout;