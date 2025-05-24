import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Featured from '../components/Featured';
import WhatYouFind from '../components/WhatYouFind';
import Comments from '../components/Comments';
import RecentViews from '../components/RecentViews';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    const webInfo = useLoaderData()
    useEffect(() => {
        document.title = ` Home | RooMatch `;
      }, []); 
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="pt-18">
                <Banner webInfo={webInfo}>

                </Banner>
            </div>
            <div className='py-14 xl:py-24 text-center font-extrabold text-3xl lg:text-4xl dark:border-y dark:border-gray-500 bg-blue-400 dark:bg-green-950'>
                <p>Finding a great roommate should be hassle free.</p>
            </div>
            <div>
                <Outlet />
            </div>
            <div>

                <WhatYouFind />
            </div>
            <div>
                <Featured></Featured>
            </div>
            <div className="py-16 xl:py-24 text-center text-3xl lg:text-4xl font-extrabold transition-colors duration-300 
  bg-gradient-to-r from-rose-100 via-amber-100 to-emerald-100 
  dark:from-emerald-800 dark:via-emerald-950 dark:to-emerald-800 
  text-gray-800 dark:text-white border-y border-transparent dark:border-gray-600">
                <p>A roommate finder for wherever you may go.</p>
            </div>

            <div>
                <HowItWorks />
            </div>
            <div className='my-10'>
                <RecentViews />
            </div>
            <div className="py-16 xl:py-24 text-center transition-colors duration-300 bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-500 dark:from-indigo-800 dark:via-purple-950 dark:to-gray-800">
                <p className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
                    Our User Reviews & Instructions
                </p>
                <p className="mt-4 text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
                    Hear what others are saying and learn how to get the most out of your roommate search experience.
                </p>
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