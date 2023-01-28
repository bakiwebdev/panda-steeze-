import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../../app/data.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};
