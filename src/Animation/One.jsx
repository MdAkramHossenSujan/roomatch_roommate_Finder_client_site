import React from 'react';
import { useLottie } from 'lottie-react';
import Group from '../assets/Lotties/Animation - 1747983392806.json';

const One = () => {
  const options = {
    animationData: Group,
    loop: true,
    autoplay: true,
  };

  const style = {
    width: "100%",
    height: "100%",
  };

  const { View } = useLottie(options, style);

  return (
    <div className='mt-7'>
      {View}
    </div>
  );
};

export default One;

