import React, { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DetailedCard from '../components/DetailedCard';
import RecentViewsDetails from '../components/RecentViesDetails';


const RoomMateDetails = () => {
    const data = useLoaderData()
    const { pathname } = useLocation();
    // console.log(data)
     useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div>
            <div>
              <Header></Header>
            </div>
            <div className='my-10 pt-18 md:my-18'>
               <DetailedCard data={data}></DetailedCard>
            </div>
            <div>
              <RecentViewsDetails/>
            </div>
            <div>
              <Footer></Footer>
            </div>
        </div>
    );
};

export default RoomMateDetails;