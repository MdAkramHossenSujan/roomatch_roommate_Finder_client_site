import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UpdateRoomMateCard from '../components/UpdateRoomMateCard';
import { useLoaderData, useLocation } from 'react-router';

const UpdateRoomMate = () => {
  const data = useLoaderData()
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `Updata The Data Of ${data.userName} | UpdateUser |RooMatch`;
  }, [data.userName]);
  //   console.log(data)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className='py-20 lg:py-32'>
        <UpdateRoomMateCard data={data}></UpdateRoomMateCard>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default UpdateRoomMate;