import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardHotel from "./CardHotel";
import axios from "axios";
import hotelsStyle from "./Hotels.module.css";
import loading from "../../assets/images/tt.gif";

const Hotels = () => {
  const [hotelData, setHotelData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsloading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_MY_API}/hotel`
        );
        if (response) {
          setHotelData(response.data.data);
          // setIsloading(false)
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    }
    fetchData();
  }, []);

  //  let hotels = hotelData.map((hotel,index) => <CardHotel data={hotel} key={index} />);
  return (
    <div className={hotelsStyle.container}>
      <h1>Popular Hotels</h1>
      <p className={hotelsStyle.slogan}>
        Discover the epitome of luxury. Here are our hotels.
      </p>
      <div className={hotelsStyle.Hotels}>
        {!isLoading && hotelData ? (
          hotelData.map((hotel, index) => {
            return <CardHotel data={hotel} key={index} />;
          })
        ) : (
          <span className={hotelsStyle.loading}>
            <img
              src={loading}
              style={{
                width: "60%",
                height: "60%",
                scale: "1",
              }}
              alt="loading"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default Hotels;
