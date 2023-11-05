import React, { useState } from "react";
import style from "./SelectPerson.module.css";


function SelectPerson({ setGuestsParent,setRoomsParent, setIsDoneParent,setIsCliked }) {
  // const [isDone, setIsDone] = useState(false);
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



const Select = (props) => {

  const Increase = () => {
    props.setSelected(prev => prev + 1);
  };

  const Decrease = () => {
    props.setSelected(prev => {
      if (prev > 1) return prev - 1;
      else return prev
    });
  };

  return (
    <section className={style.selection}>
      <p>{props.label}</p>
      <div className={style.container}>
        <div className={`${(props.selected >1) ? style.counterButton : style.blur}`} onClick={Decrease}>
          -
        </div>
        <p className={style.counterValue}>{props.selected}</p>
        <div className={style.counterButton} onClick={Increase}>
          +
        </div>
      </div>
    </section>
  );
}

export default SelectPerson;