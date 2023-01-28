import data from '../../../../app/data.json';

export default async (req: Request, res: Response) => {
  const product = data as Product[];
  const randomProduct: Product | Product[] = [];
  [1, 2, 3, 4].map(() => {
    randomProduct.push(product[Math.floor(Math.random() * product.length)]);
  });
  res.status(200).json(randomProduct as Product[]);
};
