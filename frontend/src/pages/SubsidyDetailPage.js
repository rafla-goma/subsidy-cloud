import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useSubsidies from '../hooks/useSubsidies';

const SubsidyDetailPage = () => {
  const { id } = useParams();
  const { allSubsidies } = useSubsidies();
  const subsidy = allSubsidies.find(s => s.id === parseInt(id));

  if (!subsidy) {
    return <div>補助金が見つかりません。</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">{subsidy.title}</h2>
      <p className="mb-4">{subsidy.description}</p>
      <p className="text-sm font-medium text-indigo-600 mb-2">申請期限: {subsidy.deadline}</p>
      <p className="text-sm font-medium text-green-600 mb-4">カテゴリ: {subsidy.category}</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        ← ホームに戻る
      </Link>
    </div>
  );
};

export default SubsidyDetailPage;