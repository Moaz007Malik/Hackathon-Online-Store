import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card4 from '/public/card4.webp';
import { Button } from '../ui/button';

const Hero3 = () => {
  return (
    <div className="px-4 md:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div></div>
        <div className="text-bold text-5xl tracking-widest md:text-5xl tracking-wider">
          Unique and Authentic Vintage Designer Jewellery
        </div>
      </div>
      <div className="relative grid grid-rows-1 pt-2 lg:grid grid-rows-1 lg:grid-cols-2 lg:py-12 bg-[#fbfcff] my-4">
        {/* Left Part */}
        <div>
          <div>
            <div className="relative">
          <div className="flex md:absolute top-4 ">
            <div className="z-10 ">
            <h2 className="text-lg md:text-lg font-bold ">Using Good Quality Materials</h2>
            <p className="text-base leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="z-10 ">
            <h2 className="text-lg md:text-lg font-bold ">100% Handmade Products</h2>
            <p className="text-base leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
              </div>
              <div>
            <div className="absolute top-2 break-words text-8xl lg:absolute md:text-8xl font-bold text-neutral-200 leading-none pb-6 feature-background">
            Different from others
          </div>
          </div>
            <div className="flex absolute lg:absolute top-40">
              <div className="z-10 mt-6 ">
            <h2 className="text-lg md:text-lg font-bold ">Modern Fashion Design</h2>
            <p className="text-base leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="z-10 mt-6  ">
            <h2 className="text-lg md:text-lg font-bold ">Discount for Bulk Orders</h2>
            <p className="text-base leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
          </div>
          </div>
        </div>
        {/* Right Part */}
        <div className="mt-48 md:mt-0">
        <div className="lg:grid grid-cols-2">
        <div className="flex justify-center bg-scroll">
          <Image src={Card4} alt="card4" />
        </div>
          <div className="px-6">
            <p className="text-lg leading-relaxed mb-6">
              This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.
              The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
            </p>
            <div className="text-center">
              <Link href="/allproducts"><Button className="rounded-none my-2 mx-12 bg-black lg:mx-2 lg:my-0 w-28 text-white hover:bg-black">See All Products</Button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
