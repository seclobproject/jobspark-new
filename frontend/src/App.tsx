import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import React from "react";
import SingleJobScreen from "./Screens/SingleJobScreen";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/job" element={<SingleJobScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
