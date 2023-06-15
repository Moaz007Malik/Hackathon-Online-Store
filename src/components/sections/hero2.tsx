"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero2 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: 'carousel',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-6 px-8 md:px-32">
      <p className="text-xs text-center text-blue-700 tracking-widest font-bold">PRODUCTS</p>
      <p className="text-3xl text-center text-gray-900 tracking-wider font-bold py-6">Check What We Have</p>
      <Slider {...settings}>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod01.png" className="w-full" alt="Product 1" />
          <div className="tracking-wider text-xl text-bold">Brushed Raglan Sweatshirt</div>
          <div className="tracking-wider text-xl text-bold py-2">$195</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod02.png" className="w-full" alt="Product 2" />
          <div className="tracking-wider text-xl text-bold">Cameryn Sash Tie Dress</div>
        <div className="tracking-wider text-xl text-bold py-2">$545</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod03.png" className="w-full" alt="Product 3" />
          <div className="tracking-wider text-xl text-bold">Flex Sweatshirt</div>
          <div className="tracking-wider text-xl text-bold py-2">$175</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod04.png" className="w-full" alt="Product 4" />
          <div className="tracking-wider text-xl text-bold">Flex Sweatpants</div>
          <div className="tracking-wider text-xl text-bold py-2">$175</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod05.png" className="w-full" alt="Product 5" />
          <div className="tracking-wider text-xl text-bold">Pink Fleece Sweatpants</div>
          <div className="tracking-wider text-xl text-bold py-2">$195</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod06.png" className="w-full" alt="Product 6" />
          <div className="tracking-wider text-xl text-bold">Lite Sweatpants</div>
          <div className="tracking-wider text-xl text-bold py-2">$150</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod07.png" className="w-full" alt="Product 7" />
          <div className="tracking-wider text-xl text-bold">Imperial Alpaca Hoodie</div>
          <div className="tracking-wider text-xl text-bold py-2">$525</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod08.png" className="w-full" alt="Product 8" />
          <div className="tracking-wider text-xl text-bold">Flex Push Button Bomber</div>
          <div className="tracking-wider text-xl text-bold py-2">$225</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod09.png" className="w-full" alt="Product 9" />
          <div className="tracking-wider text-xl text-bold">Muscle Tank</div>
          <div className="tracking-wider text-xl text-bold py-2">$75</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod10.png" className="w-full" alt="Product 10" />
          <div className="tracking-wider text-xl text-bold">Brushed Bomber</div>
          <div className="tracking-wider text-xl text-bold py-2">$225</div>
        </div>
        <div className="w-full sm:w-96 outline-none scale-90 hover:scale-100 duration-300 ease-in">
          <img src="prod11.png" className="w-full" alt="Product 11" />
          <div className="tracking-wider text-xl text-bold">Raglan Sweatshirt</div>
          <div className="tracking-wider text-xl text-bold py-2">$195</div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero2;
