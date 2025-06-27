import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import bg from '../assets/rooms/pexels-sheep-556180-1846416.jpg'
const ListingCard = () => {
    const { user } = use(AuthContext)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        // console.log('Coffee Data:', data);
        e.target.reset();
        fetch('https://roomatch-server.vercel.app/roommates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Posted Success', data)
                if (data.insertedId) {
                    toast.success('Your Data Added Successfully')
                }
            })
    }
    // console.log(user)
    return (
        <div
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}
            className='xl:py-14 py-10'
        >

            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            <div
                className="flex md:w-4/5 mx-auto flex-col items-center justify-center p-8"
                style={{ position: 'relative', zIndex: 10 }}
            >
                <h1 className="text-4xl lg:text-6xl text-center font-bold text-white mb-4">Looking <br /> For Roommate?</h1>
                <p className="text-center lg:text-2xl text-white max-w-2xl mb-8">
                    Then,Fill out the details to list your space. This helps others find the right match!
                </p>

                {/* Form Begins */}
                <form onSubmit={handleSubmit} className="rounded-lg p-8 w-full max-w-3xl bg-opacity-90 shadow-lg backdrop-blur-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-white font-semibold mb-2">Objectives</label>
                            <input required type="text" name="objectives" placeholder="Write What You Want To Do!" className="w-full text-black rounded px-4 py-2 bg-white" />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Location</label>
                            <input required type="text" name="location" placeholder="Enter Your location" className="w-full text-black rounded px-4 py-2 bg-white" />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Rent Amount</label>
                            <input min="1" required type="number" name="rent" placeholder="Type The Rent" className="w-full text-black rounded px-4 py-2 bg-white" />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Room Type</label>
                            <input required type="text" name="roomType" placeholder="Enter Room Type" className="w-full text-black rounded px-4 py-2 bg-white" />
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-2">Profession</label>
                            <input required type="text" name="profession" placeholder="Enter Your Profession" className="w-full text-black rounded px-4 py-2 bg-white" />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Lifestyle Preferences</label>
                            <input required type="text" name="lifestyle" placeholder="Pets, Smoking, etc." className="w-full text-black rounded px-4 py-2 bg-white" />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Age</label>
                            <input min="1" required type="number" name="age" placeholder="Enter Your Age" className="w-full text-black rounded px-4 py-2 bg-white" />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Gender</label>
                            <select name="gender" className="w-full text-black rounded px-4 py-2 bg-white">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Availability</label>
                            <select name="availability" className="w-full text-black rounded px-4 py-2 bg-white">
                                <option value="available">Available</option>
                                <option value="not-available">Not Available</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Contact Info</label>
                            <input required type="text" name="contact" placeholder="Phone or email" className="w-full text-black rounded px-4 py-2 bg-white" />
                        </div>

                        <div>
                            <label className="block text-white font-semibold mt-2">Name</label>
                            <input type="text" name="userName" value={`${user.displayName}`} readOnly className="w-full text-black rounded px-4 py-2 bg-gray-100" />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Email</label>
                            <input type="email" name="userEmail" value={`${user.email}`} readOnly className="w-full text-black rounded px-4 py-2 bg-gray-100" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-white font-semibold mt-4">Photo URL Of The Room</label>
                        <input type="text" name="photo" placeholder='Press a URL Of The Room Or Yourself' className="w-full text-black rounded px-4 py-2 bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-white font-semibold mt-4">Description</label>
                        <textarea name="description" placeholder="Write more about the place..." className="w-full text-black border rounded px-4 py-2 bg-white"></textarea>
                    </div>

                    <div className="mt-8">
                        <input
                            type="submit"
                            value="Add RoomMate"
                            className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 rounded cursor-pointer transition"
                        />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ListingCard;