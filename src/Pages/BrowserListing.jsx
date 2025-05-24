import React, { use } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AllRoomMatesTR from '../components/AllRoomMatesTR';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router';
import Six from '../Animation/Six';

const BrowserListing = () => {
    const roomMates = useLoaderData()
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='w-11/12 md:w-4/5 mx-auto my-10 py-20'>
            <div>
                <Six/>
            </div>
                <div className="text-center py-8 lg:py-12 px-4 ">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Find Your Perfect Roommate
                    </h1>
                    <p className="max-w-2xl mx-auto">
                        Browse verified profiles, filter by your lifestyle preferences, and connect with compatible roommates in just a few clicks.
                    </p>
                </div>

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