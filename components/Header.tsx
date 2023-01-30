import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuNav from './MenuNav';
import { useRouter } from 'next/dist/client/router';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import {
  XMarkIcon,
  RectangleStackIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { RootState } from '../store';
import { BasketItem } from '../store/slices/basketSlice';

function Header() {
  const router = useRouter();
  const data = useSelector((state: RootState) => state.basket.items);
  const dataWish = useSelector((state: RootState) => state.wishlist.wishItems);
  const [items, setItems] = useState<BasketItem[]>([]);
  const [wish, setWish] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setItems(data);
    setWish(dataWish);
  }, [data, dataWish]);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full mx-auto fixed bg-cusgray z-30 py-2 md:px-0 duration-200">
      <div className="px-2 navtop relative max-w-6xl mx-auto flex justify-between place-items-center py-1.5">
        <div className="burger flex items-center">
          <Popover className={'relative '}>
            <Popover.Button>
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                className="h-7 w-67 fill-cusblack"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 mx-auto origin-top-left transform p-2 transition z-10 mt-14 w-screen max-w-sm px-4 sm:px-0"
              >
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <Link href="/">
                        <Image
                          width={50}
                          height={50}
                          className="h-10 w-fit rounded-full sm:h-16 object-contain"
                          src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1674038368/Panda%20Steeze/logo_m5w7l2.png"
                          alt="Panda Steeze Logo"
                        />
                      </Link>
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <Link
                          href="/"
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-cusblack">
                            Home
                          </span>
                        </Link>
                        <Link
                          href="/shop/"
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-cusblack">
                            Shop
                          </span>
                        </Link>
                        <Link
                          href="/"
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-cusblack">
                            About
                          </span>
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <h3 className="hidden md:inline text-md mr-2 font-semibold ml-3 text-cusblack">
            Panda Steeze
          </h3>
        </div>
        <div className="profile flex items-center place-items-center">
          <Link href="/shop">
            <div className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
              <RectangleStackIcon className="w-6 h-6 text-cusblack m-auto" />
            </div>
          </Link>
          <div
            onClick={() => router.push('/basket')}
            className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
          >
            <ShoppingBagIcon className="w-6 h-6 text-cusblack m-auto" />
            {items.length > 0 ? (
              <div
                className={`flex
                } absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0`}
              >
                {/* {items.reduce((a, item) => a + item?.quantity, 0)} */}0
              </div>
            ) : (
              ''
            )}
          </div>
          <Link href="/wishlist">
            <div className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
              <HeartIcon className="w-6 h-6 text-cusblack m-auto" />
              {wish.length > 0 ? (
                <div
                  className={`flex
                absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0`}
                >
                  {wish.length}
                </div>
              ) : (
                ''
              )}
            </div>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="w-8 relative flex items-center h-8 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
          >
            <UserIcon className="w-6 h-6 text-cusblack m-auto" />
          </button>
        </div>
      </div>

      <MenuNav handleOpen={handleOpen} isOpen={isOpen} />
    </nav>
  );
}

export default Header;
