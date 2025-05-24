import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { formatDistanceToNow } from 'date-fns';
import { FaEye, FaTrash } from 'react-icons/fa6';
import Seven from '../Animation/Seven';
import { Link } from 'react-router';

const RecentViews = () => {
    const { user, setLoader } = use(AuthContext)
    const [latestView, setLatestView] = useState([]);
    useEffect(() => {

        fetch('https://roomatch-server.vercel.app/recents')
            .then(res => res.json())
            .then(data => {
                setLatestView(data)
                setLoader(false)
            })
            .catch(err => console.error('Fetching error:', err));
    }, [setLoader]);
    // console.log(latestView)
    const viewedData = latestView.slice(0, 4)

    const handleDelete = (_id) => {
        // console.log(_id)
        fetch(`https://roomatch-server.vercel.app/recents/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const updatedData = latestView.filter(data => data._id !== _id)
                setLatestView(updatedData)

            })

    }
    const latestViewSliced=latestView.slice(0,3)
    return (
        <>
            {
                latestView.length == 0 ? <div>
                    <div class="text-center text-4xl font-bold">
                        Explore your desired roommates
                    </div>

                    <Seven />
                </div> :
                    <div>
                        <div class="text-center text-4xl font-bold pb-10">
                        Recently Visited
                    </div>
                        <div className='max-w-7xl px-6 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            latestViewSliced.map((card, index) =>
                                <div key={index}
                                    className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-md h-72 bg-cover bg-center flex items-end text-white"
                                    style={{ backgroundImage: `url(${card.photo})` }}
                                >
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-opacity-40"></div>

                                    {/* Content */}
                                    <div className="relative z-10 w-full p-4 flex flex-col justify-between h-full">
                                        {/* Top: Remove Button */}
                                        <div className="flex justify-between items-start">
                                            <span
                                                className={`px-3 py-1 text-xs animate-pulse rounded-full capitalize ${card.availability === "available" ? "bg-green-600" : "bg-red-600"
                                                    }`}
                                            >
                                                {card.availability === "available" ? "Available" : "Not Available"}
                                            </span>

                                            <button
                                                onClick={() => handleDelete(card._id)}
                                                className="flex items-center cursor-pointer gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs px-4 py-2 rounded-full shadow-md transition duration-200"
                                                aria-label="Remove item"
                                            >
                                                <FaTrash />
                                                Remove
                                            </button>
                                        </div>

                                        {/* Bottom Info */}
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="text-sm font-semibold">{card.location}</div>
                                                <div className="text-xs text-gray-200">
                                                    {formatDistanceToNow(new Date(card.createdAt), { addSuffix: true })}
                                                </div>
                                            </div>
                                            <Link to={`/browselisting/${card._id}`}>
                                            <button className="text-white cursor-pointer hover:text-orange-400 transition-transform transform hover:scale-110">
                                                <FaEye size={20} />
                                            </button></Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                    </div>
            }
        </>
    );
};

export default RecentViews;