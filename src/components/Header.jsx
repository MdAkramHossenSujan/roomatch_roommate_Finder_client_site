import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NavLink } from 'react-router';
import { FaGoogle } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Header = () => {
    const { toggleTheme, theme } = use(AuthContext)
    const [open, setOpen] = useState(false)
    return (
        <div className='flex poppins-regular justify-between w-11/12 py-5 text-xl  mx-auto'>
            <span onClick={() => setOpen(!open)} className='flex lg:hidden gap-4'>
                {
                    open ? <X size={30} className='lg:hidden my-auto'></X> : <Menu size={30} className='lg:hidden my-auto' />
                }
                <ul className={`lg:hidden z-20 text-white dark:bg-white bg-gray-700 dark:text-black pr-24 pl-14 min-h-screen py-14 rounded-r-2xl duration-400 absolute ${open ? 'left-0 top-14' : '-left-100 top-14'}`}>
                    <div className='flex mb-5 flex-col gap-2'>
                        <p className='my-auto md:hidden text-3xl md:text-4xl lg:text-5xl font-bold'>RooMatch</p>
                    </div>
                    <li className='border-b-1 text-gray-100 py-1'><NavLink to={'/'}>Home</NavLink></li>
                    <li className='border-b-1 text-gray-100 py-1'><NavLink to={'/browsinglisting'}>Browse Roommates</NavLink></li>
                    <li className='border-b-1 text-gray-100 py-1' ><NavLink to={'/blog'}>Blog</NavLink></li>
                    <Link to={'/auth/register'}><button className='btn-block cursor-pointer text-red-600 border-b-1 py-1'>Sign Up</button></Link>
                    <Link to={'/auth/signin'}><button className='btn-block cursor-pointer text-red-600 border-b-1 py-1'>Log In</button></Link>
                    <Link><button className='btn-block cursor-pointer  flex justify-between border-b-1 py-1'><FcGoogle className='my-auto' /> Google SignIn</button></Link>
                </ul>

            </span>
            <div className='lg:flex cursor-pointer gap-2'>
                <p className='my-auto hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold'>RooMatch</p>
            </div>
            <ul className='lg:flex text-gray-500 text-lg font-semibold my-auto hidden gap-5'>

                <li className='my-auto'><NavLink to={'/'}>Home</NavLink></li>
                <li className='my-auto'><NavLink to={'/blog'}>Blog</NavLink></li>
                <li className='my-auto'><NavLink to={'/browsinglisting'}>Browse Roommates</NavLink></li>
                <Link to={'/auth/register'} className='text-red-400 my-auto cursor-pointer'> Sign Up</Link>
                <Link to={'/auth/signin'} className=' border text-red-400 cursor-pointer rounded-2xl py-0.5 px-1'>Log In</Link>
            </ul>
            <div className='my-auto'>
                <button className='cursor-pointer' onClick={toggleTheme}>
                    {
                        theme == 'dark' ? <Sun /> : <Moon />
                    }
                </button>
            </div>

        </div>
    );
};

export default Header;