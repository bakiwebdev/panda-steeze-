import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-no-repeat bg-center py-36 px-5 md:px-10 bg-gray-200">
      <Image
        width={100}
        height={100}
        src={
          'https://res.cloudinary.com/dcmvndqd1/image/upload/v1674046971/Panda%20Steeze/WhatsApp_Image_2022-07-12_at_17.53.41-removebg-preview_uwa6vl.png'
        }
        alt="banner image"
        className="float-right lg:float-none lg:absolute mx-auto bottom-0 right-0 h-full w-auto object-contain"
      />
      <div className="container">
        <h1 className="text-4xl md:text-6xl text-gray-800 font-medium mb-4 capitalize max-w-xl">
          Cozy Up in Comfort with Our Hoodies and T-Shirts!
        </h1>
        <p className="max-w-xl">
          Stay warm and stylish this winter with our collection of hoodies and
          t-shirts. Shop now for unbeatable comfort and quality!
        </p>
        <div className="mt-12">
          <Link
            href="#"
            className="bg-blue-500 border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
