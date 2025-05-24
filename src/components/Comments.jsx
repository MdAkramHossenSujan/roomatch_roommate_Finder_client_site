import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { formatDistanceToNow } from 'date-fns';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const Comments = () => {
    const [comments, setComments] = useState([])
    const { setLoader, user } = use(AuthContext)
    const [state, setState] = useState(false)
    useEffect(() => {
        fetch('https://roomatch-server.vercel.app/comment')
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setComments(data)
            })
    }, [setLoader])
    const onlyComment = comments.slice(0, 3)
    return (
        <div className='max-w-7xl px-8 mx-auto my-14'>
            <div className=' mx-auto border rounded-3xl p-8 xl:p-12'>
                <h1 className='text-3xl font-semibold'>Comments</h1>
                {
                    (state ? comments : onlyComment).map((comment, index) => {
                        {
                            return (
                                <div key={index} className="items-start space-x-4 p-4 rounded-xl">
                                    <div className='flex gap-2'>
                                        <div className="w-10 my-auto h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform hover:scale-110">
                                            <img
                                                src={comment.image}
                                                alt="Profile"
                                                className="w-full h-full border-2 border-orange-800 rounded-full dark:border-white object-cover"
                                            />
                                        </div>
                                        <div className='my-auto'>
                                            <div className="font-semibold">{comment.title}</div>
                                            <div className="text-xs text-gray-400">{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</div>
                                        </div>
                                    </div>

                                    <div>

                                        <div className="mt-3 text-xs">{comment.comment}</div>
                                    </div>
                                    <button>

                                    </button>
                                </div>
                            );
                        }
                    })
                }
                <div onClick={() => setState(!state)} className='flex justify-center'>
                    <button
                        className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-orange-300 hover:text-white dark:bg-orange-800 dark:text-gray-200 hover:bg-orange-700 text-gray-500 font-semibold rounded-full shadow-md transition duration-300"
                    >
                        {state ? 'Show Less' : 'Show More'}
                        {state ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Comments;