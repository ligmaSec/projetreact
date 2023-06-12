import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/UI/Home";
import Desc from "./components/UI/Desc";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Desc />} />
        <Route path="*" element={<Home />}/>
  
      </Routes>
    </BrowserRouter>
  
    
    </>
  );
}

export default App;