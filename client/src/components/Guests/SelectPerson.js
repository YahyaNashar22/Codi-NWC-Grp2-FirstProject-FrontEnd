import React, { useState } from "react";
import style from "./SelectPerson.module.css";
import Select from '../Select/Select'

function SelectPerson({ setGuestsParent,setRoomsParent, setIsDoneParent,setIsCliked }) {
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);



  const sendDataToParent = () => {
    setGuestsParent(guests);
    setRoomsParent(rooms);
    setIsDoneParent(isDoneParent=>!isDoneParent);
    setIsCliked(isClicked=>!isClicked)
  };

  return (
    < section className={style.card}>
      <h3>Select</h3>
      <Select label='Guests' selected={guests} setSelected={setGuests}/>
      <Select label='Rooms'  selected={rooms}  setSelected={setRooms}/>
      <button
        className={style.DoneButton}
        onClick={sendDataToParent}
      >
        Done
      </button>

    </section>
  );
}


export default SelectPerson;