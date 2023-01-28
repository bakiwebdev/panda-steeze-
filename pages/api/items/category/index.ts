import data from '../../../../app/data.json';

export default async (req, res) => {
  //   const { category } = req.query;

  //   const item = data.filter(
  //     (item) => item.category.toLowerCase() === category.toLowerCase()
  //   );
  const category = data.map((item) => item.category);
  const scategory = [...new Set(category)];

  res.status(200).json(scategory);
};
