import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";

//componentes
import UserList from './components/User/UsersList';
import Navbar from './components/Navbar/Navbar';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Navbar />
    <div className="container my-4">
      <Routes>
        <Route exact path="/" element={<UserList />} />
        
        
      </Routes>
    </div>
  </BrowserRouter>
);

reportWebVitals();
