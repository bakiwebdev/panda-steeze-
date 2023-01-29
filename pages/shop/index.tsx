import React, { useEffect, useState } from 'react';
// import CardSkeleton from '../../components/CardSkeleton';
import ShopLayout from '../../components/ShopLayout';
import { useSelector } from 'react-redux';
import { recentCategory } from '../../slices/CategorySlice';
import Seo from '../../components/SEO';
import ProductCard from '../../components/ProductCard';

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + '/items/category');
  const data: Product = await res.json();
  const resTypes = await fetch(process.env.NEXT_PUBLIC_APIURL + '/items/type');
  const dataTypes: string[] = await resTypes.json();
  const resItems = await fetch(process.env.NEXT_PUBLIC_APIURL + `/items`);
  const dataItems: Product[] = await resItems.json();

  return {
    props: {
      data,
      dataItems,
      dataTypes,
    },
    revalidate: 5,
  };
}

interface CategoryProps {
  data: string[];
  dataItems: Product[];
  dataTypes: string[];
}

function Category({ data, dataItems, dataTypes }: CategoryProps) {
  // console.log(data, dataItems, dataTypes);
  const [sort, setSort] = useState(0);
  const recent_category = useSelector(recentCategory);
  const data_items = dataItems;
  // .filter((item) => {
  //   if (recent_category.length > 0) {
  //     return item.type.name == recent_category;
  //   } else {
  //     return true;
  //   }
  // })
  // .sort((a, b) => {
  //   if (sort === 1) {
  //     return a.price - b.price;
  //   }
  //   if (sort === 2) {
  //     return b.price - a.price;
  //   }
  //   return true;
  // });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <Seo />
      <ShopLayout categories={data} setSort={setSort} types={dataTypes}>
        {!loading &&
          (data_items.length < 1 ? (
            <p className="col-span-full mx-auto text-sm text-gray-400">
              No item found
            </p>
          ) : (
            data_items.map((item: Product) => (
              <ProductCard key={item.slug} item={item} />
            ))
          ))}
        {/* // ) : (
        //   <>
        //     <CardSkeleton />
        //     <CardSkeleton />
        //     <CardSkeleton />
        //     <CardSkeleton />
        //     <CardSkeleton />
        //   </>
        // )} */}
      </ShopLayout>
    </>
  );
}

export default Category;
