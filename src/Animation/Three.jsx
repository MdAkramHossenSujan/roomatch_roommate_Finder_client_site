import React from 'react';
import { useLottie } from 'lottie-react';
import Find from '../assets/Lotties/Animation - 1747980224933.json'

const Three = () => {
  const options = {
    animationData: Find,
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

export default Three;