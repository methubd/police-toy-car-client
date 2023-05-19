import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);

    if(user) {
        return children;
    }

    if(loader) {
        return <div>Loading...</div>
    }
    
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;