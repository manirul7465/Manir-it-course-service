import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const AdminRout = ({children}) => {
    const  {user,isLoading,admin}=useAuth();
    let location=useLocation();
    if(isLoading){return <Spinner animation="border" variant="success" />}

    
    if(user.email && admin){
        return children;
    }
    return <Navigate to="/" state={{from: location}}/>
};

export default AdminRout; 