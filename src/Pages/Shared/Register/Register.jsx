import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {newUserRegister} = useContext(AuthContext);

    const handleUserRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value; 
        const image = form.image.value;
        const newUser = {name, email, password, confirm, image}

        //TODO: have to store user information on database except the password

        if(password !== confirm){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please check your password',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else{
            newUserRegister(email, password)
            .then(result => {
                const registeredUser = result.user;
                if(registeredUser){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully User Created!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      form.reset();
                }
            })
            .catch(error => {
                console.log(error.message);
            })

        }
        
        

    }
    return (
        <div className='md:w-2/3 bg-purple-100 mx-auto p-10 text-center'>
            <h1 className='font-bold text-xl'>Please Register</h1>
            <form onSubmit={handleUserRegister}>
                <input 
                className='p-2 bg-purple-50 md:w-2/3 w-full border border-gray-300 md:my-2 mt-5' 
                type="text" 
                name="name" 
                placeholder='Your Name' />

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

                <input 
                className='p-2 bg-purple-50 md:w-2/3 w-full border border-gray-300 md:my-2 mt-5' 
                type="password" 
                name="confirm" 
                placeholder='Confirm Password' /> <br />
                
                <input 
                className='p-2 bg-purple-50 md:w-2/3 w-full border border-gray-300 md:my-2 mt-5' 
                type="text" 
                name="image" 
                placeholder='Image URL' /> <br />

                <button className='bg-purple-500 px-8 py-1 my-2 text-white cursor-pointer'>Register</button>
            </form>

            <p className='py-2'><small>Already have an account? <Link to='/login' className='text-blue-500'>Please Login</Link></small></p> 

        </div>
    );
};

export default Register;