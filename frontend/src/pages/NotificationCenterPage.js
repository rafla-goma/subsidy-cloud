import React, { useState, useEffect } from 'react';
import { Bell, CheckCircle } from 'lucide-react';

const NotificationCenterPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // ここで通知を取得するAPIを呼び出す
    const mockNotifications = [
      { id: 1, type: 'new_subsidy', message: '新しい補助金が追加されました: ITイノベーション支援金', isRead: false },
      { id: 2, type: 'deadline', message: '「中小企業成長支援補助金」の申請期限が1週間後です', isRead: false },
      { id: 3, type: 'status_update', message: '「グリーンテクノロジー補助金」の申請状況が更新されました', isRead: true },
    ];
    setNotifications(mockNotifications);
  }, []);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">通知センター</h1>
      <ul className="space-y-4">
        {notifications.map(notification => (
          <li key={notification.id} className={`bg-white p-4 rounded shadow flex items-start ${notification.isRead ? 'opacity-50' : ''}`}>
            <Bell className="mr-4 flex-shrink-0 text-blue-500" />
            <div className="flex-grow">
              <p className={notification.isRead ? 'text-gray-500' : 'font-semibold'}>{notification.message}</p>
              {!notification.isRead && (
                <button
                  onClick={() => handleMarkAsRead(notification.id)}
                  className="text-sm text-blue-500 hover:underline mt-2 flex items-center"
                >
                  <CheckCircle className="mr-1" size={16} />
                  既読にする
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenterPage;