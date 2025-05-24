import React, { use, useEffect, useState } from 'react';
import FeaturedBlogCard from '../components/FeaturedBlogCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommentOrBlog from '../components/CoomentorBlog';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { format } from 'date-fns';
import { MdOutlineDateRange } from 'react-icons/md';


const BlogSection = () => {
    const posts = useLoaderData()
    const [blogs, setblogs] = useState(posts)
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('http://localhost:3000/blog');
                const data = await res.json();
                setblogs(data);
            } catch (err) {
                console.error('Fetching error:', err);
            }
        };

        fetchBlogs(); // Initial fetch
        const intervalId = setInterval(fetchBlogs, 500); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Header />
            <section className="max-w-7xl mx-auto px-6 py-30">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Blog</h1>
                <FeaturedBlogCard />

                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Latest Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            blogs.map((post, idx) => {
                                const { user } = use(AuthContext);
                                const { photo, title, blog, createdAt,image } = post;
                                const formattedDate = format(new Date(createdAt), 'PPPp');

                                const words = blog?.split(' ');
                                const preview = words?.slice(0, 20).join(' ') + (words?.length > 20 ? '...' : '');


                                return (
                                    <div key={idx} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition-all max-w-md mx-auto">
                                        {/* Top section: user image and date */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <img
                                                src={image}
                                                alt="User"
                                                className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                                            />
                                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                <MdOutlineDateRange className="text-gray-400" />
                                                <span>{formattedDate}</span>
                                            </div>
                                        </div>

                                        {/* Blog image */}
                                        <div className="relative">
                                            <img
                                                src={photo}
                                                alt={title}
                                                className="rounded-md h-40 w-full object-cover"
                                            />
                                        </div>

                                        {/* Blog title */}
                                        <h3 className="mt-3 font-semibold text-gray-900 dark:text-white text-lg">{title}</h3>

                                        {/* Blog text preview/full */}
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                            {preview}
                                            {words?.length > 20 && (
                                                <button
                                                    className="ml-1 cursor-pointer text-blue-600 hover:underline font-medium"
                                                >
                                                    Show More
                                                </button>
                                            )}
                                        </p>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div>
                    <CommentOrBlog />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogSection;