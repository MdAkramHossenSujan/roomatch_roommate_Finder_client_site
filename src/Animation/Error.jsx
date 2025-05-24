import React from 'react';
import { useLottie } from 'lottie-react';
import Group from '../assets/Lotties/Animation -error- 1748078806310.json';
const Error = () => {
  const options = {
    animationData: Group,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);

  return (
    <div className='lg:w-110 w-80 md:w-96 mx-auto'>
      {View}
    </div>
  );
};

export default Error;