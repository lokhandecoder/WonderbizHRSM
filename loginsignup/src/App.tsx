import React from 'react';
import logo from './logo.svg';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import SignUpPage from './Pages/SignUpPage';
import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';

function App() {
  const isAuthenticated = false; // Set this to true if the user is authenticated

  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<SignIn />}></Route>
      <Route path='/signup' element={<SignUpPage />}></Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
