import React from 'react';
import { Link } from 'react-router';

const Bannercard = ({ info }) => {
    return (
       <div
  className="h-[67vh] relative overflow-hidden"
>
  <div
    style={{
      backgroundImage: `url(${info.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(4px)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    }}
  />
  
  <div className="relative z-10 h-full w-full text-white flex flex-col justify-center px-5 md:px-14 lg:px-36 xl:px-64">
    <h1 className="text-3xl lg:text-6xl xl:text-8xl md:text-5xl poppins-regular">{info.country}</h1>
    <p className="text-[15px] xl:text-lg mt-4 w-2/3 xl:w-1/2">{info.comment}</p>
    
    <div className="flex gap-4 mt-6 flex-wrap">
      <Link to="/browselisting">
        <button className="btn btn-sm md:btn-md bg-orange-600 border-none text-white">
          Choose Your RoomMate
        </button>
      </Link>
    </div>
  </div>
</div>


    );
};

export default Bannercard;