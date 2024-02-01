import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Courses from "./components/courses/Courses.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
