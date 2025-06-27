import React from 'react';
import One from '../Animation/One';
import Three from '../Animation/Three';
import Two from '../Animation/Two';
import Four from '../Animation/Four';
import { Typewriter } from 'react-simple-typewriter';
const WhatYouFind = () => {
  return (
    <div>
      <p className='font-bold text-4xl text-center mt-10'>What We Provides</p>
      <div className="max-w-[1440px] px-6 lg:px-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
      <div className="text-center p-4 bg-transparent dark:bg-transparent">
        <One />
        <h1 className="text-xl font-bold text-green-800 dark:text-gray-300 mt-4">
          <span>
            <Typewriter
              words={['Find Matching','Room Partner','As']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </span>Roommate
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Discover compatible roommates based on lifestyle and shared interests.
        </p>
      </div>

      <div className="text-center p-4 bg-transparent dark:bg-transparent">
        <Three />
        <h1 className="text-xl font-bold text-red-700 dark:text-red-400 mt-4">
          <span>
            <Typewriter
              words={['Search For','Your','Desired']}
              loop={0}
              cursor
              cursorStyle="• "
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </span>
           Roommate
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Explore detailed profiles to match your living preferences easily.
        </p>
      </div>

      <div className="text-center p-4 bg-transparent dark:bg-transparent">
        <Two />
        <h1 className="text-xl font-bold text-purple-600 dark:text-purple-400 mt-4">
          <span>
            <Typewriter
              words={['Locate And','Contact','Your']}
              loop={0}
              cursor
              cursorStyle="• "
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </span>
           Roommate
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Find nearby roommates and securely connect with just a click.
        </p>
      </div>

      <div className="text-center p-4 bg-transparent dark:bg-transparent">
        <Four />
        <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300 mt-4">
          <span>
            <Typewriter
              words={['Trusted & Scam','Free']}
              loop={0}
              cursor
              cursorStyle="`"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </span> Platform
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Verified profiles ensure a safe, spam-free, and reliable experience.
        </p>
      </div>
    </div>
    </div>

  );
};

export default WhatYouFind;