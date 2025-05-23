import React from 'react';

const Bannercard = ({ info }) => {
    return (
        <div className='h-100 xl:h-[60vh]'
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
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
                className='z-10 relative px-5 md:p-10 lg:p-20 xl:p-36 text-white'
            >
                <h1 className='text-3xl pt-18 lg:pt-0 lg:text-8xl poppins-regular md:text-5xl'>{info.country}</h1>
                <p className='xl:w-1/2 text-xs lg:text-lg mt-4 w-2/3'>{info.comment}</p>
                <div className='flex gap-4 pb-6 md:pb-0 flex-wrap mt-4'>
                    <button className=' btn btn-sm md:btn-md bg-orange-600 border-none text-white'>Browse City</button>
                    <button className='btn btn-sm md:btn-md bg-orange-600 border-none text-white'>Choose Your RoomMate</button>
                </div>
            </div>
        </div>

    );
};

export default Bannercard;