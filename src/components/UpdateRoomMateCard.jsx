import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const UpdateRoomMateCard = ({data}) => {
    const { user } = use(AuthContext);
    const handleSubmit=(e)=>{
          e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());
        console.log('Coffee Data:', data);
        e.target.reset();
        fetch(`http://localhost:3000/roommates/${data._id}`,{
            method:"PUT",
           headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                   toast.success('Updated Data Successfully')
                }
        })
    }
    return (
        <div
            className="flex w-11/12 md:w-4/5 mx-auto flex-col items-center justify-center p-2 md:p-4 lg:p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-100"
        >
            <h1 className="text-4xl lg:text-6xl text-center font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                Update <br /> The Information Of Your Roommate
            </h1>
            <p className="text-center lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
                Then, fill out the details to list your space. This helps others find the right match!
            </p>

            <form onSubmit={handleSubmit} className="rounded-xl  p-4 md:p-6 lg:p-8 w-full max-w-4xl lg:max-w-5xl bg-white dark:bg-gray-900 bg-opacity-90 shadow-2xl backdrop-blur-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Objectives</label>
                        <input
                            required
                            type="text"
                            name="objectives"
                            placeholder="Write What You Want To Do!"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Location</label>
                        <input
                            required
                            type="text"
                            name="location"
                            placeholder="Enter Your location"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Rent Amount</label>
                        <input
                            required
                            type="number"
                            name="rent"
                            min={1}
                            placeholder="Type The Rent"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Room Type</label>
                        <input
                            required
                            type="text"
                            name="roomType"
                            placeholder="Enter Room Type"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Profession</label>
                        <input
                            required
                            type="text"
                            name="profession"
                            placeholder="Enter Your Profession"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Lifestyle Preferences</label>
                        <input
                            required
                            type="text"
                            name="lifestyle"
                            placeholder="Pets, Smoking, etc."
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Age</label>
                        <input
                            required
                            type="number"
                            name="age"
                            min={1}
                            placeholder="Enter Your Age"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Gender</label>
                        <select
                            name="gender"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Availability</label>
                        <select
                            name="availability"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none"
                        >
                            <option value="available">Available</option>
                            <option value="not-available">Not Available</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Contact Info</label>
                        <input
                            required
                            type="text"
                            name="contact"
                            placeholder="Phone or email"
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={`${user.displayName}`}
                            readOnly
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 dark:text-white font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={`${user.email}`}
                            readOnly
                            className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-700"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-gray-800 dark:text-white font-semibold mb-2">Photo URL Of The Room</label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Paste a URL of the room or yourself"
                        className="w-full text-black dark:text-white rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                    />
                </div>

                <div className="mt-6">
                    <label className="block text-gray-800 dark:text-white font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        placeholder="Write more about the place..."
                        className="w-full text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-800"
                    ></textarea>
                </div>

                <div className="mt-8">
                    <input
                        type="submit"
                        value="Add RoomMate"
                        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 cursor-pointer"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateRoomMateCard;
