import React, { use, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router';
import {
    FaEye,
    FaMoneyBillWave,
    FaDoorOpen,
    FaCheckCircle,
    FaTimesCircle,
    FaEdit,
    FaTrashAlt,
} from 'react-icons/fa';
import { MdLocationOn, MdCalendarToday } from 'react-icons/md';
import { format } from 'date-fns';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Five from '../Animation/Five';
import { AuthContext } from '../Provider/AuthProvider';
const MyListings = () => {
    const myAddings = useLoaderData()
    const [roomMates, setRoomMates] = useState(myAddings)
    const {user}=use(AuthContext)
     useEffect(() => {
            document.title = `RoomMateData Listing Of ${user.displayName} | RooMatch`;
          }, [user.displayName ]);
        //   console.log(user)
    const handleDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            draggable: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://roomatch-server.vercel.app/roommates/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const updatedCoffes = roomMates.filter(data => data._id !== _id)
                            setRoomMates(updatedCoffes)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='w-11/12 md:w-4/5 mx-auto'>
                {
                    (roomMates.length == 0 ?
                        <div>
                            <div className='mx-auto'>
                                <Five />
                            </div>
                            <div className="text-center pb-14">
                                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                                    No listings yet — your future roommate is waiting!
                                </h2>
                                <p className="max-w-xl mx-auto">
                                    Create your first listing or browse available profiles to get started. It only takes a minute to meet someone who fits your vibe.
                                </p>
                            </div>

                        </div>
                        :
                        <div className='my-10 py-20'>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr className='border border-gray-600'>
                                            <th>Profile</th>
                                            <th className='mx-auto'>Basic Info</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roomMates.map((roomMate, index) => {
                                            const {
                                                _id,
                                                photo,
                                                userName,
                                                location,
                                                createdAt,
                                                availability,
                                                rent,
                                                roomType,
                                            } = roomMate;

                                            const formattedDate = format(new Date(createdAt), 'PPPp');
                                            const isAvailable = availability.toLowerCase() === 'available';

                                            return (
                                                <tr key={_id} className="hover border border-gray-600">
                                                    {/* Avatar & Basic Info */}
                                                    <td className="py-4 px-2">
                                                        <div className="flex flex-col items-center text-center gap-2">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle transition-transform hover:scale-105 w-16 h-18">
                                                                    <img src={photo} alt="Roommate Avatar" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-sm lg:text-lg text-gray-800 dark:text-gray-100">
                                                                    {userName}
                                                                </div>
                                                                <div className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
                                                                    <span className="flex items-center justify-center gap-1">
                                                                        <MdLocationOn className="text-blue-500 dark:text-blue-400" />
                                                                        Location:
                                                                    </span>
                                                                    {location}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    {/* Basic Info Data */}
                                                    <td className="py-4 px-2">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs lg:text-sm text-gray-700 dark:text-gray-300">
                                                            <div className="flex items-center gap-2">
                                                                <FaCheckCircle
                                                                    className={`text-lg ${isAvailable ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}
                                                                />
                                                                <span
                                                                    className={`font-medium ${isAvailable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                                                                >
                                                                    {availability}
                                                                </span>
                                                            </div>

                                                            <div className="flex items-center gap-2">
                                                                <MdCalendarToday className="text-purple-500 dark:text-purple-400" />
                                                                <span className="font-medium hidden lg:block">Created:</span>
                                                                <span className="truncate">{formattedDate}</span>
                                                            </div>

                                                            <div className="flex items-center gap-2">
                                                                <FaMoneyBillWave className="text-emerald-500 dark:text-emerald-400" />
                                                                <span className="font-medium">Rent:</span>
                                                                <span>Tk{rent}</span>
                                                            </div>

                                                            <div className="flex items-center gap-2">
                                                                <FaDoorOpen className="text-yellow-600 dark:text-yellow-400" />
                                                                <span className="font-medium">Room:</span>
                                                                <span>{roomType}</span>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    {/* Actions */}
                                                    <td className="py-4 px-4">
                                                        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
                                                            <Link to={`/updatelisting/${_id}`}>
                                                                <button className="btn btn-xs lg:btn-sm btn-outline btn-primary flex items-center gap-1 w-full sm:w-auto">
                                                                    <FaEdit /> Update
                                                                </button>
                                                            </Link>
                                                            <button onClick={() => handleDelete(_id)} className="btn btn-xs lg:btn-sm btn-outline btn-error flex items-center gap-1 w-full sm:w-auto">
                                                                <FaTrashAlt /> Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>


                                </table>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MyListings;