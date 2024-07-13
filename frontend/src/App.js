import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import HomePage from './pages/HomePage';
import DiagnosisPage from './pages/DiagnosisPage';
import SubsidyDetailPage from './pages/SubsidyDetailPage';
import SubsidyListPage from './pages/SubsidyListPage';
import CategorySubsidiesPage from './pages/CategorySubsidiesPage';
import ProfilePage from './pages/ProfilePage';
import NotificationCenterPage from './pages/NotificationCenterPage';
import ApplicationManagementPage from './pages/ApplicationManagementPage';
import FavoritesPage from './pages/FavoritesPage';
import SubsidyComparePage from './pages/SubsidyComparePage';
import FAQPage from './pages/FAQPage';
import DashboardPage from './pages/DashboardPage';
import SubsidyCalendarPage from './pages/SubsidyCalendarPage';
import RecommendationPage from './pages/RecommendationPage';
import CommunityForumPage from './pages/CommunityForumPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Sidebar from './components/Sidebar';

const AppContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidth = isSidebarOpen ? 256 : 48;

  const shouldShowHeader = !['/login', '/signup'].includes(location.pathname);

  return (
    <div className="flex min-h-screen">
      {isLoggedIn && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} />}
      <div className={`flex-1 flex flex-col transition-all duration-300`} style={{ marginLeft: isLoggedIn ? `${sidebarWidth}px` : '0' }}>
        {shouldShowHeader && (
          <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} sidebarWidth={isLoggedIn ? sidebarWidth : 0} />
        )}
        <main className={`flex-grow ${shouldShowHeader ? 'pt-16' : ''}`}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LandingPage />} />
            <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/diagnosis" element={<DiagnosisPage />} />
            <Route path="/subsidy/:id" element={isLoggedIn ? <SubsidyDetailPage /> : <Navigate to="/login" />} />
            <Route path="/subsidies" element={isLoggedIn ? <SubsidyListPage /> : <Navigate to="/login" />} />
            <Route path="/category/:categoryName" element={isLoggedIn ? <CategorySubsidiesPage /> : <Navigate to="/login" />} />
            <Route path="/compare" element={isLoggedIn ? <SubsidyComparePage /> : <Navigate to="/login" />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/forum" element={isLoggedIn ? <CommunityForumPage /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />} />
            <Route path="/notifications" element={isLoggedIn ? <NotificationCenterPage /> : <Navigate to="/login" />} />
            <Route path="/applications" element={isLoggedIn ? <ApplicationManagementPage /> : <Navigate to="/login" />} />
            <Route path="/favorites" element={isLoggedIn ? <FavoritesPage /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />} />
            <Route path="/calendar" element={isLoggedIn ? <SubsidyCalendarPage /> : <Navigate to="/login" />} />
            <Route path="/recommendations" element={isLoggedIn ? <RecommendationPage /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        {shouldShowHeader && (
          <footer className="bg-gray-800 text-white py-4 text-center">
            <p>&copy; 2024 補助金クラウド All rights reserved.</p>
          </footer>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
