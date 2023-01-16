import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  url: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: string;
}

const Product = (product: ProductProps) => {
  return (
    <Link href={product.url} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          width={100}
          height={100}
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </Link>
  );
};

export default Product;
