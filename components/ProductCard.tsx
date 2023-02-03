import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWishlist,
  removeFromWishlist,
} from '../store/slices/wishlistSlice';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { selectWishItems } from '../store/slices/wishlistSlice';
import { NumericFormat } from 'react-number-format';

interface ProductCardProps {
  item: Product;
  onWishList?: boolean;
}

const ProductCard = ({ item, onWishList = false }: ProductCardProps) => {
  const dispatch = useDispatch();
  const wishListSlug = useSelector(selectWishItems);
  const [isOnWishList, setIsOnWishList] = useState<boolean>(
    wishListSlug.includes(item.slug)
  );

  return (
    <div className="group">
      <motion.div
        initial={{ scale: 1.3, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
      >
        <Image
          width={100}
          height={100}
          src={item.images[0]}
          alt={item.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        {!onWishList && (
          <div className="hidden absolute rounded-xl h-full w-full bg-gray-300 backdrop-filter backdrop-blur-sm bg-opacity-30 top-0 group group-hover:flex justify-center place-items-center z-10">
            <div className="flex overflow-hidden cursor-pointer">
              <button
                onClick={() => {
                  isOnWishList
                    ? dispatch(removeFromWishlist(item.slug))
                    : dispatch(addToWishlist(item.slug));

                  setIsOnWishList(!isOnWishList);
                }}
                className="p-2 bg-white hover:bg-gray-100 active:bg-gray-200 rounded-lg"
              >
                {isOnWishList ? (
                  <HeartIconSolid className="w-6 m-auto h-6 fill-cusblack" />
                ) : (
                  <HeartIcon className="w-6 m-auto h-6 text-cusblack" />
                )}
              </button>
            </div>
          </div>
        )}
      </motion.div>
      <Link href={`/product/${item.slug}`}>
        <h3 className="mt-4 text-sm text-gray-700 text-ellipsis whitespace-nowrap overflow-hidden">
          {item.name}
        </h3>
        <h4 className="sr-only">Available colors</h4>
        {item.colors && (
          <ul
            role="list"
            className="mt-auto flex items-center justify-start space-x-3 py-2"
          >
            {item.colors?.map((color) => (
              <li
                key={color.name}
                className="h-4 w-4 rounded-full border border-black border-opacity-10"
                style={{ backgroundColor: color.colorBg }}
              >
                <span className="sr-only"> {color.name} </span>
              </li>
            ))}
          </ul>
        )}
        {!onWishList && (
          <NumericFormat
            value={item.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            renderText={(value: any, props: any) => (
              <h1
                className="mt-1 text-lg font-semibold text-cusblack "
                {...props}
              >
                {value}
              </h1>
            )}
          />
        )}
      </Link>
      {onWishList && (
        <button
          onClick={() => dispatch(removeFromWishlist(item.slug))}
          className="text-cusblack mt-1.5 bg-white border border-cusblack py-1 text-xs w-full rounded-lg hover:bg-gray-100"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ProductCard;
