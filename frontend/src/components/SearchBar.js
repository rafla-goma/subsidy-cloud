import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => (
  <section className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-semibold mb-6 text-indigo-800">補助金を探す</h2>
    <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-inner overflow-hidden">
      <input
        type="text"
        placeholder="キーワードを入力"
        className="flex-grow p-4 focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all">
        <Search size={24} />
      </button>
    </form>
  </section>
);

export default SearchBar;