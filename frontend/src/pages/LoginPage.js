import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaBuilding, FaQuestionCircle } from 'react-icons/fa';

const LoginPage = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ログイン:', formData);
    setIsLoggedIn(true);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-purple-800 flex flex-col">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">補助金クラウド</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/login" className="flex items-center hover:text-gray-300">
                  <FaSignInAlt className="mr-1" /> ログイン
                </Link>
              </li>
              <li>
                <Link to="/signup" className="flex items-center hover:text-gray-300">
                  <FaUserPlus className="mr-1" /> アカウント作成
                </Link>
              </li>
              <li>
                <Link to="/diagnosis" className="flex items-center hover:text-gray-300">
                  <FaBuilding className="mr-1" /> 企業診断
                </Link>
              </li>
              <li>
                <Link to="/faq" className="flex items-center hover:text-gray-300">
                  <FaQuestionCircle className="mr-1" /> FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">ログイン</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                パスワード
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                ログイン
              </button>
              <Link to="/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                アカウント作成
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;