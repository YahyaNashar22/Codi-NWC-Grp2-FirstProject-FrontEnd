import React, { useRef } from "react";
import roomsModule from "./rooms.module.css";
import down from "../../assets/images/down.png";
import up from "../../assets/images/up.png";
import { useState, useEffect } from "react";
import axios from "axios";
import RoomCard from "../roomCard/RoomCard.js";

function Rooms({ idHotel, formData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [DefaultData, setDefaultData] = useState(false);
  // console.log(formData);



  const testing = (room) => {
    if (room.isBooked === false && room.Hotel.city === formData.position && room.maxpeople === formData.guests) {
      console.log("I AM IN")
      return true
    }
    else {
      console.log("I AM OUT")

      return false
    }
  }
  console.log(formData);



  //fetching Data 
  useEffect(() => {
    async function fetchData() {

      try {
        setIsLoading(true);
        if (!idHotel) {
          const response = await axios.get("http://localhost:8000/room");
          let rooms = response.data.dataRooms
          console.log("fetched rooms", rooms)
          setData(rooms);
          if (formData && formData.position !== '' && formData !== null) {
            //testing function that map over data to check if there are rooms accrding to the searchForm data
            console.log("conditions", formData)
            console.log("filtered rooms", rooms)
            setData((prev) => prev.filter(testing));
          }


        }
        else {
          const response = await axios.get(
            `http://localhost:8000/room/byHotel/${idHotel}`
          );
          setData(response.data.data.rooms);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [idHotel, DefaultData, formData]);



  const [active, setActive] = useState(false);
  const clickHandler = () => {
    setActive(!active);
  };


  let ink = roomsModule.open;
  let arr = down;
  if (active) {
    ink = roomsModule.open;
    arr = up;
  } else {
    ink = roomsModule.closed;
    arr = down;
  }



  //creating sorting ref
  const defaultSorting = useRef();
  const priceSorting = useRef();
  const rateSorting = useRef();

  const sorting = (reference) => {
    if (reference.current.textContent === "Default")
      setDefaultData(!DefaultData);

    else if (reference.current.textContent === "Price")
      setData(data.sort((a, b) => a.price - b.price));

    else if (reference.current.textContent === "Rate")
      setData(data.sort((a, b) => b.Hotel.rate - a.Hotel.rate));
  };


  return (
    <>
      <div className={roomsModule.wrapper}>
        <h1 className={roomsModule.header}>All Rooms Section</h1>
        <p className={roomsModule.subHeader}>Enjoy our luxurious getaways</p>
        <div className={roomsModule.filter} onClick={clickHandler}>
          <div className={roomsModule.upper}>
            <p className={roomsModule.sort}>Sort by</p>
            <span className={roomsModule.downarrow}>
              <img src={arr} className={roomsModule.downarr} alt="downarrow" />
            </span>
          </div>
          <div className={ink}>
            <ul className={roomsModule.list}>
              <li className={roomsModule.listItem}>
                <a
                  href="#"
                  className={roomsModule.menuItem}
                  ref={defaultSorting}
                  onClick={() => sorting(defaultSorting)}
                >
                  Default
                </a>
              </li>
              <li className={roomsModule.listItem}>
                <a
                  href="#"
                  className={roomsModule.menuItem}
                  ref={priceSorting}
                  onClick={() => sorting(priceSorting)}
                >
                  Price
                </a>
              </li>
              <li className={roomsModule.listItem}>
                <a
                  href="#"
                  className={roomsModule.menuItem}
                  ref={rateSorting}
                  onClick={() => sorting(rateSorting)}
                >
                  Rate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={roomsModule.gridView}>
          {!isLoading && data ? (
            data.map((room, index) => {
              return (
                <RoomCard
                  image={room.image}
                  address={room.address}
                  hotel={room.hotel}
                  price={room.price}
                  stars={room.Hotel.rate}
                  key={index}
                />
              );
            })
          ) : (
            <span className={roomsModule.loading}>loading....</span>)
          }
        </div>
      </div>
    </>
  );
}

export default Rooms;
