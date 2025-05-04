import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/HomeLayout/LeftAside';
import RightAside from '../Component/HomeLayout/RightAside';
import Loading from '../Component/Loading';

const Home = () => {

    const { state } = useNavigation()

    return (
        <div>
            <header >
                <Header ></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <section >
                    <Navbar></Navbar>
                </section>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 mt-10'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main-nav col-span-6 '> {state == "loading" ? < Loading /> : <Outlet></Outlet>} </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;