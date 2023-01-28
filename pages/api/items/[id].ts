import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../../app/data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const item = data.find((item) => item.slug === id);

  res.status(200).json(JSON.stringify(item));
};
