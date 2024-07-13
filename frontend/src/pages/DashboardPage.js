import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalApplications: 0,
    approvedApplications: 0,
    pendingApplications: 0
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // ここで統計データを取得するAPIを呼び出す
    setStats({
      totalUsers: 1000,
      totalApplications: 500,
      approvedApplications: 300,
      pendingApplications: 200
    });

    setChartData([
      { name: '1月', applications: 65 },
      { name: '2月', applications: 59 },
      { name: '3月', applications: 80 },
      { name: '4月', applications: 81 },
      { name: '5月', applications: 56 },
      { name: '6月', applications: 55 },
    ]);
  }, []);

  const CustomizedLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-4} fill="#8884d8" fontSize={10} textAnchor="middle">
      {value}件
    </text>
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">管理者ダッシュボード</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">総ユーザー数</h2>
          <p className="text-3xl font-bold text-blue-600">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">総申請数</h2>
          <p className="text-3xl font-bold text-green-600">{stats.totalApplications}</p>
          </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">承認済み申請</h2>
          <p className="text-3xl font-bold text-indigo-600">{stats.approvedApplications}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">審査中申請</h2>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingApplications}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">月別申請数</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value}件`} />
            <Tooltip formatter={(value) => `${value}件`} />
            <Legend />
            <Bar dataKey="applications" fill="#8884d8" label={<CustomizedLabel />} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">クイックアクション</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            新規補助金を追加
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            ユーザー管理
          </button>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
            申請レビュー
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;