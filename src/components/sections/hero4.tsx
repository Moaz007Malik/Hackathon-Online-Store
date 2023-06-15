import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Hero4 = () => {
  return (
    <div className="flex relative flex-col items-center justify-center px-4 py-20">
      <h2 className="text-3xl -mt-12 text-bold lg:-mt-4 lg:text-3xl text-bold text-center z-10">
        Subscribe Our Newsletter
      </h2>
      <h1 className="text-7xl text-bold lg:text-9xl absolute top-12 text-center text-bold text-neutral-200 " >Newsletter</h1>
      <p className="text-base mx-4 lg:mt-6 lg:text-lg text-center z-10">
        Get the latest information and promo offers directly
      </p>
      <div className="  mt-12 lg:flex my-16">
        <Input className="rounded-none w-72 items-center lg:w-72" placeholder="Input email address" />
        <Button className=" rounded-none my-2 mx-20 bg-black lg:mx-2 lg:my-0 w-28 text-white hover:bg-black">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero4;
