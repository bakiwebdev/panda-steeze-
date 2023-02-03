import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ShopCarousel() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Skeleton className="h-36 md:h-64" />;
  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        transitionTime={500}
        interval={4000}
        className="rounded-xl overflow-hidden shop shadow-lg"
      >
        <div className="relative">
          <Image
            width={500}
            height={500}
            className=" bg-white h-36 object-cover md:h-64 w-full pointer-events-none"
            loading="lazy"
            src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1675031634/Panda%20Steeze/2422_bo4b1t.jpg"
            alt="Shop Carousel Image"
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className=" bg-white h-36 object-cover md:h-64 w-full"
            loading="lazy"
            src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1675031544/Panda%20Steeze/8239942_xz14ai.jpg"
            alt="Shop Carousel Image"
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className=" bg-white h-36 object-cover md:h-64 w-full"
            loading="lazy"
            src="https://res.cloudinary.com/dcmvndqd1/image/upload/v1675031497/Panda%20Steeze/7683417_od3txb.jpg"
            alt="Shop Carousel Image"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ShopCarousel;
