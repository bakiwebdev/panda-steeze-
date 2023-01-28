import React from 'react';
import Seo from '../components/SEO';
import Image from 'next/image';

function OurStore() {
  return (
    <>
      <Seo />
      <div className="w-full min-h-screen bg-cusgray">
        <div className="max-w-5xl mx-auto pt-20 pb-10 md:px-0">
          <div className="md:rounded-2xl overflow-hidden bg-white shadow-lg grid grid-cols-1 md:grid-cols-2">
            <div className="grid relative grid-cols-2 grid-rows-2 overflow-hidden bg-gray-600 gap-0">
              <div className="absolute top-0 w-full h-full bg-gray-500 bg-opacity-30"></div>
              <div className="col-span-1 h-60">
                <Image
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  src="https://i.ibb.co/6bry43z/wf2017232543p.jpg"
                  alt="cover image"
                />
              </div>
              <div className="col-span-1 h-60">
                <Image
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  src="https://i.ibb.co/rZckbV2/IMG-4202-2.jpg"
                  alt="cover image"
                />
              </div>
              <div className="col-span-2 h-60">
                <Image
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  src="https://i.ibb.co/cgwbYrz/134f32d1181f86590506f301cb9509a3.jpg"
                  alt="Cover Image"
                />
              </div>
            </div>
            <div className="px-10 py-10 text-cusblack row-start-1 md:col-start-2">
              <h1 className="text-xl mb-5 bg-cusblack text-white py-1 px-3 rounded-sm">
                About Us
              </h1>
              <div className="my-2">
                <h3 className="mb-1 text-lg font font-semibold">
                  Welcome to Panda Steeze!
                </h3>
                <p className="text-sm">
                  We are an independent clothing company that specializes in
                  designing and creating stylish and comfortable apparel items.
                  Our products are designed to make you stand out in a crowd and
                  express your own unique style.
                </p>
                <p className="text-sm">
                  We pride ourselves on our creative designs, quality
                  craftsmanship, and superior customer service. Our products
                  include hoodies, t-shirts, and accessories. We are constantly
                  striving to create the very best in apparel that are sure to
                  have a lasting presence in your wardrobe.
                </p>
                <p className="text-sm">
                  Here at Panda Steeze, we believe in providing our customers
                  with an exceptional experience. We also value community and
                  family, which is why we offer discounts to those who make
                  purchases from us as a group.
                </p>
                <p className="text-sm">
                  In addition to our apparel selection, we provide an extensive
                  selection of accessories to enhance your look. Whether you are
                  looking for the perfect hat, beanie, or jewelry, Panda Steeze
                  has it all.
                </p>
                <p className="text-sm">
                  We understand that fashion is an individual experience, and we
                  are here to help make your own personal style come alive.
                  Thank you for taking the time to learn more about us. We can’t
                  wait to help you find the perfect ensemble!
                </p>
                <p className="text-sm">Sincerely, The Panda Steeze Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
