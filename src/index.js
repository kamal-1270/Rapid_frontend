import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18+
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SuccessPage from './pages/SuccessPage';

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 uses createRoot
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

