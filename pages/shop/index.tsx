import { server } from '../../config';
import React, { useEffect, useState } from 'react';
import CardSkeleton from '../../components/CardSkeleton';
import ShopLayout from '../../components/ShopLayout';
import { useSelector } from 'react-redux';
import Seo from '../../components/SEO';
import ProductCard from '../../components/ProductCard';
import { RootState } from '../../store';

export async function getStaticProps() {
  const res = await fetch(`${server}/api/items/category`);
  const data: Product = await res.json();
  const resTypes = await fetch(`${server}/api/items/type`);
  const dataTypes: string[] = await resTypes.json();
  const resItems = await fetch(`${server}/api/items`);
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
  const [sort, setSort] = useState(0);
  const recent_category = useSelector(
    (state: RootState) => state.category.value
  );
  const data_items = dataItems.filter((item) => {
    if (recent_category.length > 0) {
      return item.type == recent_category;
    } else {
      return true;
    }
  });
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
        {!loading ? (
          data_items.length < 1 ? (
            <p className="col-span-full mx-auto text-sm text-gray-400">
              No item found
            </p>
          ) : (
            data_items.map((item: Product) => (
              <ProductCard key={item.slug} item={item} />
            ))
          )
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </ShopLayout>
    </>
  );
}

export default Category;
