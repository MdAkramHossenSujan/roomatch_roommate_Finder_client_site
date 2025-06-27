import React from "react";
import { FaEye, FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaMoneyBillWave, FaDoorOpen } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const AllRoommates = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="p-4 py-28 lg:py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl px-6 font-semibold mb-8 text-center">All Roommates</h2>

      {/* Table view - large screens */}
      <div className="overflow-x-auto hidden lg:block">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Contact</th>
              <th>Rent</th>
              <th>Room Type</th>
              <th>See Details</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((roommate) => (
                <tr key={roommate._id}>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={roommate.photo} alt={roommate.userName} />
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap">{roommate.userName}</td>
                  <td className="whitespace-nowrap">{roommate.location}</td>
                  <td>{roommate.age}</td>
                  <td className="whitespace-nowrap">{roommate.contact}</td>
                  <td>{roommate.rent} ৳</td>
                  <td>{roommate.roomType}</td>
                  <td>
                    <Link to={`/browselisting/${roommate._id}`}>
                      <FaEye size={20} className="mx-auto text-primary" />
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-10">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <FaUserAlt size={50} className="mb-4 text-gray-400" />
                    <p className="text-lg font-medium">No roommates found.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Card view - small & medium screens */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
        {data && data.length > 0 ? (
          data.map((roommate) => (
            <div
              key={roommate._id}
              className="bg-base-200 rounded-lg p-4 shadow-md flex gap-4 items-start"
            >
              <div className="avatar shrink-0">
                <div className="w-20 rounded-full">
                  <img src={roommate.photo} alt={roommate.userName} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                  <FaUserAlt className="text-primary" /> {roommate.userName}
                </h3>
                <p className="text-sm flex items-center gap-2 mb-1 text-gray-700">
                  <FaMapMarkerAlt className="text-primary" /> {roommate.location}
                </p>
                <div className="flex gap-4">
                    <p className="text-sm flex items-center gap-2 mb-1">
                  Age: <span className="font-medium">{roommate.age}</span>
                </p>
                <p className="text-sm flex items-center gap-2 mb-1">
                  <FaPhoneAlt className="text-primary" /> {roommate.contact}
                </p>
                </div>
                <div className="flex gap-4">
                    <p className="text-sm flex items-center gap-2 mb-1">
                  <FaMoneyBillWave className="text-primary" /> {roommate.rent} ৳
                </p>
                <p className="text-sm flex items-center gap-2 mb-2">
                  <FaDoorOpen className="text-primary" /> {roommate.roomType}
                </p>
                </div>
                <Link
                  to={`/browselisting/${roommate._id}`}
                  className="btn btn-primary btn-sm mt-2"
                >
                  <FaEye className="mr-2" /> See Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center mt-16 text-gray-500">
            <FaUserAlt size={60} className="mb-4 text-gray-400" />
            <p className="text-xl font-semibold">No roommates found.</p>
            <p className="text-center text-gray-500 mt-2">
              Please check back later or add a new listing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRoommates;

