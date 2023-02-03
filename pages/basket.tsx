import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import BasketProduct from '../components/BasketProduct';
import { BasketItem, selectItems } from '../store/slices/basketSlice';
import { NumericFormat } from 'react-number-format';

const Basket = () => {
  const basketItems = useSelector(selectItems);
  const [items, setItems] = useState<BasketItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const createCheckoutSession = async () => {
    alert('Checking out is not available, please try later!');
  };

  useEffect(() => {
    setItems(basketItems);
    setTotalPrice(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [basketItems]);

  return (
    <>
      <div className="w-full min-h-screen relative bg-cusgray pb-10">
        <div className="max-w-6xl mx-auto pt-20 px-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4">
            <div className="md:col-span-2 md:mr-5">
              <div className="">
                <div className="rounded-xl bg-white px-5 pt-5 mt-5 shadow-lg overflow-hidden">
                  <p>Your Basket ({items.length})</p>
                  <div className="pt-5 pb-2">
                    {items.length > 0 &&
                      items.map((item) => (
                        <BasketProduct key={item.slug} item={item} />
                      ))}
                    {items.length === 0 && (
                      <div className="text-gray-400 text-sm mb-10">
                        <Image
                          width={100}
                          height={100}
                          className="mx-auto md:w-1/3 object-cover w-full"
                          src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1675268900/Panda%20Steeze/empty-cart-4a7779da-Convert-Image_hpdlzv.png"
                          alt=""
                        />
                        <p className="text-center">
                          Your basket is empty,
                          <br />
                          to start shopping click{' '}
                          <span className="underline">
                            <Link href="/shop">here</Link>
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {items.length > 0 && (
              <div className="mt-10 md:mt-0 col-span-1">
                <div className="rounded-xl bg-white shadow-lg py-6 px-5">
                  <h1 className="text-cusblack font-bold text-md">SUMMARY</h1>
                  <div className="mt-4"></div>
                  <div className="text-sm pt-1 font-semibold pb-2 border-b border-cusblack flex justify-between place-items-center">
                    <p className="">SUBTOTAL</p>
                  </div>

                  <div className="my-3 border-b border-cusblack pb-2">
                    {items.map((item) => (
                      <div
                        key={item.slug}
                        className="flex justify-between place-items-center text-sm mb-1"
                      >
                        <p className="pr-3">{item.name}</p>
                        <p>
                          <NumericFormat
                            value={item.price}
                            className="font-semibold text-cusblack text-right"
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            renderText={(value: any, props: any) => (
                              <h1
                                className="font-semibold text-cusblack text-right"
                                {...props}
                              >
                                {value}
                              </h1>
                            )}
                          />{' '}
                          x {item.quantity}
                        </p>
                      </div>
                    ))}
                    <div className="my-3 border-b border-cusblack pb-2"></div>
                    <div className="flex justify-between place-items-center text-sm mb-1">
                      <p>TAX</p>
                      <p>FREE</p>
                    </div>
                  </div>

                  <div className="flex justify-between place-items-center font-semibold">
                    <p>TOTAL</p>
                    <NumericFormat
                      value={totalPrice}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </div>

                  <button
                    disabled={!items.length}
                    onClick={createCheckoutSession}
                    className="py-2 px-3 disabled:cursor-not-allowed text-white w-full mt-6 rounded-lg bg-cusblack "
                  >
                    <span className="flex justify-center place-items-center">
                      CHECKOUT
                      <svg
                        className="ml-2 w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
