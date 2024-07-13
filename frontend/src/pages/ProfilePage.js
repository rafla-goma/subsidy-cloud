import React, { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'テスト太郎',
    email: 'test@example.com',
    company: 'テスト株式会社',
    industry: 'IT',
    employeeCount: 50
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここでAPIを呼び出してプロフィールを更新する
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">プロフィール</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">名前</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">メールアドレス</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">会社名</label>
            <input
              type="text"
              name="company"
              value={user.company}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">業種</label>
            <input
              type="text"
              name="industry"
              value={user.industry}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">従業員数</label>
            <input
              type="number"
              name="employeeCount"
              value={user.employeeCount}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="flex space-x-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              保存
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              キャンセル
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <p><strong>名前:</strong> {user.name}</p>
          <p><strong>メールアドレス:</strong> {user.email}</p>
          <p><strong>会社名:</strong> {user.company}</p>
          <p><strong>業種:</strong> {user.industry}</p>
          <p><strong>従業員数:</strong> {user.employeeCount}</p>
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            編集
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;