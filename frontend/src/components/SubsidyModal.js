import React from 'react';

const SubsidyModal = ({ subsidy, onClose }) => {
  if (!subsidy) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">{subsidy.title}</h2>
        <p className="mb-4">{subsidy.description}</p>
        <p className="text-sm font-medium text-indigo-600 mb-2">申請期限: {subsidy.deadline}</p>
        <p className="text-sm font-medium text-green-600 mb-4">カテゴリ: {subsidy.category}</p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            閉じる
          </button>
          <button className="text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all">
            申請する
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubsidyModal;