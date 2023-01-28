import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/BasketSlice';
import { selectWishItems } from '../slices/WishListSlice';
import MenuNav from './MenuNav';
import nookies from 'nookies';
import { useRouter } from 'next/dist/client/router';
import { destroyCookie } from 'nookies';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import {
  XMarkIcon,
  RectangleStackIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

function Header() {
  const router = useRouter();
  const data = useSelector(selectItems);
  const [items, setItems] = useState([]);
  const dataWish = useSelector(selectWishItems);
  const [wish, setWish] = useState([]);
  const [open, setOpen] = useState(false);
  const [cookie, setCookie] = useState({});
  useEffect(() => {
    const dataCookie = nookies.get();
    try {
      setItems(data);
      setWish(dataWish);
      setCookie(JSON.parse(dataCookie.user));
    } catch (err) {
      setCookie(dataCookie.user);
    }
  }, [data, dataWish]);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const signOut = () => {
    destroyCookie(null, 'token');
    destroyCookie(null, 'user');
    router.replace('/login');
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
                {items.reduce((a, item) => a + item.quantity, 0)}
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

          {cookie && (
            <div
              onClick={() => router.push('/orders')}
              className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
            >
              <svg
                className="w-6 m-auto h-6 text-cusblack"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="w-8 relative flex items-center h-8 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
          >
            <UserIcon className="w-6 h-6 text-cusblack m-auto" />
            {open && (
              <div className="p-3 bg-white absolute top-11 leading-relaxed right-0 rounded-lg shadow-lg text-xs text-cusblack">
                {cookie && (
                  <div className="bg-cusblack text-white p-3 rounded-lg">
                    <ul className="text-left w-28">
                      <li className="line-clamp-1">{cookie.username}</li>
                      <li className="line-clamp-1">{cookie.email}</li>
                    </ul>
                  </div>
                )}
                {cookie && (
                  <div
                    onClick={signOut}
                    className="hover:underline mt-2 flex place-items-center justify-end w-fit"
                  >
                    <ArrowRightOnRectangleIcon className="w-6 h-6 text-cusblack" />
                    <span>Sign out</span>
                  </div>
                )}
                {!cookie && (
                  <Link href="/login">
                    <div className="hover:underline flex gap-2 place-items-center w-fit">
                      <ArrowLeftOnRectangleIcon className="w-6 h-6 text-cusblack" />
                      <span>Sign In</span>
                    </div>
                  </Link>
                )}
              </div>
            )}
          </button>
        </div>
      </div>

      <MenuNav handleOpen={handleOpen} isOpen={isOpen} />
    </nav>
  );
}

export default Header;
