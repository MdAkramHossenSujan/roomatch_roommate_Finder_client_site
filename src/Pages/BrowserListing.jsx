import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router';
import AllRoomMatesTR from '../components/AllRoomMatesTR';

const BrowserListing = () => {
    const allRoomMates = useLoaderData()
    console.log(allRoomMates)
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='w-11/12 md:w-4/5 mx-auto my-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className='mx-auto'>Basic Info</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRoomMates.map((roomMate, index) => <AllRoomMatesTR key={index} roomMate={roomMate}></AllRoomMatesTR>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default BrowserListing;