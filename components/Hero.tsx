import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-1/3 z-20 flex flex-col place-items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="px-5 font-semibold text-white"
        >
          <h1 className="text-4xl md:text-6xl  mb-4 capitalize max-w-2xl">
            Cozy Up in Comfort with Our Hoodies and T-Shirts!
          </h1>
          <p className="max-w-xl font-normal">
            Stay warm and stylish this winter with our collection of hoodies and
            t-shirts. Shop now for unbeatable comfort and quality!
          </p>
          <div className="my-5" />
          <Link href="/shop/">
            <motion.p className="flex mt-5 w-fit items-center px-5 bg-cusblack overflow-hidden py-4 text-white rounded-lg text-sm active:bg-gray-800 duration-100">
              Shop Now
              <span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </motion.p>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: -1000 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
        animate={{ y: 0 }}
        className="relative"
      >
        <div className="w-full h-screen bg-gray-500 bg-opacity-30 absolute top-0 z-10 pointer-events-none"></div>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          transitionTime={500}
          interval={3000}
          stopOnHover={false}
          swipeable={false}
        >
          <div>
            <Image
              alt="landing pic"
              width={500}
              height={500}
              className="h-screen object-cover w-full"
              loading="lazy"
              src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1675032696/Panda%20Steeze/1fe17b0e9fb5b039a076deb19b229462_jv8rkk.jpg"
            />
          </div>
          <div>
            <Image
              alt="landing pic"
              width={500}
              height={500}
              className="h-screen object-cover w-full"
              loading="lazy"
              src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1675032696/Panda%20Steeze/dec58d29e7f8bb9c383e2b8421d320b7_kh0yco.jpg"
            />
          </div>
          <div>
            <Image
              alt="landing pic"
              width={500}
              height={500}
              className="h-screen object-cover w-full"
              loading="lazy"
              src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1675032697/Panda%20Steeze/fe41b5173f7e6713662534467fc930ce_vnfa99.jpg"
            />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Hero;
