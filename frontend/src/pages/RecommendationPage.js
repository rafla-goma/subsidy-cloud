import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSubsidies from '../hooks/useSubsidies';

const RecommendationPage = () => {
  const { allSubsidies } = useSubsidies();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (allSubsidies.length > 0) {
      const mockRecommendations = allSubsidies
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      setRecommendations(mockRecommendations);
    }
  }, [allSubsidies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-yellow-200 p-6 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">おすすめの補助金</h1>
      <p className="text-gray-700 mb-8">あなたの企業プロフィールに基づいておすすめの補助金を表示しています。</p>
      <ul className="space-y-4">
        {recommendations.map(subsidy => (
          <li key={subsidy.id} className="bg-white p-6 rounded-lg shadow-md">
            <Link to={`/subsidy/${subsidy.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {subsidy.title}
            </Link>
            <p className="text-gray-700 mt-2">{subsidy.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-green-600">カテゴリ: {subsidy.category}</span>
              <span className="text-sm text-red-600">締切: {subsidy.deadline}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationPage;