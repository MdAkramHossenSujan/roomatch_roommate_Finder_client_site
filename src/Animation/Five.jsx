import React from 'react';
import { useLottie } from 'lottie-react';
import Group from '../assets/Lotties/Animation -empty- 1748068891182.json';
import './Five.css';
const Five = () => {
  const options = {
    animationData: Group,
    loop: true,
    autoplay: true,
  };


  const { View } = useLottie(options);

  return (
    <div 
      className="flex justify-center items-center" 
    >
      {View}
    </div>
  );
};

export default Five;
