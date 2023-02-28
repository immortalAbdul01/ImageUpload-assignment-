import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './App.css'


import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Signup from './components/Signup'
import Login from './components/Login';
import ImageGallery from './components/Image';

function App() {


  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/sign"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/image"
          element={<ImageGallery />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
