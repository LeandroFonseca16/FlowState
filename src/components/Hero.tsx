import React from 'react';
import { ThreeDCardDemo } from '@/src/components/demo/ThreeDCardDemo';
import { WavyBackground } from '@/src/components/ui/wavy-background';

const Hero = () => {
  return (
    <div className=' pt-10 pb-10 h-screen overflow-hidden'>
      <WavyBackground />
      <div className="content-container">
        <ThreeDCardDemo />
      </div>
    </div>
  );
};

export default Hero;
