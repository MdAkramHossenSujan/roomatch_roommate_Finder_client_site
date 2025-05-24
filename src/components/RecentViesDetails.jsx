import React, { useContext, useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaEye, FaTrash } from 'react-icons/fa6';
import { AuthContext } from '../Provider/AuthProvider';

const RecentViewsDetails = () => {
    const { user, setLoader } = useContext(AuthContext);
    const [latestView, setLatestView] = useState([]);

    useEffect(() => {
        fetch('https://roomatch-server.vercel.app/recents')
            .then(res => res.json())
            .then(data => {
                setLatestView(data);
                setLoader(false);
            })
            .catch(err => console.error('Fetching error:', err));
    }, [setLoader]);

    const handleDelete = (_id) => {
        fetch(`https://roomatch-server.vercel.app/recents/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const updatedData = latestView.filter(item => item._id !== _id);
                setLatestView(updatedData);
            });
    };

    const latestViewSliced = latestView.slice(0, 4);

    return (
        <div>
            <div className="text-center text-4xl font-bold pb-6">
                Recently Visited
            </div>

            <div className="max-w-7xl px-6 pb-10 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {latestViewSliced.map((card) => {
                    const {
                        _id,
                        photo,
                        userName,
                        age,
                        location
                    } = card;

                    return (
                        <div key={_id} className="mx-auto rounded-2xl p-4">
                            <div className="flex flex-col items-center text-center">
                                <div className='relative'>
                                    <img
                                        src={photo}
                                        alt={userName}
                                        className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
                                    />
                                    <button
                                        onClick={() => handleDelete(_id)}
                                        className="absolute cursor-pointer top-1 right-1 text-red-500 hover:text-red-700"
                                        title="Delete"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                                <h2 className="mt-4 text-xl font-semibold text-gray-500 dark:text-gray-300">{userName} | {age}</h2>
                                <p className="dark:text-gray-400 text-gray-700 text-sm">Room for rent - {location}</p>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentViewsDetails;
