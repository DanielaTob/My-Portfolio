import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App'
import Home from './views/Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index="/Home" element={<Home/>}/>
      </Route> 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
