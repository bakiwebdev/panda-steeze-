import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../../../app/data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const product = data as Product[];
  const randomProduct: Product | Product[] = [];
  [1, 2, 3, 4].forEach(() => {
    randomProduct.push(product[Math.floor(Math.random() * product.length)]);
  });
  res.status(200).json(randomProduct as Product[]);
};
