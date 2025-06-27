import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const AllRoommates = () => {
  const data = useLoaderData(); 
  console.log(data)

  return (
    <div className="p-4 py-28 lg:py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl px-6 font-semibold mb-4">All Roommates</h2>
      <div className="overflow-x-auto p-4">
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
                  <td>{roommate.userName}</td>
                  <td>{roommate.location}</td>
                  <td>{roommate.age}</td>
                  <td>{roommate.contact}</td>
                  <td>{roommate.rent} ৳</td>
                  <td>{roommate.roomType}</td>
                  <td >
                    <Link  to={`/browselisting/${roommate._id}`}>
                    
                      <FaEye size={20} className='mx-auto'/>
                    
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No roommates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRoommates;
