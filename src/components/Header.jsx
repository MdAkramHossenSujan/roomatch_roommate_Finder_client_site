import React, { use, useState, useRef, useEffect } from 'react';
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
    FaCommentDots,
    FaPhone,
    FaDashcube,
} from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip'
import toast from 'react-hot-toast';
import './Header.css';
import { FaHome, FaInfoCircle, FaListAlt, FaPlusCircle, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/rooms/roommates.png'
const Header = () => {
    const { toggleTheme, theme, user, logOut } = use(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef();
    const [open, setOpen] = useState(false);
    const handleSignOut = () => {
        logOut()
            .then(() => toast.success('Logged Out Successfully'))
            .catch(() => { });

    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // console.log(user)
    const Sidebar = (
        <>
            <div className="fixed inset-0 bg-opacity-80 z-40" onClick={() => setOpen(false)} />
            <ul
                className={`fixed top-0 left-0 z-50 w-76 h-full transform ${open ? 'translate-x-0' : '-translate-x-full'
                    } bg-gray-800 dark:bg-white text-white dark:text-green-900 p-6 transition-transform duration-300 ease-in-out shadow-xl rounded-r-3xl`}
            >
                <div className="flex flex-col items-center text-center mb-8">
                    <div className='flex gap-2'>
                        <img className='h-10' src={logo} alt="" />
                        <p className="text-4xl font-bold tracking-wide text-green-400 dark:text-green-700">RooMatch</p>

                    </div>
                    {user && (
                        <div>
                            <img
                                data-tooltip-id="view-tooltip"
                                data-tooltip-content={user.displayName}
                                data-tooltip-place="top"
                                className="w-20 h-20 rounded-full mt-4 mx-auto border-4 border-green-400 dark:border-green-700 shadow-lg cursor-pointer transition-transform hover:scale-105"
                                src={user?.photoURL || 'https://i.ibb.co.com/hJztTMWF/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg'}
                                alt="User"
                            />
                            <Tooltip id="view-tooltip" />
                            <div>
                                <h2 className="mt-3 text-lg font-bold ">Hi, {user.displayName}!</h2>
                                <p className="text-sm dark:text-gray-700">{user?.email}</p>
                            </div>
                        </div>
                    )}
                </div>
                {
                    user && <div className="mt-6 flex gap-8 border-b border-gray-300 pb-2 mb-2">
                        <Link to={'/userBlog&reviews'}>
                            <button className="flex items-center gap-2 cursor-pointer text-[16px] font-medium w-full">
                                <FaCommentDots className="text-blue-600" />
                                Comment
                            </button>
                        </Link>
                        <button onClick={handleSignOut} className="flex cursor-pointer items-center gap-1 font-medium w-full text-[16px] px-1">
                            <FaSignOutAlt className="text-red-500" />
                            Sign Out
                        </button>
                    </div>
                }
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
                <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                    <FaPhone />
                    <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
                </li>
                <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                    <FaInfoCircle />
                    <NavLink to="/aboutus" onClick={() => setOpen(false)}>About Us</NavLink>
                </li>
                <li className="py-2 text-lg font-medium flex items-center gap-3 hover:text-green-400 dark:hover:text-green-700 transition-colors">
                    <FaDashcube />
                    <NavLink to="/dashboard" onClick={() => setOpen(false)}>Dashboard</NavLink>
                </li>
            </ul>
        </>
    );

    return (
        <div className="fixed top-0 left-0 right-0  z-50 bg-white dark:bg-gray-900 shadow-md w-full">


            <div className="flex justify-between w-11/12 py-5 text-xl mx-auto max-h-screen poppins-regular">

                <span onClick={() => setOpen(!open)} className="flex lg:hidden gap-4">
                    {open ? <X size={30} /> : <Menu size={30} />}
                </span>


                {open && Sidebar}

                <div className="hidden lg:flex gap-2">
                    <img className='h-12 lg:h-8 my-auto xl:h-12' src={logo} alt="" />
                    <p className="text-5xl lg:text-3xl xl:text-5xl my-auto font-bold">RooMatch</p>
                </div>


                <ul className="flex xl:gap-6 gap-3 lg:text-[12px] xl:text-[16px] text-gray-700  dark:text-gray-200 text-base font-semibold items-center">

                    <li className="lg:flex hidden items-center gap-1 hover:text-blue-600 transition-all">
                        <FaHome />
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li className="hidden lg:flex items-center gap-1 hover:text-blue-600 transition-all">
                        <FaPlusCircle />
                        <NavLink to="/addlisting">Add RoomMate</NavLink>
                    </li>
                    <li className="hidden lg:flex items-center gap-1 hover:text-blue-600 transition-all">
                        <FaBlog />
                        <NavLink to="/userBlog&reviews">Blog & Review</NavLink>
                    </li>
                    {/* Dropdown */}
                    <div className="dropdown hidden lg:block dropdown-hover dropdown-bottom dropdown-end">
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
                    <li className="py-2 font-bold hidden lg:flex items-center gap-3  hover:text-blue-900 transition-colors">
                        <FaPhone />
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li className="py-2 font-bold hidden lg:flex items-center gap-3 hover:text-blue-900 transition-colors">
                        <FaInfoCircle />
                        <NavLink to="/aboutus" >About Us</NavLink>
                    </li>
                    <li className="py-2 font-bold hidden lg:flex items-center gap-3 hover:text-blue-900 transition-colors">
                        <FaDashcube />
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>


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
                    <label
                        data-tooltip-id="view-tooltip"
                        data-tooltip-content={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                        data-tooltip-place="top" onClick={toggleTheme} className={`cursor-pointer lg:hidden  swap swap-rotate ${theme === 'dark' ? 'swap-active' : ''}`}>
                      <Moon size={28} className="swap-on text-gray-400" />
                                              <Sun size={28} className="swap-off text-yellow-400" />
                    </label>
                </ul>

                <div className="lg:flex hidden gap-5 items-center">
                    {user && (
                        <img
                            data-tooltip-id="view-tooltip"
                            data-tooltip-content={user.displayName}
                            data-tooltip-place="top"
                            onClick={() => setShowModal(!showModal)}
                            className="w-10 h-10 rounded-full cursor-pointer"
                            src={user?.photoURL || 'https://i.ibb.co.com/hJztTMWF/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg'}
                            alt="User"
                        />
                    )}
                    {showModal && (
                        <div
                            onClick={() => setShowModal(!showModal)}
                            className="fixed inset-0 z-40 bg-opacity-80"
                        >
                            <div
                                ref={modalRef}
                                className="absolute right-4 top-20 w-80 bg-gray-800 text-white rounded-xl shadow-xl p-5 z-50"
                            >
                                <div className="text-center">
                                    <img
                                        src={user?.photoURL || 'https://lh3.googleusercontent.com/a/default-user=s96-c'}
                                        alt="User Avatar"
                                        className="mx-auto w-16 h-16 rounded-full"
                                    />
                                    <h2 className="mt-3 text-lg font-bold ">Hi, {user.displayName}!</h2>
                                    <p className="text-sm dark:text-gray-300 mb-2">{user?.email}</p>
                                </div>

                                <div className="mt-6 flex border-t border-gray-200 pt-4">
                                    <Link to={'/userBlog&reviews'}>
                                        <button className="flex  items-center gap-3 text-[16px] font-medium w-full cursor-pointer px-3 py-2 rounded-md">
                                            <FaCommentDots className="text-blue-600" />
                                            Comment
                                        </button>
                                    </Link>
                                    <button onClick={handleSignOut} className="flex items-center gap-3 font-medium w-full text-[16px] cursor-pointer px-3 py-2 rounded-md">
                                        <FaSignOutAlt className="text-red-500" />
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <label
                        data-tooltip-id="view-tooltip"
                        data-tooltip-content={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                        data-tooltip-place="top" onClick={toggleTheme} className={`cursor-pointer  swap swap-rotate ${theme === 'dark' ? 'swap-active' : ''}`}>
                       <Moon size={28} className="swap-on text-gray-400" />
                                               <Sun size={28} className="swap-off text-yellow-400" />
                    </label>
                    <Tooltip id="view-tooltip" />
                </div>

            </div>
        </div>
    );
};

export default Header;
