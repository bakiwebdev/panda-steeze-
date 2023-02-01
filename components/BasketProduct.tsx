import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromBasket,
  plusItem,
  minusItem,
  BasketItem,
} from '../store/slices/basketSlice';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface BasketProductProps {
  item: BasketItem;
}
const BasketProduct = ({ item }: BasketProductProps) => {
  const dispatch = useDispatch();
  return (
    <div
      className="product md:flex justify-between mb-6"
      suppressHydrationWarning
    >
      <Link href={'/product/' + item.slug}>
        <div className="image md:flex cursor-pointer">
          <motion.div
            initial={{ scale: 1.5, x: 50, y: -50, opacity: 0 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
          >
            <Image
              width={100}
              height={100}
              className="w-full md:w-32 h-32 object-cover rounded-xl"
              src={item.images[0]}
              alt={item.name}
            />
          </motion.div>
          <div className="ml-3 flex flex-col text-cusblack justify-between py-2">
            <p className="font-medium">{item.name}</p>
            <ul className="text-xs md:text-sm leading-relaxed text-gray-400">
              {/* <li>Color: {item.color}</li> */}
              <li>Design ID: {item.slug}</li>
              <li>Quantity: {item.quantity}</li>
              {/* <li>Size: {item.selectedSizeProp}</li> */}
            </ul>
          </div>
        </div>
      </Link>
      <div className="flex flex-col justify-between py-1">
        {/* <NumberFormat
          value={item.price}
          className="font-semibold text-cusblack text-right"
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          renderText={(value: any, props: any) => (
            <h1 className="font-semibold text-cusblack text-right" {...props}>
              {value}
            </h1>
          )}
        /> */}
        <h1 className="font-semibold text-cusblack text-right">{item.price}</h1>
        <div className="flex ml-auto text-cusblack mt-1 md:mt-0">
          <button
            onClick={() => {
              if (item.quantity > 1) dispatch(minusItem(item));
            }}
            className="border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <button
            onClick={() => dispatch(plusItem(item))}
            className="border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100 mx-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button
            onClick={() => dispatch(removeFromBasket(item))}
            className="border border-cusblack active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100 text-xs px-2 font-medium"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
