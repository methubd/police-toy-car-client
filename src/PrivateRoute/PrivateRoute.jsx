import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);

    if(loader) {
        return <div className='text-center'>
            <progress className="progress w-56 text-center"></progress>
        </div>
    }

    if(user) {
        return children;
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please login to continue',
            showConfirmButton: true,
            timer: 2000
          })
    }

    

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;