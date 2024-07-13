import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSubsidies from '../hooks/useSubsidies';

const SubsidyListPage = () => {
  const { allSubsidies } = useSubsidies();
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('deadline');

  const filteredSubsidies = allSubsidies.filter(subsidy => 
    subsidy.title.toLowerCase().includes(filter.toLowerCase()) ||
    subsidy.category.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedSubsidies = [...filteredSubsidies].sort((a, b) => {
    if (sort === 'deadline') {
      return new Date(a.deadline) - new Date(b.deadline);
    } else if (sort === 'popularity') {
      return b.popularity - a.popularity;
    }
    return 0;
  });

  return (
    <div className="space-y-6">
      {/* <h1 className="text-3xl font-bold">補助金一覧</h1> */}
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="フィルター"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="deadline">締切日順</option>
          <option value="popularity">人気順</option>
        </select>
      </div>
      <ul className="space-y-4">
        {sortedSubsidies.map(subsidy => (
          <li key={subsidy.id} className="bg-white p-4 rounded shadow">
            <Link to={`/subsidy/${subsidy.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {subsidy.title}
            </Link>
            <p className="text-gray-600">{subsidy.description}</p>
            <div className="mt-2 text-sm">
              <span className="text-green-600 mr-4">カテゴリ: {subsidy.category}</span>
              <span className="text-red-600">締切: {subsidy.deadline}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubsidyListPage;