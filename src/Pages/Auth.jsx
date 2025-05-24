
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';

const Auth = () => { 
    const { pathname } = useLocation();
    useEffect(() => {
                    document.title = `Register Your Account | RooMatch`;
                  }, []);
                   useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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