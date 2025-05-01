import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';

const Home = () => {
    return (
        <div>
            <header className='max-w-5xl mx-auto text-center'>
                <Header></Header>
            </header>
            <main className='max-w-5xl mx-auto text-center mt-10'>
                <section className='lefrt-nav'> </section>
                <section className='main-nav '> <Outlet></Outlet> </section>
                <section className='right-nav'> </section>
            </main>
        </div>
    );
};

export default Home;