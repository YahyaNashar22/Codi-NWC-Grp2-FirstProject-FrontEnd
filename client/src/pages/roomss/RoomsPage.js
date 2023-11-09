import React from "react";
import { useParams,useLocation } from "react-router-dom";
import Rooms from "../../components/Rooms/Rooms";
import Footer from "../../layouts/footer/Footer";

const RoomsPage = () => {
const {id}=useParams();
const location=useLocation();
const formData = location.state?.formData || {};
  return (
    <>
      <Rooms idHotel={id} formData={formData}/>
      <Footer />
    </>
  );
};

export default RoomsPage;
