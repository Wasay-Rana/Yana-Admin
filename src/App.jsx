import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'; // Import the new Layout component
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Analytics from './pages/Analytics';
import Reviews from './pages/Reviews';
import Vendor from './pages/Vendor';
import Food from './pages/Food';
import Chat from './pages/Chat';
import SplashScreen from './components/SplashScreen';
import LoginPage from './components/LoginPage';
import './styles/global.css';

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
  // Add your authentication logic here
  const isAuthenticated = true; // Replace with actual authentication check
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
