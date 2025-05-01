import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <img src={logo} alt="" />
                <h1 className='text-accent text-xl font-semibold'>Journalism Without Fear or Favour</h1>
                <h1 className='text-xl font-semibold'><span>Sunday,</span> <span className='text-accent'>November 27, 2025</span></h1>
            </div>
        </div>
    );
};

export default Header;