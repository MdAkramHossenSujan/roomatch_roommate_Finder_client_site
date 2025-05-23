import React from 'react';
import { useLoaderData } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DetailedCard from '../components/DetailedCard';


const RoomMateDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div>
              <Header></Header>
            </div>
            <div className='my-10 py-18 md:my-18'>
               <DetailedCard data={data}></DetailedCard>
            </div>
            <div>
              <Footer></Footer>
            </div>
        </div>
    );
};

export default RoomMateDetails;