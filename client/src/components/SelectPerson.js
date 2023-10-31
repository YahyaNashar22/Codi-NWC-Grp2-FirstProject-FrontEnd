import React, { useState } from 'react'
import SelectPersonStyle from '../style/SelectPerson.module.css'


function SelectPerson({ counterParent, setCounterParent,setIsDoneParent }) {
    const [counter, setCounter] = useState(0);
    const[isDone,setIsDone]=useState(false);

    const Increase = () => {
        setCounter(prev => prev + 1);
    }

    const Decrease = () => {
        setCounter(prev => prev - 1);
    }

    const sendDataToParent = () => {
        setCounterParent(counter);
        setIsDoneParent((done)=>!done);
    }

    return (
        <div className={SelectPersonStyle.card}>
            <h3>Room</h3>
            <div className={SelectPersonStyle.selection}>
                <p>guests</p>
                <div className={SelectPersonStyle.container}>
                    <div className={SelectPersonStyle.counterButton} onClick={Decrease}>-</div>
                    <p className={SelectPersonStyle.counterValue}>{counter}</p>
                    <div className={SelectPersonStyle.counterButton} onClick={Increase}>+</div>
                </div>
            </div>
            <button className={SelectPersonStyle.DoneButton} onClick={sendDataToParent}>Done</button>
        </div>
    )
}

export default SelectPerson;