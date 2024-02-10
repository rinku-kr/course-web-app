import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Courses from "./components/courses/Courses.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import ForgetPassword from "./components/auth/ForgetPassword.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import Contact from "./components/contact/Contact.jsx";
import Request from "./components/request/Request.jsx";
import About from "./components/about/About.jsx";
import Subscribe from "./components/payments/Subscribe.jsx";
import NotFound from "./components/layouts/notFound/NotFound.jsx";
import PaymentSuccess from "./components/payments/PaymentSuccess.jsx";
import PaymentFail from "./components/payments/PaymentFail.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/request" element={<Request />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
