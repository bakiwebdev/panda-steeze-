import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../../../app/data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { category } = req.query;
  category as string;

  const item = data.filter((item) => item.category.toLowerCase() === category);

  res.status(200).json(JSON.stringify(item));
};
