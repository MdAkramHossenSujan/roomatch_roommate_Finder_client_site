import React from 'react';
import {
    Briefcase,
    CalendarDays,
    BedDouble,
    Eye
} from 'lucide-react';

const RoommateCard = ({ roommate }) => {
    const {
        userName,
        createdAt,
        photo,
        objectives,
        profession,
        availability,
        roomType,
    } = roommate;

    const formattedDate = createdAt
        ? new Date(createdAt.trim()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
        : 'Unknown';

    return (
        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 relative">
            <div className="flex flex-col items-center text-center mb-6">
                <img
                    src={photo}
                    alt={userName}
                    className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-indigo-200 transition-transform hover:scale-105"
                />
                <p className="text-xs text-gray-400 mt-3 uppercase tracking-wide">Posted by</p>
                <h2 className="text-xl font-semibold text-gray-800">{userName}</h2>
                <p className="text-sm text-gray-500 mt-1">{formattedDate}</p>
            </div>

            <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-indigo-600">{objectives}</h3>
            </div>

            <div className="space-y-3 text-sm text-gray-700 font-medium px-2">
                <p className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-500" />
                    Profession: <span className="text-gray-800">{profession}</span>
                </p>
                <p className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-indigo-500" />
                    Availability: <span className="text-gray-800">{availability}</span>
                </p>
                <p className="flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-indigo-500" />
                    Room Type: <span className="text-gray-800">{roomType}</span>
                </p>
            </div>
            <div data-tip='See More' className="absolute tooltip bottom-5 right-5 group">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-indigo-100 hover:bg-indigo-200 shadow-md hover:shadow-lg cursor-pointer ">
                    <Eye className="text-indigo-700 w-5 h-5" />
                </div>
            </div>
        </div>
    );
};

export default RoommateCard;



