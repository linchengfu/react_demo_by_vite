import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import UploadFile from './pages/upload';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="upload" element={<UploadFile />} />
      </Routes>
    </div>
  );
}

export default App;
