interface AvailableColors {
  name: string;
  colorBg: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  colors?: AvailableColors[];
  price: string;
  category: string;
  type: string;
  images: string[];
}
