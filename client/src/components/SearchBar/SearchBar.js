import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate} from "react-router-dom";
import SearchBarStyle from "../SearchBar/SearchBar.module.css";
import calendar from "../../assets/images/calendar.png";
import person from "../../assets/images/person.png";
import position from "../../assets/images/position.png";
import search from "../../assets/images/search.png";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import SelectPerson from "../Guests/SelectPerson";

function SearchBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [guestsParent, setGuestsParent] = useState(1);
  const [roomsParent, setRoomsParent] = useState(1);
  const [isDoneParent, setIsDoneParent] = useState(false);

  //call for useLocation() hook
  const navigate = useNavigate();

  //sending filter conditions to get Data
  const [formSearching, setFormSearching] = useState({
    position: '',
    checkInDate: '',
    checkOutDate: '',
    guests: null
  });

  //get nbr of guests
  useEffect(() => {
    setFormSearching(prevState => ({
      ...prevState,
      guests: guestsParent,
    }))
  }, [guestsParent])


  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormSearching(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  //send fromData to the roomsPage using useNavigate
  const searchRooms = (formSearching) => {
    console.log(formSearching);

    navigate('/room', { state:{formData: formSearching }})
  }

  const selectPeople = () => {
    setIsClicked(!isClicked);
    setIsDoneParent(true);
  };


  let date1 = useRef(null);
  let date2 = useRef(null);

  const CreateCalendar = (date, name) => {
    useEffect(() => {
      flatpickr(date.current, {
        allowInput: true,
        altFormat: "F j, Y",
        dateFormat: "d M Y",
        defaultDate: new Date(),
        clickOpens: true,
        onChange: [function (selectedDates, dateStr, instance) {
          // extract the selected date
          const selectedDate = selectedDates[0];

          // Update the state with the selected date
          setFormSearching(prevState => ({
            ...prevState,
            [name]: selectedDate,
          }));
        }]
      });
    }, [date, name]);
  };
  CreateCalendar(date1, 'checkInDate');
  CreateCalendar(date2, 'checkOutDate');

  return (
    <section className={`${SearchBarStyle.container}`}>
      <fieldset className={SearchBarStyle.section}>
        <img src={position} className={SearchBarStyle.icons} alt="position" />
        <label id='position' className={SearchBarStyle.text}>Location</label>
        <select
          onChange={handleChange}
          id="position"
          name="position"
          className={`${SearchBarStyle.Description} ${SearchBarStyle.Drop}`}
        >
          <option value="Beirut">Beirut</option>
          <option value="Tripoli">Tripoli</option>
          <option value="Jbeil">Jbeil</option>
          <option value="Saida">Saida</option>
        </select>
      </fieldset>

      <fieldset className={SearchBarStyle.section}>
        <img src={calendar} className={SearchBarStyle.icons} alt="calendar" />
        <label id='checkInDate' className={SearchBarStyle.text}>Check in</label>
        <input
          name='checkInDate'
          ref={date1}
          className={`${SearchBarStyle.Description} ${SearchBarStyle.calendar}`}
        />
      </fieldset>

      <fieldset className={`${SearchBarStyle.section}`}>
        <img src={calendar} className={SearchBarStyle.icons} alt="calendar" />
        <label id='checkOutDate' className={SearchBarStyle.text}>Check out</label>
        <input
          name='checkOutDate'
          ref={date2}
          className={`${SearchBarStyle.Description} ${SearchBarStyle.calendar}`}
        />
      </fieldset>

      <fieldset className={`${SearchBarStyle.section}`}>
        <img
          src={person}
          className={SearchBarStyle.icons}
          alt="person"
          onClick={selectPeople}
        />
        <label className={SearchBarStyle.text}>Rooms for</label>
        <span className={SearchBarStyle.Description} onClick={selectPeople}>
          {roomsParent} room, {guestsParent}guest{" "}
        </span>
        {isClicked && isDoneParent ? (
          <SelectPerson
            setGuestsParent={setGuestsParent}
            setRoomsParent={setRoomsParent}
            setIsDoneParent={setIsDoneParent}
            setIsCliked={setIsClicked}
            roomsParent={roomsParent}
            guestsParent={guestsParent}
          />
        ) : (
          ""
        )}
      </fieldset >
      <div onClick={() => searchRooms(formSearching)} className={SearchBarStyle.section}>
        <Link to="/room" >
          <img src={search} className={SearchBarStyle.icon} alt="search" />
          Search
        </Link>
      </div>
    </section>
  );
}

export default SearchBar;
