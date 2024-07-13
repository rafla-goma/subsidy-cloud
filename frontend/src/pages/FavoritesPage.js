import React from 'react';
import { Link } from 'react-router-dom';
import useSubsidies from '../hooks/useSubsidies';
import useFavorites from '../hooks/useFavorites';

const FavoritesPage = () => {
  const { allSubsidies } = useSubsidies();
  const { favorites, removeFavorite } = useFavorites();

  const favoriteSubsidies = allSubsidies.filter(subsidy => favorites.includes(subsidy.id));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">お気に入りの補助金</h1>
      {favoriteSubsidies.length === 0 ? (
        <p>お気に入りの補助金はありません。</p>
      ) : (
        <ul className="space-y-4">
          {favoriteSubsidies.map(subsidy => (
            <li key={subsidy.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <Link to={`/subsidy/${subsidy.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                  {subsidy.title}
                </Link>
                <p className="text-gray-600">{subsidy.description}</p>
                <p className="text-sm text-red-600 mt-2">締切: {subsidy.deadline}</p>
              </div>
              <button
                onClick={() => removeFavorite(subsidy.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;