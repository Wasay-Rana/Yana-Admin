import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Analytics from './pages/analytics/Analytics';
import Chat from './pages/chat/Chat';
import Customers from './pages/customers/Customers';
import Dashboard from './pages/dashboard/Dashboard';
import Food from './pages/food/Food';
import Layout from './components/layout/Layout';
import LoginPage from './components/loginPage/LoginPage';
import Reviews from './pages/reviews/Reviews';
import SplashScreen from './components/splashScreen/SplashScreen';
import Vendor from './pages/vendor/Vendor';
import './global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
        <Route path="/customers" element={<PrivateRoute><Layout><Customers /></Layout></PrivateRoute>} />
        <Route path="/analytics" element={<PrivateRoute><Layout><Analytics /></Layout></PrivateRoute>} />
        <Route path="/reviews" element={<PrivateRoute><Layout><Reviews /></Layout></PrivateRoute>} />
        <Route path="/vendor" element={<PrivateRoute><Layout><Vendor /></Layout></PrivateRoute>} />
        <Route path="/food" element={<PrivateRoute><Layout><Food /></Layout></PrivateRoute>} />
        <Route path="/chat" element={<PrivateRoute><Layout><Chat /></Layout></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ children }) {
  const isAuthenticated = true; // Replace with actual authentication check
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
