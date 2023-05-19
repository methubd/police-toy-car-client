import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);


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
                        </ul>
                        </div>
                        
                        <img className='w-24' src="https://i.pinimg.com/736x/b4/6f/79/b46f79268ff1721cadcd7ddbcd71291d--rc-cars-logo-design.jpg" alt="" />
                        <Link to='/'><a className="btn btn-ghost normal-case text-xl">Police Toy Car</a></Link>
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

                    {user &&
                        <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz76YDsU1KW-NrjUE6WIYvEdGHNkTAQ4Kf3tyxzvA&s" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>Settings</a></li>
                            <li onClick={logOut}><a>Logout</a></li>
                        </ul>
                        </div>
                    }
                    
                </div>
        </nav>
    );
};

export default Navbar;