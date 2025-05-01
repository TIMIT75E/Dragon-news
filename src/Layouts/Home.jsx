import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';

const Home = () => {
    return (
        <div>
            <header >
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <section>
                    <Navbar></Navbar>
                </section>
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