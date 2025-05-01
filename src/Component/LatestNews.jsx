import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary p-3'>Latest</p>
            <Marquee pauseOnHover={true}>
                <p className='font-bold'>📰 Breaking News: Government Announces New Economic Policy | 🌐 Global Markets React to Tech Stock Surge | ⚽ Champions League Final Set for Sunday Night | 💼 Job Market Sees Record Growth in Q2 | 🌪️ Severe Weather Alerts Issued in Coastal Areas</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;