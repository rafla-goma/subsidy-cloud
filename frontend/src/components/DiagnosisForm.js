import React from 'react';

const DiagnosisForm = ({ onSubmit }) => (
  <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-8">
    <h2 className="text-2xl font-semibold mb-6 text-indigo-800">企業診断</h2>
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="industry" className="block mb-2">業種</label>
        <select id="industry" className="w-full p-2 border rounded">
          <option>製造業</option>
          <option>サービス業</option>
          <option>小売業</option>
          <option>IT・ソフトウェア</option>
          <option>その他</option>
        </select>
      </div>
      <div>
        <label htmlFor="employees" className="block mb-2">従業員数</label>
        <input type="number" id="employees" className="w-full p-2 border rounded" placeholder="例: 50" />
      </div>
      <div>
        <label htmlFor="annualSales" className="block mb-2">年間売上高（万円）</label>
        <input type="number" id="annualSales" className="w-full p-2 border rounded" placeholder="例: 10000" />
      </div>
      <div>
        <label htmlFor="businessGoals" className="block mb-2">事業目標（複数選択可）</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> 技術開発・イノベーション
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> 海外展開
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> デジタル化・DX推進
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> 環境対策・サステナビリティ
          </label>
        </div>
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all">
        診断結果を見る
      </button>
    </form>
  </div>
);

export default DiagnosisForm;