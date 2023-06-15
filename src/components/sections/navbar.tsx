"use client"

import React, { useState } from "react";
import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white px-4 fixed top-0 left-0 w-full z-50 md:px-0">
      <div className="flex h-20 px-6 sm:px-6 max-w-6xl mx-auto items-center justify-between">
        <Link href="./">
        <Image src="/Logo.webp" alt="mylogo" width={150} height={100} />
        </Link>
        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            onClick={toggleDropdown}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-x-5">
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/female">Female</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/male">Male</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/kids">Kids</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/allproducts">All Products</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden sm:flex gap-2 border border-black bg-white px-2 rounded-lg">
          <SearchIcon size={20} />
          <input className="outline-none" type="text" placeholder="What are you looking for?" />
        </div>

        {/* Shopping Cart */}
        <Link href="/cart">
        <div className="hidden sm:flex items-center">
          <div className="h-12 w-12 flex justify-center items-center bg-gray-300 rounded-full relative hover:scale-105 duration-300 ease-in">
            <ShoppingCartIcon />
            <span className="w-6 flex justify-center items-center h-6 rounded-full bg-red-500 text-white absolute bottom-7 left-8">
              0
            </span>
          </div>
        </div>
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="sm:hidden bg-white py-4">
          {/* Search Bar */}
          <div className="flex items-center border border-black bg-white px-2 rounded-lg mx-4">
            <SearchIcon size={20} />
            <input className="outline-none" type="text" placeholder="What are you looking for?" />
          </div>
          
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-y-2 px-4">
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/female">Female</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/male">Male</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/kids">Kids</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/allproducts">All Products</Link>
                </Button>
              </NavigationMenuItem>
              {/* Shopping Cart */}
              <NavigationMenuItem>
                <Link href="/cart">
                <Button variant="link">
                  <div className="flex items-center">
                    <ShoppingCartIcon />
                    <span className="ml-2">Shopping Cart</span>
                  </div>
                </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
