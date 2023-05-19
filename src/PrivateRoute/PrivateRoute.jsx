import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);

    if(user) {
        return children;
    }

    if(loader) {
        return <div className='text-center'>
            <progress className="progress w-56 text-center"></progress>
        </div>
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;