import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import React from "react";
import SingleJobScreen from "./Screens/SingleJobScreen";
import ResumeScreen from "./Screens/ResumeScreen";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/job/:jobId" element={<SingleJobScreen />} />
          <Route path="/upload-resume/:jobId" element={<ResumeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
