import React, { useEffect } from 'react';
import Error from '../Animation/Error';
import { useLocation, useRouteError } from 'react-router';

const ErrorPage = () => {
const error=useRouteError()
const { pathname } = useLocation();
     useEffect(() => {
            document.title = `${error.data}`;
          }, [error.data]);

     useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    // console.log(error.data)
    return (
        <div className='min-h-screen py-20'>
            <div>
                <Error/>
            </div>
            <div className='py-6'>
                <p className='font-extrabold text-lg text-center'>{error.data}</p>
                <p className='text-gray-700 mt-2 text-center dark:text-gray-300'>The page you are searching not found.</p>
            </div>
        </div>
    );
};

export default ErrorPage;