import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBell, FaSignOutAlt, FaBuilding, FaSignInAlt, FaUserPlus, FaQuestionCircle } from 'react-icons/fa';

const Header = ({ isLoggedIn, onLogout, sidebarWidth }) => {
  return (
    <header className="bg-blue-600 text-white p-4 fixed top-0 right-0 z-50 h-16 transition-all duration-300" style={{ left: `${sidebarWidth}px` }}>
      <div className="flex items-center justify-between h-full">
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold">補助金クラウド</Link>
        </div>
        <div className="ml-auto">
          <nav>
            <ul className="flex space-x-4">
              {isLoggedIn ? (
                <>
                  <li>
                    <button onClick={onLogout} className="flex items-center hover:text-blue-200">
                      <FaSignOutAlt className="mr-1" /> ログアウト
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="flex items-center hover:text-blue-200">
                      <FaSignInAlt className="mr-1" /> ログイン
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="flex items-center hover:text-blue-200">
                      <FaUserPlus className="mr-1" /> アカウント作成
                    </Link>
                  </li>
                  <li>
                    <Link to="/diagnosis" className="flex items-center hover:text-blue-200">
                      <FaBuilding className="mr-1" /> 企業診断
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/faq" className="flex items-center hover:text-blue-200">
                  <FaQuestionCircle className="mr-1" /> FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;