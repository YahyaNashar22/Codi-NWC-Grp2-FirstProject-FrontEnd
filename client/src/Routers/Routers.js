import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/HeroSection/HeroSection";
import Hotels from "../components/Hotels/Hotels";
import Booking from "../components/Booking/BookingDetails";
import Rooms from "../pages/rooms/RoomsPage.js";
import Login from "../pages/log-in/Login.js";
import SignUp from "../pages/sign-up/SignUp.js";
import Contact from "../pages/contact/Contact.js";
import Navbar from "../layout/navbar/NavBar.js";
// import Reserve from '../components/Reserve.js'
// import SelectPerson from '../components/SelectPerson'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Header />}></Route>
        <Route path="/room" element={<Rooms />}></Route>
        <Route path="/hotel" element={<Hotels />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/login/signUp" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="info" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
