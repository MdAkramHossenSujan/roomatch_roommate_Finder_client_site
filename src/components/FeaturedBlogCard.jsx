import React, { use, useEffect, useState } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import { AuthContext } from '../Provider/AuthProvider';
import { format } from 'date-fns';

const FeaturedBlogCard = () => {
  const { user, setLoader } = use(AuthContext)
  const [latesBlog, setLatestBlog] = useState([]);
  useEffect(() => {
    const fetchBlogs = () => {
      fetch('https://roomatch-server.vercel.app/latestblog')
        .then(res => res.json())
        .then(data => setLatestBlog(data))
        .catch(err => console.error('Fetching error:', err));
    };

    const intervalId = setInterval(fetchBlogs, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      {
        latesBlog.map((latestBlog, index) => {
          const { photo, title, blog, createdAt,image } = latestBlog;
          const formattedDate = format(new Date(createdAt), 'PPPp');
          const words = blog?.split(' ');
          const preview = words?.slice(0, 200).join(' ') + (words?.length > 200 ? '...' : '');
          return (
            <div key={index} className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={image}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-2 border-black-600 dark:border-white"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <MdOutlineDateRange />
                    {formattedDate}
                  </p>
                </div>
                <h2 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  {preview}
                </p>
              </div>

              {/* Right image */}
              <div className="w-full md:w-1/3">
                <img
                  src={photo}
                  alt="Featured Post"
                  className="w-full max-h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default FeaturedBlogCard;