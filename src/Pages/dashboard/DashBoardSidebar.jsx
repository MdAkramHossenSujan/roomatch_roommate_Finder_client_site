import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import {
  FaHome,
  FaUserPlus,
  FaListAlt,
  FaBars,
  FaTimes,
  FaInfo,
  FaInfoCircle,
  FaMobile,
} from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaDashcube } from "react-icons/fa6";
import { Moon, Sun } from "lucide-react";

const DashboardSidebar = () => {
  const { user, toggleTheme, theme, } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <FaDashcube />,
    },
    {
      path: "/",
      label: "Home",
      icon: <FaHome />,
    },
    {
      path: "/dashboard/all-roommates",
      label: "All Roommates",
      icon: <FaListAlt />,
    },
    {
      path: `/dashboard/${user.email}`,
      label: "My Added Roommates",
      icon: <FaUserPlus />,
    },
    {
      path: "/aboutus",
      label: "About",
      icon: <FaInfoCircle />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <FaMobile />,
    },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 w-full flex items-center justify-between p-4 px-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
         <label
                data-tooltip-id="view-tooltip"
                data-tooltip-content={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                data-tooltip-place="top" onClick={toggleTheme} className={`cursor-pointer fixed top-5.5 right-20 z-100  swap swap-rotate ${theme === 'dark' ? 'swap-active' : ''}`}>
                <Moon size={28} className="swap-on text-gray-400" />
                <Sun size={28} className="swap-off text-yellow-400" />
            </label>
        <div  className="flex items-center gap-2">
          <div onClick={()=>setOpen(!open)} className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={
                user?.photoURL ||
                "https://i.ibb.co/Lh6c9m40/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg"
              }
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-700 dark:text-gray-200 font-semibold">
            {user?.displayName || "Guest User"}
          </span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-700 dark:text-gray-200 text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
      onClick={()=>setOpen(!open)}
        className={`
          lg:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-800
          shadow-lg z-40
          transform ${open ? "translate-y-0" : "-translate-y-full"}
          transition-transform duration-300 ease-in-out
        `}
      >
        <div className="p-6">
          <div className="mb-8 text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2">
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/Lh6c9m40/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg"
                }
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {user?.displayName || "Guest User"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
          </div>

          <nav className="space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300"
                  } hover:bg-blue-50 dark:hover:bg-gray-700`
                }
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <aside className="hidden lg:flex w-66 bg-white dark:bg-gray-800 h-screen border-r border-gray-200 dark:border-gray-700 p-6 flex-col justify-between">
        <div>
          <div className="mb-10 text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2">
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/Lh6c9m40/La-suite-de-Dragon-Ball-Z-arrive-cet-ete.jpg"
                }
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {user?.displayName || "Guest User"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
          </div>

          <nav className="space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300"
                  } hover:bg-blue-50 dark:hover:bg-gray-700`
                }
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;


