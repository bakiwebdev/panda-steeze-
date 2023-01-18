import Image from 'next/image';
import Link from 'next/link';
import Product from './Product';
const products = [
  {
    id: 1,
    name: 'Panda t-shirt 1',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dcmvndqd1/image/upload/v1674040154/Panda%20Steeze/WhatsApp_Image_2022-07-12_at_17.53.40_iodmml.jpg',
    imageAlt: 'Panda t-shirt image alternative',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 1,
    name: 'Panda t-shirt 1',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dcmvndqd1/image/upload/v1674040154/Panda%20Steeze/WhatsApp_Image_2022-07-12_at_17.53.41_xayapo.jpg',
    imageAlt: 'Panda t-shirt image alternative',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 1,
    name: 'Panda t-shirt 1',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dcmvndqd1/image/upload/v1674040156/Panda%20Steeze/WhatsApp_Image_2022-07-12_at_17.45.33_rbw3ib.jpg',
    imageAlt: 'Panda t-shirt image alternative',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 1,
    name: 'Panda t-shirt 1',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dcmvndqd1/image/upload/v1674040154/Panda%20Steeze/WhatsApp_Image_2022-07-12_at_17.53.40_iodmml.jpg',
    imageAlt: 'Panda t-shirt image alternative',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  // More products...
];

const Trending = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product, index) => (
            <Product
              key={index}
              imageAlt={product.imageAlt}
              imageSrc={product.imageSrc}
              name={product.name}
              price={product.price}
              url={product.href}
            />
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link
            href="#"
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
