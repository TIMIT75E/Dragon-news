import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <img src={logo} alt="" />
                <h1 className='text-accent text-xl font-semibold'>Journalism Without Fear or Favour</h1>
                <p className='text-xl font-semibold '><span>{format
                    (new Date(), 'EEEE,')}</span> <span className='text-accent'> {format(new Date(),'MMMM MM, YYY')}</span></p>
            </div>
        </div>
    );
};

export default Header;