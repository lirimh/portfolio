import React from 'react';
import {FlipWords} from '@/components/ui/flip-words';
import {Button} from '@/components/ui/button';
import {BackgroundGradientAnimation} from '../ui/background-gradient-animation';
import {TextGenerateEffect} from '../ui/text-generate-effect';

const Hero = () => {
  const words = ['React', 'Next Js', 'Wordpress'];
  return (
    <div className='snap-start h-screen'>
      <BackgroundGradientAnimation>
        <div className='snap-start h-screen relative flex items-center justify-center text-white'>
          <div className='flex-col text-center justify-center items-center'>
            <TextGenerateEffect
              className='bg-clip-text text-3xl text-center md:text-4xl lg:text-7xl text-transparent drop-shadow-2xl text-white'
              words='Welcome to my Portfolio'
            />
            <div className='bg-clip-text mt-3 text-transparent font-normal drop-shadow-2xl text-3xl text-center md:text-4xl lg:text-xl bg-gradient-to-b from-white/80 to-white/20'>
              Hi! I’m Lirim Hyseni, a Front End Developer with{' '}
              <FlipWords words={words} /> based in Presheve.
            </div>
            <Button className='mt-3 border px-10 py-5 rounded-full border-white bg-transparent text-white hover:scale-105 hover:bg-white/10 transition-transform duration-300 ease-in-out'>
              Get in touch
            </Button>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero;
