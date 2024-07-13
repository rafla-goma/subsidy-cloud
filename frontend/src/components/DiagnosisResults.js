import React from 'react';
import { Link } from 'react-router-dom';

const DiagnosisResults = ({ results, isLoggedIn }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">診断結果</h2>
      <ul className="space-y-4">
        {results.map((result) => (
          <li key={result.id} className="border p-4 rounded-md">
            <h3 className="text-lg font-semibold">{result.title}</h3>
            <p className="text-gray-600">マッチ度: {result.match}%</p>
            {isLoggedIn ? (
              <Link to={`/subsidy/${result.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
                詳細を見る
              </Link>
            ) : (
              <p className="text-sm text-gray-500 mt-2">詳細を見るにはログインが必要です</p>
            )}
          </li>
        ))}
      </ul>
      {!isLoggedIn && (
        <div className="mt-6">
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            ログインして詳細を見る
          </Link>
        </div>
      )}
    </div>
  );
};

export default DiagnosisResults;