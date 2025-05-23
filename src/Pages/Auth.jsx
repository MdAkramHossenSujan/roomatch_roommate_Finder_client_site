
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Auth = () => {
    return (
        <div >
            <div>
                <Header />
            </div>
            <div className='min-h-screen pt-20'>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Auth;