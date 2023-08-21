import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import VerifiersPage from './pages/dashboard/VerifiersPage';
import DealsPage from './pages/dashboard/DealsPage';
import TransactionsPage from './pages/dashboard/TransactionsPage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerifiersPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
