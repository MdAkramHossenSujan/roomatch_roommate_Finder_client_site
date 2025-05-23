import React from 'react';
import {
  FaEye,
  FaMoneyBillWave,
  FaDoorOpen,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import { MdLocationOn, MdCalendarToday } from 'react-icons/md';
import { format } from 'date-fns';
import { Link } from 'react-router';

const AllRoomMatesTR = ({ roomMate }) => {
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
    <tr className="hover:border border border-gray-600 text-center sm:text-left">
  {/* Avatar & Basic Info */}
  <td className="md:px-4 lg:px-8 md:py-4">
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <div className="avatar">
        <div className="mask mask-squircle transition-transform hover:scale-105 w-16 h-16">
          <img src={photo} alt="Roommate Avatar" />
        </div>
      </div>
      <div>
        <div className="font-semibold text-xs md:text-lg text-gray-800 dark:text-gray-100">
          {userName}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start gap-1">
          <MdLocationOn className="text-blue-500 dark:text-blue-400" />
          {location}
        </div>
      </div>
    </div>
  </td>

  {/* Middle Section */}
  <td className="px-3 py-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
      <div className="flex items-center gap-2">
        {isAvailable ? (
          <FaCheckCircle className="text-green-500 dark:text-green-400" />
        ) : (
          <FaTimesCircle className="text-red-500 dark:text-red-400" />
        )}
        <span className={`font-medium ${isAvailable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {availability}
        </span>
      </div>

      <div className="md:flex hidden items-center gap-2">
        <MdCalendarToday className="text-purple-500 dark:text-purple-400" />
        <span className="font-medium">
        {formattedDate}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaMoneyBillWave className="text-emerald-500 dark:text-emerald-400" />
        <span className="font-medium hidden md:block">Rent:</span>
        <span>Tk{rent}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaDoorOpen className="text-yellow-600 dark:text-yellow-400" />
        <span className="font-medium hidden md:block">Room:</span>
        <span>{roomType}</span>
      </div>
    </div>
  </td>

  {/* Action Button */}
  <td className="px-3 py-4">
   <Link to={`/browselisting/${_id}`}>
    <button
      className="btn btn-ghost btn-xs tooltip tooltip-top"
      data-tip="See more"
    >
      <FaEye className="text-lg text-blue-600 dark:text-blue-400" />
    </button></Link>
  </td>
</tr>



  );
};

export default AllRoomMatesTR;

