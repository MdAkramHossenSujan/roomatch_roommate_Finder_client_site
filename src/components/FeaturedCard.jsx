import React from 'react';
import {
  Briefcase,
  CalendarDays,
  BedDouble,
  Eye
} from 'lucide-react';
import { Link } from 'react-router';
import { format } from 'date-fns';

const RoommateCard = ({ roommate }) => {
  const {
    userName,
    createdAt,
    photo,
    objectives,
    profession,
    availability,
    roomType,
    _id
  } = roommate;
const handleClick=()=>{
   fetch('http://localhost:3000/recents', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(roommate)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Posted Success', data)
            })
}
const formattedDate = format(new Date(createdAt), 'PPPp');
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl
      bg-gradient-to-br from-indigo-50 via-white to-gray-50 dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">

      <div className="flex flex-col items-center text-center mb-6">
        <img
          src={photo}
          alt={userName}
          className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-indigo-300 dark:border-indigo-600 transition-transform hover:scale-105"
        />
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 uppercase tracking-wide">Posted by</p>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{userName}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{formattedDate}</p>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{objectives}</h3>
      </div>

      <div className="space-y-3 text-sm font-medium text-gray-700 dark:text-gray-200 px-2">
        <p className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-indigo-500" />
          Profession: <span className="text-gray-800 dark:text-white">{profession}</span>
        </p>
        <p className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-indigo-500" />
          Availability: <span className="text-gray-800 dark:text-white">{availability}</span>
        </p>
        <p className="flex items-center gap-2">
          <BedDouble className="w-4 h-4 text-indigo-500" />
          Room Type: <span className="text-gray-800 dark:text-white">{roomType}</span>
        </p>
      </div>

      <div data-tip="See More" className="absolute bottom-5 right-5 group">
        <Link  to={`/browselisting/${_id}`}>
          <div onClick={handleClick} className="flex items-center justify-center w-11 h-11 rounded-full bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-700 dark:hover:bg-indigo-600 shadow-md hover:shadow-lg transition cursor-pointer">
            <Eye className="text-indigo-700 dark:text-white w-5 h-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RoommateCard;




