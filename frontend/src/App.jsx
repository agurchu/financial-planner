import React, { useEffect } from "react";
import './App.css';
import SignupPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />}/>
          <Route path="/login" element={<LoginPage />}/>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
