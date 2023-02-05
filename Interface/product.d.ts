interface AvailableColors {
  name: string;
  colorBg: string;
}

interface AvailableSize {
  name: string;
  size: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  colors: AvailableColors[];
  sizes: AvailableSize[];
  price: number;
  category: string;
  type: string;
  images: string[];
}
