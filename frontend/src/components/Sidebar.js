import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaBell, FaBuilding, FaHeart, FaCalendarAlt, FaFileAlt, FaQuestionCircle,FaCommentAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar, isLoggedIn }) => {
  if (!isLoggedIn) {
    return null;
  }

  const menuItems = [
    { to: "/dashboard", icon: FaFileAlt, text: "ダッシュボード" },
    { to: "/forum", icon: FaCommentAlt, text: "フォーラム" },
    { to: "/calendar", icon: FaCalendarAlt, text: "カレンダー" },
    { to: "/favorites", icon: FaHeart, text: "お気に入り" },
    { to: "/applications", icon: FaFileAlt, text: "申請管理" },
    { to: "/faq", icon: FaQuestionCircle, text: "FAQ" },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0 w-64' : 'w-12'} transition-all duration-300 bg-gray-800 text-white z-40`}>
      <div className="flex items-center justify-between h-16 p-4 border-b border-gray-700">
        {isOpen && <h1 className="text-2xl font-bold">メニュー</h1>}
        <button onClick={toggleSidebar} className="text-white">
          <FaBars size={24} />
        </button>
      </div>
      {isOpen && (
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
                  <item.icon className="mr-3" size={20} />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
