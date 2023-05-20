import React, { useContext } from 'react';
import { Tooltip } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const userName = user?.displayName;

    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
        .then(result => {
            const userStatus = result?.user;
            if(userStatus === undefined){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Successfully Log Out',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate('/login')
            }
        })
    }


    return (
        <nav>
            <div className="navbar bg-base-100 md:w-full">
                    <div className="navbar-start w-full">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-50 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allToys'>All Toys</Link></li>

                            {user &&
                                <>
                                    <li><Link to='/myToys'>My Toys</Link></li>
                                    <li><Link to='/addToy'>Add a Toy</Link></li>
                                </>
                            }

                            <li><Link to='/blog'>Blog</Link></li>   
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                        </div>
                        
                        <img className='w-24' src="https://i.pinimg.com/736x/b4/6f/79/b46f79268ff1721cadcd7ddbcd71291d--rc-cars-logo-design.jpg" alt="" />
                        <Link className='btn btn-ghost normal-case text-xl' to='/'>
                            POLICE toy car
                        </Link>
                        
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allToys'>All Toys</Link></li>
                            {user &&
                                <>
                                    <li><Link to='/myToys'>My Toys</Link></li>
                                    <li><Link to='/addToy'>Add a Toy</Link></li>
                                </>
                            }
                            <li><Link to='/blog'>Blog</Link></li>                            
                                                    
                        </ul>
                    </div>

                    {user ?
                        <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                            {/* TODO: text not showing */}
                            
                            <Tooltip
                                content={userName}
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}
                                >

                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                            </Tooltip>

                            {/* TODO: text not showing */}

                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>Settings</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                        </div>
                        :                        
                        <ul className='menu menu-horizontal px-1'>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    }
                    
                </div>
        </nav>
    );
};

export default Navbar;