import React, { use } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AllRoomMatesTR from '../components/AllRoomMatesTR';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router';

const BrowserListing = () => {
    const roomMates=useLoaderData()
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='w-11/12 md:w-4/5 mx-auto my-10 py-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='border border-gray-600'>
                                <th>Name</th>
                                <th className='mx-auto'>Basic Info</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                roomMates.map((roomMate, index) => <AllRoomMatesTR key={index} roomMate={roomMate}></AllRoomMatesTR>)
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