import React from 'react';
import { useLottie } from 'lottie-react';
import Group from '../assets/Lotties/Animation -explore- 1748074585405.json';
const Seven = () => {
  const options = {
    animationData: Group,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);

  return (
    <div className='lg:w-86 w-56 md:w-66 mx-auto'>
      {View}
    </div>
  );
};

export default Seven;