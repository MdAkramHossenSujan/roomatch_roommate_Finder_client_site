import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UpdateRoomMateCard from '../components/UpdateRoomMateCard';
import { useLoaderData } from 'react-router';

const UpdateRoomMate = () => {
    const data=useLoaderData()
    useEffect(() => {
            document.title = `Updata The Data Of ${data.userName} | UpdateUser |RooMatch`;
          }, [data.userName]);
        //   console.log(data)
    return (
        <div>
            <div>
<Header></Header>
            </div>
            <div className='my-10 lg:my-20'>
<UpdateRoomMateCard data={data}></UpdateRoomMateCard>
            </div>
            <div>
<Footer></Footer>
            </div>
        </div>
    );
};

export default UpdateRoomMate;