import React, { use, useState, useRef } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NavLink, Link } from 'react-router';
import {
    FaAngleDown, FaAngleUp,
    FaPlus,
    FaUsers,
    FaFolderOpen,
    FaUserPlus,
    FaBlog,
} from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip'
import toast from 'react-hot-toast';
import './Header.css';
import { FaHome, FaListAlt, FaPlusCircle, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    const { toggleTheme, theme, user, logOut } = use(AuthContext);
    const [open, setOpen] = useState(false);
    const handleSignOut = () => {
        logOut()
            .then(() => toast.success('Logged Out Successfully'))
            .catch(() => { });
    };
    console.log(user)
    const Sidebar = (
        <>
            <div className="fixed inset-0 bg-opacity-80 z-40" onClick={() => setOpen(false)} />
            <ul
                className={`fixed top-0 left-0 z-50 w-72 h-full transform ${open ? 'translate-x-0' : '-translate-x-full'
                    } bg-gray-800 dark:bg-white text-white dark:text-green-900 p-6 transition-transform duration-300 ease-in-out shadow-xl rounded-r-3xl`}
            >
                <div className="flex flex-col items-center mb-8">
                    <div className='flex gap-2'>
                        <p className="text-4xl font-bold tracking-wide text-green-400 dark:text-green-700">RooMatch</p>
                        <label onClick={toggleTheme} className={`cursor-pointer  swap swap-rotate ${theme === 'dark' ? 'swap-active' : ''}`}>
                            <Sun size={30} className="swap-on text-yellow-500" />
                            <Moon size={30} className="swap-off" />
                        </label>
                    </div>
                    {user && (
                        <div>
                            <img
                                data-tooltip-id="view-tooltip"
                                data-tooltip-content={user.displayName}
                                data-tooltip-place="top"
                                onClick={handleSignOut}
                                className="w-20 h-20 rounded-full mt-4 border-4 border-green-400 dark:border-green-700 shadow-lg cursor-pointer transition-transform hover:scale-105"
                                src={user?.photoURL || 'https://i.ibb.co.com/hJztTMWF/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg'}
                                alt="User"
                            />
                            <Tooltip id="view-tooltip" />
                        </div>
                    )}
                </div>

                <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                    <FaHome />
                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                </li>

                <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                    <FaPlus />
                    <NavLink to="/addlisting" onClick={() => setOpen(false)}>Add RoomMate</NavLink>
                </li>

                <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                    <FaUsers />
                    <NavLink to="/browselisting" onClick={() => setOpen(false)}>Browse Roommates</NavLink>
                </li>

                {
                    user && <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                        <FaFolderOpen />
                        <NavLink to={`/mylisting/${user.email}`} onClick={() => setOpen(false)}>Added By Me</NavLink>
                    </li>
                }
                <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                    <FaBlog />
                    <NavLink to="/userBlog&reviews" onClick={() => setOpen(false)}>Blog & Reviews</NavLink>
                </li>

                {!user && (
                    <div className="mt-2">
                        <Link to="/auth/register" onClick={() => setOpen(false)}>
                            <button className="w-full flex py-2 cursor-pointer items-center justify-center dark:bg-gray-100 ">
                                <FaUserPlus /> Sign Up
                            </button>
                        </Link>
                        <Link to="/auth/signin" onClick={() => setOpen(false)}>
                            <button className="w-full mt-3 py-2 cursor-pointer flex items-center justify-center dark:bg-gray-100 ">
                                <FaSignInAlt /> Log In
                            </button>
                        </Link>
                    </div>
                )}
            </ul>
        </>
    );

    return (
        <div className="fixed top-0 left-0 right-0  z-50 bg-white dark:bg-gray-900 shadow-md w-full">

            <div className="flex justify-between w-11/12 py-5 text-xl mx-auto max-h-screen poppins-regular">
                {/* Mobile Menu Button */}
                <span onClick={() => setOpen(!open)} className="flex lg:hidden gap-4">
                    {open ? <X size={30} /> : <Menu size={30} />}
                </span>

                {/* Sidebar for mobile */}
                {open && Sidebar}

                {/* Logo */}
                <div className="lg:flex gap-2">
                    <p className="hidden lg:block text-4xl font-bold">RooMatch</p>
                </div>

                {/* Desktop Menu */}
                <ul className="lg:flex hidden gap-6 text-gray-700 dark:text-gray-200 text-base font-semibold items-center">

                    <li className="flex items-center gap-1 hover:text-blue-600 transition-all">
                        <FaHome />
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li className="flex items-center gap-1 hover:text-blue-600 transition-all">
                        <FaPlusCircle />
                        <NavLink to="/addlisting">Add RoomMate</NavLink>
                    </li>
                    <li className="flex items-center gap-1 hover:text-blue-600 transition-all">
                        <FaBlog />
                        <NavLink to="/userBlog&reviews">Blog & Review</NavLink>
                    </li>
                    {/* Dropdown */}
                    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                        <label
                            tabIndex={0}
                            className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors duration-300 font-semibold"
                        >
                            <FaUsers className="text-lg" />
                            <span>Browse</span>
                            <FaAngleDown className="text-sm" />
                        </label>

                        <ul
                            tabIndex={0}
                            className="dropdown-content p-4 shadow-lg bg-white dark:bg-gray-800 rounded-lg w-56 text-gray-700 dark:text-gray-200"
                        >
                            <li className="flex items-center gap-3 px-3 py- rounded-md cursor-pointer transition-colors duration-100">
                                <FaListAlt className="text-blue-600 dark:text-blue-400 text-lg" />
                                <NavLink
                                    to="/browselisting"
                                    className="w-full text-sm font-medium"
                                >
                                    Browse Roommates
                                </NavLink>
                            </li>

                            {user && (
                                <li className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer transition-colors duration-100">
                                    <FaUserPlus className="text-blue-600 dark:text-blue-400 text-lg" />
                                    <NavLink
                                        to={`/mylisting/${user.email}`}
                                        className="w-full text-sm font-medium"
                                    >
                                        Added By Me
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>




                    {/* Auth Links */}
                    {!user && (
                        <div className="flex gap-3 items-center">
                            <Link to="/auth/register" className="flex items-center gap-1 text-red-500 hover:text-red-600 transition-all">
                                <FaUserPlus />
                                Sign Up
                            </Link>
                            <Link
                                to="/auth/signin"
                                className="flex items-center gap-1 text-white bg-red-400 hover:bg-red-500 px-4 py-1 rounded-full shadow"
                            >
                                <FaSignInAlt />
                                Log In
                            </Link>
                        </div>
                    )}
                </ul>

                {/* Theme Toggle & User */}
                <div className="lg:flex hidden gap-5 items-center">
                    {user && (
                        <img
                            data-tooltip-id="view-tooltip"
                            data-tooltip-content={user.displayName}
                            data-tooltip-place="top"
                            onClick={handleSignOut}
                            className="w-10 h-10 rounded-full cursor-pointer"
                            src={user?.photoURL || 'https://i.ibb.co.com/hJztTMWF/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg'}
                            alt="User"
                        />
                    )}
                    <label
                        data-tooltip-id="view-tooltip"
                        data-tooltip-content={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                        data-tooltip-place="top" onClick={toggleTheme} className={`cursor-pointer  swap swap-rotate ${theme === 'dark' ? 'swap-active' : ''}`}>
                        <Sun size={30} className="swap-on text-yellow-500" />
                        <Moon size={30} className="swap-off" />
                    </label>
                    <Tooltip id="view-tooltip" />
                </div>
            </div>
        </div>
    );
};

export default Header;
