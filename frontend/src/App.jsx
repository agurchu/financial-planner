import React from "react";
import './App.css';
import { ModeProvider } from "./context/ModeContext.jsx";
import SignupPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage.jsx';
import TransactionsPage from './pages/TransactionsPage.jsx';
import Sidebar from './components/Sidebar.jsx';

import {Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

function App() {


  return (
 
    <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex h-screen overflow-hidden">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<DashboardPage />}/>
          <Route path="/transactions" element={<TransactionsPage />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/login" element={<LoginPage />}/>

        </Routes>
        </div>
    </div>
 
  )
}

export default App
