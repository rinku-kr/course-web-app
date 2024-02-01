import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Courses from "./components/courses/Courses.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";
import Login from "./components/auth/Login.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
