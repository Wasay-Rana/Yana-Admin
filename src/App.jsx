import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Analytics from './pages/analytics/Analytics';
import Chat from './pages/chat/Chat';
import Customers from './pages/customers/Customers';
import ClientDetailsForm from './components/clientDetailsForm/ClientDetailsForm';
import CustomerDetailedInfo from './components/customerDetailedInfo/CustomerDetailedInfo';
import Dashboard from './pages/dashboard/Dashboard';
import Meals from './pages/meal/Meals';
import Layout from './components/layout/Layout';
import LoginPage from './components/loginPage/LoginPage';
import Order from './pages/order/Order';
import Reviews from './pages/reviews/Reviews';
import SplashScreen from './components/splashScreen/SplashScreen';
import Vendor from './pages/vendor/Vendor';
import './global.css';
import CredsTable from './components/generateCredentials/CredsTable';
import Participants from './pages/customers/Participants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><Layout><Order /></Layout></PrivateRoute>} />
        <Route path="/customers" element={<PrivateRoute><Layout><Customers /></Layout></PrivateRoute>} />
        <Route path="/customers" element={<PrivateRoute><Layout><Customers /></Layout></PrivateRoute>} />
        <Route path="/participants" element={<PrivateRoute><Layout><Participants /></Layout></PrivateRoute>} />
        <Route path="/customers/client-details" element={<PrivateRoute><Layout><ClientDetailsForm /></Layout></PrivateRoute>} />
        <Route path="/customers/detailed-info" element={<PrivateRoute><Layout><CustomerDetailedInfo /></Layout></PrivateRoute>} />

        <Route path="/meals" element={<PrivateRoute><Layout><Meals /></Layout></PrivateRoute>} />
        <Route path="/vendors" element={<PrivateRoute><Layout><Vendor /></Layout></PrivateRoute>} />
        <Route path="/analytics" element={<PrivateRoute><Layout><Analytics /></Layout></PrivateRoute>} />
        <Route path="/reviews" element={<PrivateRoute><Layout><Reviews /></Layout></PrivateRoute>} />
        <Route path="/chat" element={<PrivateRoute><Layout><Chat /></Layout></PrivateRoute>} />
        <Route path="/customer" element={<PrivateRoute><Layout><Chat /></Layout></PrivateRoute>} />
        <Route path="/creds" element={<PrivateRoute><Layout><Chat /></Layout></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ children }) {
  const isAuthenticated = true; // Replace with actual authentication check
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
