import React from 'react';
import { useLottie } from 'lottie-react';
import Group from '../assets/Lotties/Animation - 1747980368709.json';

const Two = () => {
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
    <div >
      {View}
    </div>
  );
};

export default Two;