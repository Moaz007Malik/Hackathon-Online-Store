"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { products } from "@/utils/mock";

const KidsCategory = () => {
  const filterProducts = products.filter((product) => product.category === "kids");
  const [itemsPerRow, setItemsPerRow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 300) {
        setItemsPerRow(1); // Below 300px
      } else if (screenWidth < 750) {
        setItemsPerRow(2); // Below 750px
      } else if (screenWidth < 1024) {
        setItemsPerRow(3); // Below 1024px
      } else {
        setItemsPerRow(4); // Default for large screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial itemsPerRow value
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Divide the filtered products into chunks of itemsPerRow
  const productChunks = [];
  for (let i = 0; i < filterProducts.length; i += itemsPerRow) {
    const chunk = filterProducts.slice(i, i + itemsPerRow);
    productChunks.push(chunk);
  }

  return (
    <div className="flex flex-col lg:px-24">
      <h2 className="text-2xl font-bold mb-6">Female Category</h2>
      {productChunks.map((chunk, chunkIndex) => (
        <div
          key={chunkIndex}
          className="flex sm:flex-col-2 md:flex-row gap-5 pt-10 md:pt-20"
        >
          {chunk.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`px-2 ${
                itemsPerRow === 1
                  ? "w-full"
                  : itemsPerRow === 2
                  ? "w-1/2"
                  : itemsPerRow === 3
                  ? "w-1/3"
                  : "w-1/4"
              }`}
            >
              <Link href={`/products/${item.slug}`} passHref>
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={250}
                    height={250}
                  />
                  <div className="font-semibold tracking-wide text-base pt-2">{item.name}</div>
                  <div className="text-sm pt-1 text-gray-900/50 text-bold">{item.type}</div>
                  <div className="text-lg pt-2 tracking-wide font-semibold">${item.price}</div>
                </div>
              </Link>
            </div>
          ))}
          {/* Add empty placeholders to fill the row if there is only one item */}
          {itemsPerRow === 2 && chunk.length === 1 && <div className="w-full" />}
        </div>
      ))}
    </div>
  );
};

export default KidsCategory;
