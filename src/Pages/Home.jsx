import React from 'react';
import Header from '../components/Header';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Featured from '../components/Featured';
import WhatYouFind from '../components/WhatYouFind';
import Comments from '../components/Comments';
import RecentViews from '../components/RecentViews';

const Home = () => {
    const webInfo=useLoaderData()
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="pt-18 lg:py-20">
                <Banner webInfo={webInfo}>

                </Banner>
            </div>
            <div className='py-14 xl:py-24 text-center text-3xl lg:text-5xl dark:border-y dark:border-gray-500 text-gray-100 dark:text-white bg-blue-400 dark:bg-green-950'>
                <p>Finding a great roommate should be hassle free.</p>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <WhatYouFind/>
            </div>
            <div>
                <Featured></Featured>
            </div>
            <div className='py-14 xl:py-24 text-center text-3xl lg:text-5xl dark:border-y dark:border-gray-500 text-gray-700 dark:text-white bg-green-400 dark:bg-blue-950'>
                <p>A roommate finder for wherever you may go.</p>
            </div>
            <div className='my-10'>
                <RecentViews/>
            </div>
            <div>
                <Comments></Comments>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;