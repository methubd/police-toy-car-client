import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const {user, googleLogin} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className='md:w-2/3 bg-purple-100 mx-auto p-10 text-center'>
            <h1 className='font-bold text-xl'>Please Login</h1>
            <form>

                <input 
                className='p-2 bg-purple-50 md:w-2/3 w-full border border-gray-300 md:my-2 mt-5' 
                type="email" 
                name="email" 
                placeholder='Email Address' />
                
                <input 
                className='p-2 bg-purple-50 md:w-2/3 w-full border border-gray-300 md:my-2 mt-5' 
                type="password" 
                name="password" 
                placeholder='Password' /> <br />

                <button className='bg-purple-500 px-8 py-1 my-2 text-white cursor-pointer'>Login</button>
            </form>

            <p className='py-2'><small>Do not have an account? <Link to='/register' className='text-blue-500'>Please Register</Link></small></p> 
            <div className='text-center w-1/2 md:w-1/3 mx-auto'>
            <button onClick={handleGoogleLogin} className='flex items-center text-sm border border-purple-400 px-4 py-1 rounded-md bg-purple-200 md:ms-4'> <img className='w-4 mr-2 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" /> 
            Login with Google
            </button>
            </div>

        </div>
    );
};

export default Login;