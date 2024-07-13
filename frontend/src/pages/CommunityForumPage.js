import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CommunityForumPage = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');

  useEffect(() => {
    // ここでフォーラムトピックを取得するAPIを呼び出す
    const mockTopics = [
      { id: 1, title: '創業補助金について質問です', author: 'user1', replies: 5, lastUpdate: '2023-05-20' },
      { id: 2, title: 'IT導入補助金の申請方法', author: 'user2', replies: 3, lastUpdate: '2023-05-19' },
      { id: 3, title: '補助金申請のコツを教えてください', author: 'user3', replies: 8, lastUpdate: '2023-05-18' },
    ];
    setTopics(mockTopics);
  }, []);

  const handleNewTopicSubmit = (e) => {
    e.preventDefault();
    if (newTopic.trim()) {
      const newTopicObj = {
        id: topics.length + 1,
        title: newTopic,
        author: 'currentUser', // 実際のアプリケーションでは、ログインユーザーの情報を使用
        replies: 0,
        lastUpdate: new Date().toISOString().split('T')[0]
      };
      setTopics([newTopicObj, ...topics]);
      setNewTopic('');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">コミュニティフォーラム</h1>
      
      <form onSubmit={handleNewTopicSubmit} className="space-y-4">
        <input
          type="text"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          placeholder="新しいトピックを作成"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          トピックを作成
        </button>
      </form>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">トピック</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">作成者</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">返信数</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最終更新</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {topics.map((topic) => (
              <tr key={topic.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/forum/topic/${topic.id}`} className="text-blue-600 hover:underline">
                    {topic.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{topic.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{topic.replies}</td>
                <td className="px-6 py-4 whitespace-nowrap">{topic.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunityForumPage;