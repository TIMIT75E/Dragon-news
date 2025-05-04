import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import users from '../assets/user.png'
import { AuthContext } from '../Provider/AuthContext';

const Navbar = () => {

    const {user,signOutUser} = use(AuthContext);


    const handelLogOut=()=>{
        // console.log("user trying to log out");
        signOutUser()
        .then(()=>{
            alert("You Loging Out From The Site")
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className='w-11/12 mx-auto text-center flex justify-between items-center mb-10 '>
            <div className="font-bold text-lg">
                {user && user.displayName}
            </div>
            <div className="nav">
                <ul className='flex gap-5 text-accent'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </ul>
            </div>
            <div className="login flex gap-4">
                {
                    user? <img src={user.photoURL} className='w-12 h-12 rounded-full' alt="" /> : <img src={users} className='' alt="" />
                }
                {
                    user? <button onClick={handelLogOut} className='btn btn-primary text-2xl font-bold py-3 px-8'>Log Out</button> : <Link to="/auth/login" className='btn btn-primary text-2xl font-bold py-3 px-8 '>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;