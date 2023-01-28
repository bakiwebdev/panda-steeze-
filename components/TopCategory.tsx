import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Search from './Search';

function TopCategory({ categories }) {
  const { asPath } = useRouter();
  useEffect(() => {
    setIsActive(asPath);
  }, [asPath]);

  const [isActive, setIsActive] = useState('/shop');
  return (
    <div className="navbot bg-cusgray z-30 w-full px-1 md:px-0">
      <div className=" mx-auto md:flex place-items-center max-w-6xl">
        <div className="category overflow-x-auto flex flex-wrap place-items-center py-2">
          <Link key="all" href={`/shop`}>
            <button
              className={`${
                isActive == `/shop`
                  ? `bg-cusblack text-white shadow-lg `
                  : `bg-white text-cusblack`
              } py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0`}
            >
              All items
            </button>
          </Link>
          {categories.map((cat, idx) => (
            <Link key={idx} href={`/shop/${cat}`}>
              <button
                className={`${
                  isActive == `/shop/${cat}`
                    ? `bg-cusblack text-white shadow-lg `
                    : `bg-white text-cusblack`
                } py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0`}
              >
                {cat}
              </button>
            </Link>
          ))}
        </div>
        <Search />
      </div>
    </div>
  );
}

export default TopCategory;
