import data from '../../../../app/data.json';

export default async (req, res) => {
  const types = data.map((item) => item.type);
  const stypes = [...new Set(types)];
  res.status(200).json(stypes);
};
