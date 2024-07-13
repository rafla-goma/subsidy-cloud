import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SubsidyList from '../pages/SubsidyListPage';
import AutoPaymentModal from '../components/AutoPaymentModal';
import useSubsidies from '../hooks/useSubsidies';

const HomePage = () => {
  const [showAutoPaymentModal, setShowAutoPaymentModal] = useState(false);
  const navigate = useNavigate();
  const {
    popularSubsidies,
    newSubsidies,
    recommendedSubsidies,
    searchQuery,
    setSearchQuery,
    handleSearch,
  } = useSubsidies();

  const handleSubsidyClick = (subsidyId) => {
    navigate(`/subsidy/${subsidyId}`);
  };

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-pink-200 to-yellow-200 p-6 text-gray-900">
      <div className="mb-8"> {/* SearchBar を包む div に下部マージンを追加 */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </div>
      <SubsidyList
        popularSubsidies={popularSubsidies}
        newSubsidies={newSubsidies}
        recommendedSubsidies={recommendedSubsidies}
        onSubsidyClick={handleSubsidyClick}
      />
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAutoPaymentModal(true)}
          className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300 shadow-md"
        >
          自動引き落とし設定
        </button>
      </div>
      <AutoPaymentModal isOpen={showAutoPaymentModal} onClose={() => setShowAutoPaymentModal(false)} />
    </div>
  );
};

export default HomePage;