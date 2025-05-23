import React from 'react';
import { useLottie } from 'lottie-react';
import Trust from '../assets/Lotties/Animation - 1747982759970.json';

const Four = () => {
  const options = {
    animationData: Trust,
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

export default Four;