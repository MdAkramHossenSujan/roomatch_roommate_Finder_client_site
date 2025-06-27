import React from 'react';
import { FaSearch, FaUserPlus, FaInfoCircle, FaEnvelope, FaRegLightbulb } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch size={40} className="text-orange-500 dark:text-orange-400" />,
      title: 'Browse',
      description:
        'Search through thousands of potential roommates and rooms for rent. Use filters and our algorithm to find your best matches.',
    },
    {
      icon: <FaUserPlus size={40} className="text-orange-500 dark:text-orange-400" />,
      title: 'Create Account',
      description:
        'Set up your profile to find compatible roommates. Share your lifestyle, preferences, and requirements to increase match accuracy.',
    },
    {
      icon: <FaInfoCircle size={40} className="text-orange-500 dark:text-orange-400" />,
      title: 'Explore Details',
      description:
        'View detailed profiles of potential roommates. Learn about their habits, interests, and schedules before making a decision.',
    },
    {
      icon: <FaEnvelope size={40} className="text-orange-500 dark:text-orange-400" />,
      title: 'Contact',
      description:
        'Reach out directly via messages. Like or instantly message users to express interest and begin communication.',
    },
    {
      icon: <FaRegLightbulb size={40} className="text-orange-500 dark:text-orange-400" />,
      title: 'Extra Tip',
      description:
        'Be honest and clear in your profile. The more information you provide, the better your chances of finding a great roommate match.',
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto py-12 px-6 lg:px-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-xl transition-colors duration-300"
          >
            <div>{step.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-1">{step.title.toUpperCase()}</h3>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;