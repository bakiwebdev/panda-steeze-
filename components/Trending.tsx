import { server } from '../config';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

const Trending = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetch(`${server}/api/items/trending`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Trending productCards
          </h2>
          <Link
            href="/shop/"
            className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {data.length > 0 &&
            data.map((item) => <ProductCard key={item.slug} item={item} />)}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link
            href="/shop/"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
