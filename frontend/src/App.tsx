import React from "react";
import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import SingleJobScreen from "./Screens/SingleJobScreen";
import ResumeScreen from "./Screens/ResumeScreen";
import PersonalDetailsScreen from "./Screens/PersonalDetailsScreen";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/job/:jobId" element={<SingleJobScreen />} />
          <Route path="/upload-resume/:jobId" element={<ResumeScreen />} />
          <Route path="/personal-details" element={<PersonalDetailsScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
