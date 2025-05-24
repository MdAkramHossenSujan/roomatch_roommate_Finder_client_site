import React from 'react';
import { useLottie } from 'lottie-react';
import Group from '../assets/Lotties/Animation - browse-1748069013499.json';
const Six = () => {
  const options = {
    animationData: Group,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);

  return (
    <div className='lg:w-48 w-28 mx-auto'>
      {View}
    </div>
  );
};

export default Six;