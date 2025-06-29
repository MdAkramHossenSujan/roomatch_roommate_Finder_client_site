import React, { use, useEffect, useState } from 'react';
import {
  Mail, Phone, MapPin, User, Briefcase, Info, BedDouble,
  CalendarDays, Heart, Pencil, Trash2, CheckCircle, XCircle
} from 'lucide-react';
import { BiLike } from 'react-icons/bi';
import { format } from 'date-fns';
import { AuthContext } from '../Provider/AuthProvider';
import { FaHeart } from 'react-icons/fa6';

const DetailedCard = ({ data }) => {
  const [state, setState] = useState(false)
  const { user } = use(AuthContext);
  const {
    _id,
    userName,
    userEmail,
    contact,
    createdAt,
    age,
    location,
    gender,
    lifestyle,
    profession,
    roomType,
    rent,
    availability,
    description,
    photo,
    objectives,
    likes
  } = data;
  useEffect(() => {
            document.title = `Details Data of ${userName} | ${userEmail} | RooMatch`;
          }, [userEmail,userName]);
  // console.log(user.email, userEmail, data)
  const [hasLiked, setHasLiked] = useState(likes);
  // console.log(data._id)
  const formattedDate = format(new Date(createdAt), 'PPPp');
  const isAvailable = availability?.toLowerCase() === 'available';
  const handleLike = () => {
    setState(true)
    if (user.email !== userEmail) {
      fetch(`https://roomatch-server.vercel.app/roommates/${_id}/like`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: user.email }),
      })
        .then(res => res.json())
        .then(data => {
          setHasLiked(data.likes)
        })
        .catch(err => {
          console.error("Failed to update likes:", err);
        });
    }
  };
  return (
    <div className="bg-white w-11/12 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl max-w-3xl mx-auto p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">

      <div className='flex justify-between'>
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Posted on {formattedDate}</p>
          <p className={`flex items-center gap-2 text-sm font-medium ${isAvailable ? 'text-green-600' : 'text-red-500'}`}>
            {isAvailable ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            {availability}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaHeart className="text-red-500 dark:text-red-400 animate-pulse" />
          <p className="text-sm text-gray-600 animate-pulse duration-500 dark:text-gray-300">
            {hasLiked} {hasLiked === 1 ? 'person is' : 'people are'} interested
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mb-6">
        <img
          src={photo}
          alt={userName}
          className="w-64 md:w-96 transition-transform hover:scale-90 h-64 md:h-96 lg:h-[540px] lg:w-[540px]  rounded-full object-cover shadow-lg border-4 border-indigo-300 dark:border-indigo-600 mb-4"
        />
        <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide">Posted by</p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{userName}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{objectives}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-200 text-sm font-medium">
        <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-indigo-500" /> Profession: {profession}</div>
        <div className="flex items-center gap-2"><User className="w-4 h-4 text-indigo-500" /> Gender: {gender}</div>
        <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-indigo-500" /> Age: {age}</div>
        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-500" /> Location: {location}</div>
        <div className="flex items-center gap-2"><BedDouble className="w-4 h-4 text-indigo-500" /> Room Type: {roomType}</div>
        <div className="flex items-center gap-2"><Info className="w-4 h-4 text-indigo-500" /> Rent: ৳{rent}</div>
        <div className="flex items-center gap-2"><User className="w-4 h-4 text-indigo-500" /> Lifestyle: {lifestyle}</div>
      </div>

      <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
        <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-1">About</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{description}"</p>
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={handleLike} className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white text-xs px-3 py-2 md:px-4  md:text-sm cursor-pointer rounded-lg transition">
          <BiLike className="md:w-4 md:h-4" /> Like
        </button>
      </div>
      <div className='flex justify-end mt-4'>
        {
          state && <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-indigo-500" /> Contact: {contact}</div>
        }
      </div>
    </div>
  );
};

export default DetailedCard;

