import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWishItems } from '../store/slices/wishlistSlice';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import db from '../app/data.json';

export async function getStaticProps() {
  const data = db;
  return {
    props: {
      data,
    },
    revalidate: 5,
  };
}

interface WishListProps {
  data: Product[];
}

const WishList = ({ data }: WishListProps) => {
  const wishListSlug = useSelector(selectWishItems);
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const wishListItems = data.filter((obj) => wishListSlug.includes(obj.slug));
    setItems(wishListItems);
  }, [wishListSlug]);

  return (
    <>
      <div className="w-full min-h-screen relative bg-cusgray pb-10">
        <div className="max-w-6xl mx-auto pt-20 px-5 min-h-screen">
          <div className="bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 md:py-6 md:px-6 pb-3">
            <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 px-4 md:px-0">
              {items.length > 0 ? (
                items.map((item, idx) => (
                  <ProductCard item={item} key={item.slug} onWishList={true} />
                ))
              ) : (
                <div className="text-sm text-gray-400 col-span-2 md:col-span-3 lg:col-span-4 flex justify-center place-items-center">
                  Your wishlist is empty
                </div>
              )}
            </div>

            <div className="overflow-hidden md:pl-10 row-start-1 md:col-start-3 mb-6 md:mb-0 h-48 md:h-full">
              <div className="relative">
                <div className="text-white flex justify-center place-items-center text-2xl absolute w-full rounded-xl bg-gray-600 ml-10 bg-opacity-60 font-bold right-0 top-0 h-48 md:h-full">
                  <h1>WISHLIST</h1>
                </div>
                <Image
                  width={100}
                  height={100}
                  src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1675103386/Panda%20Steeze/sim-150403843-2531216704_wksmxu.jpg"
                  className="object-cover rounded-xl w-full"
                  alt="Wish List Cover image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
