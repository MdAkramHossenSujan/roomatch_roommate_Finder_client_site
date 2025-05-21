import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NavLink } from 'react-router';
import { FaAngleDown, FaAngleUp, FaGoogle, FaRegCircleUser } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import './Header.css'
const Header = () => {
    const { toggleTheme, theme, user, logOut } = use(AuthContext)
    const [open, setOpen] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const handleSignOut = () => {
        logOut().then(() => {
            toast.success('Logged Out Successfully')
        }).catch(error => {

        })
    }
    return (
        <div className='flex poppins-regular max-h-screen justify-between w-11/12 py-5 text-xl  mx-auto'>
            <span onClick={() => setOpen(!open)} className='flex lg:hidden gap-4'>
                {
                    open ? <X size={30} className='lg:hidden my-auto'></X> : <Menu size={30} className='lg:hidden my-auto' />
                }
                <ul className={`lg:hidden z-20 text-white dark:bg-white bg-gray-700 dark:text-green-800 pr-18 md:pr-24 pl-10 min-h-screen py-14 rounded-r-2xl duration-400 absolute ${open ? 'left-0 top-14' : '-left-100 top-14'}`}>
                    <div className='flex mb-5 flex-col gap-2'>
                        <p className='my-auto md:hidden text-3xl md:text-4xl lg:text-5xl font-bold'>RooMatch</p>
                    </div>
                    <div>
                        {
                            user && <img onClick={handleSignOut} className={`w-20 cursor-pointer h-20 rounded-full mb-6 mx-auto my-auto`} src={`${user?.photoURL ? user?.photoURL : 'https://i.ibb.co.com/hJztTMWF/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg'}`} alt="" />
                        }
                    </div>
                    <li className='border-b-1 dark:text-green-800 text-gray-100 py-1'><NavLink to={'/'}>Home</NavLink></li>
                          <li className='border-b-1 dark:text-green-800 text-gray-100 py-1' ><NavLink to={'/addlisting'}>Add RoomMate</NavLink></li>
                    <li className='border-b-1 dark:text-green-800 text-gray-100 py-1'><NavLink to={'/browsinglisting'}>Browse Roommates</NavLink></li>
                    <li className='border-b-1 dark:text-green-800 text-gray-100 py-1' ><NavLink to={'/mylisting'}>Added By Me</NavLink></li>

                    {
                        !user && <div>
                            <Link to={'/auth/register'}><button className='btn-block cursor-pointer text-red-600 border-b-1 py-1'>Sign Up</button></Link>
                            <Link to={'/auth/signin'}><button className='btn-block cursor-pointer text-red-600 border-b-1 py-1'>Log In</button></Link>
                        </div>
                    }
                </ul>

            </span>
            <div className='lg:flex cursor-pointer gap-2'>
                <p className='my-auto hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold'>RooMatch</p>
            </div>
            <ul className='lg:flex text-gray-500 text-lg font-semibold my-auto hidden gap-5'>

                <li className='my-auto'><NavLink to={'/'}>Home</NavLink></li>
                      <li className='my-auto' ><NavLink to={'/addlisting'}>Add RoomMate</NavLink></li>

                <div onClick={() => setDropDown(!dropDown)} className="dropdown my-auto dropdown-center">
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center cursor-pointer"

                    >
                        Browse
                        {dropDown ? (
                            <FaAngleUp className="ml-1 my-auto" />
                        ) : (
                            <FaAngleDown className="ml-1 my-auto" />
                        )}
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><NavLink to={'/browsinglisting'}>Browse Roommates</NavLink></li>
                        <li><NavLink to={'/mylisting'}>Added By Me</NavLink></li>
                    </ul>
                </div>
                {
                    !user && <div className='my-auto flex gap-2'>
                        <Link to={'/auth/register'} className='text-red-400 my-auto cursor-pointer'> Sign Up</Link>
                        <Link to={'/auth/signin'} className=' border text-red-400 cursor-pointer rounded-2xl py-0.5 px-1'>Log In</Link>
                    </div>
                }
            </ul>
            <div className='my-auto flex gap-5'>
                <div>
                    {
                        user && <img onClick={handleSignOut} className={`w-10 cursor-pointer h-10 rounded-full mx-auto my-auto`} src={`${user?.photoURL ? user?.photoURL : 'https://i.ibb.co.com/hJztTMWF/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg'}`} alt="" />
                    }
                </div>
                <button className='cursor-pointer my-auto' onClick={toggleTheme}>
                    {
                        theme == 'dark' ? <Sun /> : <Moon />
                    }
                </button>
            </div>

        </div>
    );
};

export default Header;