import React from 'react';
import Header from '../components/Header';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Home = () => {
    const webInfo=useLoaderData()
    console.log(webInfo)
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Banner webInfo={webInfo}>

                </Banner>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;