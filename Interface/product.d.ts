interface AvailableColors {
  name: string;
  colorBg: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  colors: AvailableColors[];
  price: number;
  category: string;
  type: string;
  images: string[];
}
