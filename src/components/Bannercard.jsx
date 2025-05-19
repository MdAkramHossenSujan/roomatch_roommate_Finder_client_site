import React from 'react';

const Bannercard = ({ info }) => {
    return (
        <div
            style={{
                position: 'relative',
                height: '60vh',
                overflow: 'hidden',
            }}
        >
            {/* Blurred Background Layer */}
            <div
                style={{
                    backgroundImage: `url(${info.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(6px)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />
            <div
                className='z-10 relative px-5 md:p-10 lg:p-20 xl:p-28 text-white'
            >
                <h1 className='text-5xl pt-18 lg:pt-0 lg:text-8xl poppins-regular md:text-7xl'>{info.country}</h1>
                <p className='xl:w-1/2 mt-4 w-2/3'>{info.comment}</p>
                <div className='flex gap-4 flex-wrap mt-4'>
                    <button className=' btn bg-orange-600 border-none text-white'>Browse RoomMate</button>
                    <button className='btn bg-orange-600 border-none text-white'>Add RoomMate</button>
                </div>
            </div>
        </div>

    );
};

export default Bannercard;