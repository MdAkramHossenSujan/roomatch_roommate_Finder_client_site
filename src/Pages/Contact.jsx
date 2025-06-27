import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactInfo = [
  {
    type: "Email",
    icon: <FaEnvelope size={28} className="text-primary" />,
    value: "admin@roomatch.com",
    href: "mailto:admin@roomatch.com",
  },
  {
    type: "Phone",
    icon: <FaPhone size={28} className="text-primary" />,
    value: "+880 1234 567890",
    href: "tel:+8801234567890",
  },
  {
    type: "Address",
    icon: <FaMapMarkerAlt size={28} className="text-primary" />,
    value: "raojan,Pahartali Street, Chattagram, Bangladesh",
  },
];

const socialLinks = [
  {
    icon: <FaFacebook size={28} />,
    url: "https://facebook.com",
    name: "Facebook",
  },
  {
    icon: <FaTwitter size={28} />,
    url: "https://twitter.com",
    name: "Twitter",
  },
  {
    icon: <FaInstagram size={28} />,
    url: "https://instagram.com",
    name: "Instagram",
  },
  {
    icon: <FaLinkedin size={28} />,
    url: "https://linkedin.com",
    name: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen py-24 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Contact Admin
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {contactInfo.map(({ type, icon, value, href }, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-default"
            >
              <div className="mb-4 text-primary">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{type}</h3>
              {href ? (
                <a
                  href={href}
                  className="text-gray-700 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value}
                </a>
              ) : (
                <p className="text-gray-700">{value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-8 text-gray-700">
            {socialLinks.map(({ icon, url, name }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-primary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
