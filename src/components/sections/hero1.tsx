import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Card1 from '/public/card1.webp';
import Card2 from '/public/card2.webp';
import Card3 from '/public/card3.webp';



const Hero1 = () => {
  return (
    <div className="my-6 px-4 md:px-32">
      <p className="text-xs text-center text-blue-700 tracking-widest text-bold">PROMOTIONS</p>
      <p className="text-3xl text-center text-gray-900 tracking-widest text-bold py-6">Our Promotions Events</p>
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Left Part */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex bg-gray-300">
            <div className="py-8 m-4">
              <h3 className="text-bold text-3xl ">GET UP TO <span className="text-4xl">60%</span></h3>
              <p>For the summer season</p>
            </div>
            <Image src={Card1} alt="card1"></Image>
          </div>
          <div className="bg-neutral-900 py-8 flex flex-col items-center">
            <div className="mx-12">
              <p className="text-bold text-white text-4xl py-4 text-center">
                Get 30% OFF!
              </p>
              <p className="text-white tracking-widest text-lg text-center">
                Use promo Code
              </p>
              <Button className="bg-neutral-700 px-8 md:px-16 tracking-widest text-lg text-white">DINEWEEKENDSALE</Button>
            </div>
          </div>
        </div>
        {/* Right Part */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="bg-amber-100">
            <div>
              <p className="tracking-wider mt-6 mx-4">Flex Sweatshirt</p>
              <div className="text-xl">
                <span className="line-through mx-4">$100.00</span>
                <span className="text-bold">$75.00</span>
              </div>
            </div>
            <Image className="mt-2 mx-auto" src={Card2} alt="card2"></Image>
          </div>
          <div className="bg-violet-200">
            <div>
              <p className="tracking-wider mt-6 mx-4">Flex Push Button Bomber</p>
              <div className="text-xl">
                <span className="line-through mx-4">$255.00</span>
                <span className="text-bold">$190.00</span>
              </div>
            </div>
            <Image className="mt-2 mx-auto" src={Card3} alt="card3"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
