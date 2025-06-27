import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaRoute,
  FaPalette,
  FaCommentDots,
  FaLock,
  FaEdit,
  FaThumbsUp,
  FaMobileAlt,
  FaAdjust,
  FaPlayCircle,
  FaFont,
  FaExclamationTriangle,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb, SiSwiper } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
const techStack = [
  { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
  { name: "react-router-dom", icon: <FaRoute size={40} color="#F43F5E" /> },
  { name: "react-hot-toast", icon: <IoMdNotifications size={40} color="#FBBF24" /> },
  { name: "sweetalert", icon: <FaExclamationTriangle size={40} color="#F43F5E" /> },
  { name: "react-icons", icon: <FaPalette size={40} color="#7C3AED" /> },
  { name: "swiper", icon: <SiSwiper size={40} color="#007aff" /> },
  { name: "lottifiles", icon: <FaPlayCircle size={40} color="#EF4444" /> },
];

const coreFeatures = [
  {
    text: "Dark/Light Mode with persistent styling",
    icon: <FaAdjust size={20} />,
  },
  {
    text: "Fully responsive design with collapsible sidebar",
    icon: <FaMobileAlt size={20} />,
  },
  {
    text: "Secure Authentication & Protected Routes",
    icon: <FaLock size={20} />,
  },
  {
    text: "Full CRUD for roommate listings with owner-only edit/delete",
    icon: <FaEdit size={20} />,
  },
  {
    text: "Like system with dynamic counts and self-like prevention",
    icon: <FaThumbsUp size={20} />,
  },
  {
    text: "Comments section on roommate detail pages",
    icon: <FaCommentDots size={20} />,
  },
  {
    text: "Homepage with banner slider, Lottie animation, featured cards, and guides",
    icon: <FaPlayCircle size={20} />,
  },
  {
    text: "Instant alerts and notifications with react-hot-toast and sweetalert",
    icon: <IoMdNotifications size={20} />,
  },
  {
    text: "Dynamic page titles based on routes",
    icon: <FaFont size={20} />,
  },
  {
    text: "Custom friendly 404 error page",
    icon: <FaExclamationTriangle size={20} />,
  },
];
const AboutUs = () => {
    const { pathname } = useLocation();
     useEffect(() => {
            document.title = `About the website | Roomatch`;
          }, []);

     useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="py-20">
        <Header/>
        <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Roomatch</h1>
        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
          Roomatch is a full-stack roommate matching platform built for ease,
          interactivity, and personalization. Users can post listings, browse
          roommate profiles, interact through likes and comments, and enjoy a
          secure and user-friendly experience with modern theming.
        </p>
      </motion.div>

      {/* Tech Stack Cards */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">🌐 Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map(({ name, icon }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="bg-base-200 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl cursor-default"
            >
              <div className="mb-3">{icon}</div>
              <p className="font-medium text-lg">{name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Features List */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">🎯 Core Features</h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
            hidden: {},
          }}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 list-none"
        >
          {coreFeatures.map(({ text, icon }, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-base-200 rounded-lg shadow-md p-5 flex items-center gap-3 hover:bg-primary hover:text-primary-content transition-colors cursor-default"
            >
              <span className="text-primary">{icon}</span>
              <p className="font-semibold">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
