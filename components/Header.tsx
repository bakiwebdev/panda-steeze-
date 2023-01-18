/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import LogoPic from '../assets/logo.png';
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-5 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                width={100}
                height={100}
                className="h-16 w-auto rounded-full sm:h-10 object-contain"
                src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1674038368/Panda%20Steeze/logo_m5w7l2.png"
                alt="Panda Steeze Logo"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Men
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Women
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              kids
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-4">
            <Link
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <HeartIcon className="h-7 w-7" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <Image
                    width={100}
                    height={100}
                    className="h-16 w-auto rounded-full sm:h-10 object-contain"
                    src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1674038368/Panda%20Steeze/logo_m5w7l2.png"
                    alt="Panda Steeze Logo"
                  />
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="#"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Men
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Women
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Kids
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
