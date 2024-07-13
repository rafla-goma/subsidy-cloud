import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useSubsidies from '../hooks/useSubsidies';

const CategorySubsidiesPage = () => {
  const { categoryName } = useParams();
  const { allSubsidies } = useSubsidies();

  const categorySubsidies = allSubsidies.filter(subsidy => subsidy.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{categoryName}カテゴリの補助金</h1>
      <ul className="space-y-4">
        {categorySubsidies.map(subsidy => (
          <li key={subsidy.id} className="bg-white p-4 rounded shadow">
            <Link to={`/subsidy/${subsidy.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {subsidy.title}
            </Link>
            <p className="text-gray-600">{subsidy.description}</p>
            <p className="text-sm text-red-600 mt-2">締切: {subsidy.deadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySubsidiesPage;
