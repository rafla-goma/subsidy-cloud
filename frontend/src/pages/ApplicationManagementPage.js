import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ApplicationManagementPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // ここで申請データを取得するAPIを呼び出す
    const mockApplications = [
      { id: 1, subsidyName: 'IT革新補助金', status: '審査中', submittedDate: '2023-05-15' },
      { id: 2, subsidyName: '環境技術支援金', status: '承認済み', submittedDate: '2023-04-20' },
      { id: 3, subsidyName: '中小企業成長支援金', status: '書類不備', submittedDate: '2023-05-01' },
    ];
    setApplications(mockApplications);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">申請管理</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">補助金名</th>
            <th className="py-3 px-4 text-left">申請日</th>
            <th className="py-3 px-4 text-left">状態</th>
            <th className="py-3 px-4 text-left">アクション</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id} className="border-t">
              <td className="py-3 px-4">{app.subsidyName}</td>
              <td className="py-3 px-4">{app.submittedDate}</td>
              <td className="py-3 px-4">{app.status}</td>
              <td className="py-3 px-4">
                <Link to={`/application/${app.id}`} className="text-blue-500 hover:underline">
                  詳細を見る
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationManagementPage;