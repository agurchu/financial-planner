import React, { useEffect } from "react";
import './App.css';
import SignupPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout.jsx'
import {Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
    
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/login" element={<LoginPage />}/>

        </Routes>
    
    </>
  )
}

export default App
