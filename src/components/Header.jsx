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
} from 'react-icons/fa6';
import toast from 'react-hot-toast';
import './Header.css';
import { FaHome, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    const { toggleTheme, theme, user, logOut } = use(AuthContext);
    const [open, setOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const sidebarRef = useRef();

    const handleSignOut = () => {
        logOut()
            .then(() => toast.success('Logged Out Successfully'))
            .catch(() => { });
    };

    const Sidebar = (
        <>
            <div className="fixed inset-0  bg-opacity-80 z-40" onClick={() => setOpen(false)} />
            <ul
                className={`fixed top-0 left-0 z-50 w-72 h-full transform ${open ? 'translate-x-0' : '-translate-x-full'
                    } bg-gray-800 dark:bg-white text-white dark:text-green-900 p-6 transition-transform duration-300 ease-in-out shadow-xl rounded-r-3xl`}
            >
                <div className="flex flex-col items-center mb-8">
                    <p className="text-4xl font-bold tracking-wide text-green-400 dark:text-green-700">RooMatch</p>
                    {user && (
                        <img
                            onClick={handleSignOut}
                            className="w-20 h-20 rounded-full mt-4 border-4 border-green-400 dark:border-green-700 shadow-lg cursor-pointer transition-transform hover:scale-105"
                            src={user?.photoURL || 'https://i.ibb.co.com/hJztTMWF/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg'}
                            alt="User"
                        />
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

                <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                    <FaFolderOpen />
                    <NavLink to="/mylisting" onClick={() => setOpen(false)}>Added By Me</NavLink>
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
            <ul className="lg:flex hidden gap-5 text-gray-500 text-lg font-semibold">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/addlisting">Add RoomMate</NavLink></li>
                <div onClick={() => setDropDown(!dropDown)} className="relative cursor-pointer">
                    <div className="flex items-center">
                        Browse {dropDown ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {dropDown && (
                        <ul className="absolute bg-white rounded shadow mt-2 z-10 p-2 w-48">
                            <li><NavLink to="/browselisting">Browse Roommates</NavLink></li>
                            <li><NavLink to="/mylisting">Added By Me</NavLink></li>
                        </ul>
                    )}
                </div>
                {!user && (
                    <div className="flex gap-2">
                        <Link to="/auth/register" className="text-red-400">Sign Up</Link>
                        <Link to="/auth/signin" className="text-red-400 border rounded-2xl px-2">Log In</Link>
                    </div>
                )}
            </ul>

            {/* Theme Toggle & User */}
            <div className="flex gap-5 items-center">
                {user && (
                    <img
                        onClick={handleSignOut}
                        className="w-10 h-10 rounded-full cursor-pointer"
                        src={user?.photoURL || 'https://i.ibb.co.com/hJztTMWF/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg'}
                        alt="User"
                    />
                )}
                <label onClick={toggleTheme} className={`cursor-pointer swap swap-rotate ${theme === 'dark' ? 'swap-active' : ''}`}>
                    <Sun size={30} className="swap-on text-yellow-500" />
                    <Moon size={30} className="swap-off" />
                </label>
            </div>
        </div>
    );
};

export default Header;
