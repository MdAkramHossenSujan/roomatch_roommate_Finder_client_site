import { HandPlatter } from 'lucide-react';
import React, { use } from 'react';
import toast from 'react-hot-toast';
import { FaBlog, FaCommentDots, FaFileImage, FaHeading, FaPenFancy } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const CommentOrBlog = () => {
    const {user}=use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formdata = new FormData(form)
        const blog = Object.fromEntries(formdata.entries())
        const image=user.photoURL
        const oneBlog={
            ...blog,
            image:image
        }
        
        form.reset()
        fetch('https://roomatch-server.vercel.app/blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(oneBlog)

        })
            .then(res => res.json())
            .then(data => {
                // console.log('Added Blog', data)
                if (data.insertedId) {
                    toast.success('Your Blog Added Successfully')
                }
            })

    }
    const handleComment = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const comment = Object.fromEntries(formData.entries())
        const image=user.photoURL
        const oneComment={
            ...comment,
            image:image
        }
        form.reset()
        // console.log(oneComment)
        fetch('https://roomatch-server.vercel.app/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(oneComment)

        })
            .then(res => res.json())
            .then(data => {
                // console.log('Added Blog', data)
                if (data.insertedId) {
                    toast.success('Your Comment Added Successfully')
                }
            })
    }
    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 dark:bg-gray-900">

            {/* Blog Form */}
            <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition hover:shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                    <FaBlog className="text-blue-600" /> Post a Blog
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                            <FaHeading /> Title
                        </label>
                        <input
                            name='title'
                            required
                            type="text"
                            placeholder="Blog Title"
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                            <FaPenFancy /> Description
                        </label>
                        <textarea
                            required
                            name='blog'
                            rows="4"
                            placeholder="Write your blog..."
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                        ></textarea>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                            <FaFileImage /> Photo URL
                        </label>
                        <input
                            required
                            name='photo'
                            type="text"
                            placeholder="Enter image URL"
                            className="w-full p-2 border rounded-md text-sm text-gray-700 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full"
                    >
                        Post Blog
                    </button>
                </form>
            </div>

            {/* Comment Form */}
            <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition hover:shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                    <FaCommentDots className="text-green-600" /> Leave a Comment
                </h2>
                <form onSubmit={handleComment} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                            <FaHeading /> Title
                        </label>
                        <input
                            required
                            name='title'
                            type="text"
                            placeholder="Blog Title"
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                            <FaPenFancy /> Your Comment
                        </label>
                        <textarea
                            required
                            name='comment'
                            rows="4"
                            placeholder="Comment about the service..."
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-full"
                    >
                        Submit Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentOrBlog;

