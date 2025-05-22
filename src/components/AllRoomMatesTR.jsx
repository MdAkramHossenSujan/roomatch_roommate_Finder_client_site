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

const AllRoomMatesTR = ({ roomMate }) => {
  const {
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
    <tr className="hover">
  {/* Avatar & Basic Info */}
  <td>
    <div className="flex items-center gap-4">
      <div className="avatar">
        <div className="mask mask-squircle w-16 h-16">
          <img
            src={photo}
            alt="Roommate Avatar"
          />
        </div>
      </div>
      <div>
        <div className="font-semibold text-lg text-gray-800 dark:text-gray-100">
          {userName}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <MdLocationOn className="text-blue-500 dark:text-blue-400" />
          {location}
        </div>
      </div>
    </div>
  </td>

  {/* Middle Section with 2-column grid on large screens */}
  <td>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
      <div className="flex items-center gap-2">
        {isAvailable ? (
          <FaCheckCircle className="text-green-500 dark:text-green-400" />
        ) : (
          <FaTimesCircle className="text-red-500 dark:text-red-400" />
        )}
        <span
          className={`font-medium ${
            isAvailable
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {availability}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <MdCalendarToday className="text-purple-500 dark:text-purple-400" />
        <span>Created: {formattedDate}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaMoneyBillWave className="text-emerald-500 dark:text-emerald-400" />
        <span>Rent: ${rent}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaDoorOpen className="text-yellow-600 dark:text-yellow-400" />
        <span>Room: {roomType}</span>
      </div>
    </div>
  </td>

  {/* See More Button */}
  <td>
    <button
      className="btn btn-ghost btn-xs tooltip tooltip-top"
      data-tip="See more"
    >
      <FaEye className="text-lg text-blue-600 dark:text-blue-400" />
    </button>
  </td>
</tr>

  );
};

export default AllRoomMatesTR;

