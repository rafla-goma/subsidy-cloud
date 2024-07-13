import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, Heart, FileText, BarChart, Search, ArrowLeftRight, Star } from 'lucide-react';
import { FaBars, FaQuestionCircle } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { to: "/dashboard", icon: <BarChart size={20} />, text: "ダッシュボード" },
    { to: "/subsidies", icon: <Search size={20} />, text: "補助金を探す" },
    { to: "/compare", icon: <ArrowLeftRight size={20} />, text: "補助金比較" },
    { to: "/recommendations", icon: <Star size={20} />, text: "おすすめ補助金" },
    { to: "/applications", icon: <FileText size={20} />, text: "申請管理" },
    { to: "/favorites", icon: <Heart size={20} />, text: "お気に入り" },
    { to: "/calendar", icon: <Calendar size={20} />, text: "カレンダー" },
    { to: "/forum", icon: <MessageCircle size={20} />, text: "フォーラム" },
    { to: "/faq", icon: <FaQuestionCircle size={20} />, text: "FAQ" },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 bg-gray-800 text-white z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-12'} overflow-y-auto`}>
      <div className="flex items-center justify-between h-16 px-4">
        <button onClick={toggleSidebar} className="text-white">
          <FaBars size={24} />
        </button>
        {/* {isOpen && <h1 className="text-xl font-bold">メニュー</h1>} */}
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
                {item.icon}
                {isOpen && <span className="ml-3">{item.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;