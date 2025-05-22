import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  const [roomMates, setRoomMates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/roommatessix')
      .then((res) => res.json())
      .then((data) => {
        setRoomMates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching roommates:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
           <span className="loading loading-spinner text-success"></span>
        </div>;

  return (
    <div className='w-11/12 md:w-4/5 grid grid-col-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-6 mx-auto my-10 md:my-20'>
      {roomMates.map((roommate) => (
        <FeaturedCard key={roommate._id} roommate={roommate} />
      ))}
    </div>
  );
};

export default Featured;
