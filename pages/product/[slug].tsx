import { useEffect, useState } from 'react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';
import db from '../../app/data.json';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../404';
import {
  addToWishlist,
  removeFromWishlist,
  selectWishItems,
} from '../../store/slices/wishlistSlice';
import { motion } from 'framer-motion';
import {
  BasketItem,
  addToBasket,
  selectItems,
  removeFromBasket,
} from '../../store/slices/basketSlice';
import { NumericFormat } from 'react-number-format';

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const data = db.filter((data) => {
    return data.slug === slug;
  });

  if (!data[0]) {
    return {
      redirect: {
        destination: '/shop',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: data[0],
      dataAlso: db,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const data = db;

  const paths = data.map((cat: Product) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

interface ProductDetailProps {
  data: Product;
  dataAlso: Product[];
}

const ProductDetail = ({ data, dataAlso }: ProductDetailProps) => {
  const dispatch = useDispatch();
  const wishListSlug = useSelector(selectWishItems);
  const basketItems: BasketItem[] = useSelector(selectItems);
  const [isOnWishList, setIsOnWishList] = useState<boolean>(false);
  const [isOnBasketList, setIsOnBasketList] = useState<boolean>(false);
  const [dataItem, setDataItem] = useState<Product>();
  const [imgSelected, setImgSelected] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    setIsOnWishList(wishListSlug.includes(data.slug));
    setIsOnBasketList(
      basketItems.filter((item) => item.slug === data.slug).length > 0
    );
  }, []);

  useEffect(() => {
    if (data) {
      setDataItem(data);
    }
  }, [data]);

  if (!data || !dataAlso) return <NotFound />;
  return (
    <>
      <div className="bg-cusgray min-h-screen pb-10">
        <div className="max-w-4xl mx-auto min-h-screen pt-16">
          <div className="flex justify-between place-items-center py-4 px-1 mb-4">
            <Link href="/shop">
              <div className="w-9 h-9 shadow-lg bg-white text-cusblack hover:bg-cusblack hover:text-white duration-200 cursor-pointer rounded-full flex justify-center place-items-center">
                <svg
                  className="w-4 h-4 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </Link>
            <h4 className="text-cusblack text-md">Product Details</h4>
            <div className="w-8"></div>
          </div>

          <div className="w-full bg-white md:rounded-2xl shadow-lg md:py-8 md:px-10 md:flex overflow-hidden">
            <div className="photo md:w-1/3">
              <div>
                {dataItem && (
                  <Image
                    width={100}
                    height={100}
                    className=" h-60 object-cover w-full md:rounded-2xl"
                    src={dataItem.images[imgSelected]}
                    alt={dataItem.name}
                  />
                )}
              </div>
              <div className="px-2 md:px-0 flex mt-4">
                {dataItem &&
                  dataItem.images.map((img, idx) => (
                    <Image
                      width={100}
                      height={100}
                      key={idx}
                      src={img}
                      onClick={() => setImgSelected(idx)}
                      className={`${
                        imgSelected == idx
                          ? `border-2 border-cusblack filter brightness-90 `
                          : ``
                      } md:w-14 md:h-14 h-16 w-16 rounded-xl object-cover mr-3 cursor-pointer duration-100 `}
                      alt={dataItem.name}
                    />
                  ))}
              </div>
            </div>
            <div className="detail px-2 md:px-0 mt-3 md:mt-0 md:ml-6 py-2 md:w-2/3">
              <p className="flex place-items-center text-sm text-gray-400">
                {dataItem && dataItem.type}
                <span className="mx-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {dataItem && dataItem.category}
              </p>
              <h1 className="text-3xl text-cusblack font-medium my-3">
                {dataItem && dataItem.name}
              </h1>
              <NumericFormat
                value={dataItem?.price}
                className="font-semibold text-cusblack text-left"
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value: any, props: any) => (
                  <h1
                    className="my-3 font-semibold text-lg text-cusblack"
                    {...props}
                  >
                    {value}
                  </h1>
                )}
              />
              <div className="mt-2 sizes text-sm text-gray-400">
                <p className="mb-2">Select size</p>
                <div className="flex">
                  {dataItem?.sizes.map((size, idx) => (
                    <button
                      onClick={() => setSelectedSize(idx)}
                      key={idx}
                      className={`${
                        selectedSize === idx
                          ? `bg-cusblack text-white`
                          : `text-cusblack border border-cusblack`
                      } mr-2 duration-200 flex place-items-center justify-center rounded-full w-8 h-8 cursor-pointer hover:bg-cusblack hover:text-white`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-2 sizes text-sm text-gray-400">
                <p className="mb-2">Select color</p>
                <div className="flex">
                  {dataItem?.colors.map((color, idx) => (
                    <button
                      onClick={() => setSelectedColor(idx)}
                      key={idx}
                      className={`${
                        selectedColor === idx
                          ? `border-2 border-cusblack`
                          : `border-none`
                      } mr-2 duration-200 flex place-items-center justify-center rounded-full w-8 h-8 cursor-pointer hover:bg-cusblack hover:text-white`}
                      style={{ backgroundColor: color.colorBg }}
                    />
                  ))}
                </div>
              </div>
              <div className="buttoncart flex mt-5 w-full">
                <button
                  onClick={() => {
                    isOnBasketList
                      ? dispatch(removeFromBasket(data))
                      : dispatch(addToBasket({ ...dataItem, quantity: 1 }));

                    setIsOnBasketList(!isOnBasketList);
                  }}
                  className="w-4/5 md:w-3/5 bg-cusblack overflow-hidden py-4 text-white rounded-lg text-sm active:bg-gray-800 duration-100"
                >
                  <motion.span
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="flex justify-center place-items-center overflow-hidden"
                  >
                    {isOnBasketList ? 'Remove' : 'Add to basket'}
                    <ShoppingCartIcon className="ml-2 w-5 h-5" />
                  </motion.span>
                </button>
                <button
                  onClick={() => {
                    isOnWishList
                      ? dispatch(removeFromWishlist(data?.slug))
                      : dispatch(addToWishlist(data?.slug));

                    setIsOnWishList(!isOnWishList);
                  }}
                  className="w-1/5 ml-2 bg-white border border-cusblack py-4 text-cusblack rounded-lg text-sm"
                >
                  {isOnWishList ? (
                    <HeartIconSolid className="w-5 h-5 m-auto fill-cusblack" />
                  ) : (
                    <HeartIcon className="w-5 h-5 m-auto" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="text-cusblack p-2 md:px-10 md:py-6 mt-14 bg-white md:rounded-2xl shadow-lg">
            <p className="mb-4 font-medium text-lg">You may also like:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-6">
              {dataItem &&
                dataAlso.map((data, idx) => {
                  if (idx < 4) return <ProductCard key={data.id} item={data} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
