import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from '../store/slices/categorySlice';
import { RootState } from '../store';

interface SideCategoryProps {
  typesData: string[];
}
function SideCategory({ typesData }: SideCategoryProps) {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.category.value);
  const [recent, setRecent] = useState<string>();
  useEffect(() => setRecent(data));
  return (
    <div className="bg-white rounded-3xl px-5 py-6 shadow-lg w-2/3 md:w-1/2 lg:w-auto">
      <h3 className="font-semibold mb-3 text-lg text-cusblack">Categories</h3>
      <ul className="leading-10 text-xs text-gray-400">
        <li>
          <button
            className={`${
              recent == '' ? `font-semibold text-cusblack` : ``
            } cursor-pointer`}
            onClick={() => dispatch(selectedCategory(''))}
          >
            All products
          </button>
        </li>
        {typesData.map((type) => (
          <li key={type}>
            <button
              className={`${
                recent == type ? `font-semibold text-cusblack` : ``
              } cursor-pointer`}
              onClick={() => dispatch(selectedCategory(type))}
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideCategory;
