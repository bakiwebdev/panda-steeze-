import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../../../app/data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const category = data.map((item) => item.category);
  const scategory = [...new Set(category)];

  res.status(200).json(scategory);
};
