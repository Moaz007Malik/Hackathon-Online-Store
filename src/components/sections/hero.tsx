import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import headerImage from '/public/header.webp';
import Featured1 from '/public/Featured1.webp';
import Featured2 from '/public/Featured2.webp';
import Featured3 from '/public/Featured3.webp';
import Featured4 from '/public/Featured4.webp';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ShoppingCartIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 px-4 sm:px-32 py-32">
      {/* Left Part */}
      <div className="flex-1">
        <Badge className="py-3 px-6 rounded-lg text-base bg-blue-200 text-blue-600 hover:bg-blue-200">70% OFF!</Badge>
        <h1 className="font-serif scroll-m-20 py-8 text-4xl font-extrabold tracking-tight lg:text-5xl tracking-wide">
          An Industrial Take on Streetwear
        </h1>
        <div>
            <p className="text-lg text-gray-500 leading-7 py-4 mt-6 lg:mr-56 md:mt-0">
              Anyone can beat you, but no one can beat your outfit as long as you wear Dine outfits.
            </p>
            <Link href="/allproducts"><Button className="px-8 h-12 mt-4 bg-gray-900 rounded-none text-base">
              <ShoppingCartIcon className="w-6 h-6 px-0.5" /> Start Shopping
            </Button>
            </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 py-16 gap-6">
          <Image src={Featured1} alt="featured1"></Image>
          <Image src={Featured2} alt="featured2"></Image>
          <Image src={Featured3} alt="featured3"></Image>
          <Image src={Featured4} alt="featured4"></Image>
        </div>
      </div>
      {/* Right Part */}
      <div className="hidden lg:flex lg:flex-1">
        <div className="relative bg-red-100 rounded-full md:absolute rounded-full">
          <Image src={headerImage} alt="header"></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
