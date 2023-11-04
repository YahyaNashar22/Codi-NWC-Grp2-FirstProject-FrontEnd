import React from "react";
import Rooms from "../../components/Rooms/Rooms.js";
import Footer from "../../layout/footer/Footer.js";
import NavBar from "../../layout/navbar/NavBar.js";
const RoomsPage = () => {
  return (
    <>
      <NavBar />
      <Rooms />
      <Footer />
    </>
  );
};

export default RoomsPage;
