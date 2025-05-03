import React from 'react';
import Header from '../Component/Header';
import RightAside from '../Component/HomeLayout/RightAside';
import NewsDetailsCart from '../Component/NewsDetailsCart';

const NewsDetails = () => {
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
            <section className='col-span-9'>
                <h1 className='font-bold mb-5'>Dragon News</h1>
                <NewsDetailsCart></NewsDetailsCart>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>

            </main>
        </div>
    );
};

export default NewsDetails;