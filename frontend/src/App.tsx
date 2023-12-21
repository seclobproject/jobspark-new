import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
