import React, { useState, useRef, useEffect } from 'react';


const Reminder = ({reminders,reminder,index,setReminders}) => {
    const [inputText, setInputText] = useState(reminder);
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setInputText(reminder)
      }, [reminder]);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            changeReminder()
        }
    }
    const handleInputChange = (event) => {
        if(event.target.value!=='')
            setInputText(event.target.value);
    }
    const timeout = (delay) => {
        return new Promise( res => setTimeout(res, delay) );
    }
    const handleOnChange = async (event) => {
        setChecked(true)
        await timeout(1000); //for 1 sec delay
        removeReminder()
        setChecked(false)
    }
    const handleOnBlur = (event) => {
        if(inputText == "") {
            removeReminder()
        } else {
            changeReminder()
        }
    }
    const removeReminder = () => {
        setReminders([
            ...reminders.slice(0, index), 
            ...reminders.slice(index + 1) 
          ])
    }
    const changeReminder = () => {
        setReminders([
            ...reminders.slice(0, index), 
            inputText, 
            ...reminders.slice(index + 1), 
          ])
    }
    return (
    <div onBlur={handleOnBlur}>
        <input type="checkbox" checked={checked}  onChange={handleOnChange}/>
        <input type="text" autoFocus value={inputText} onChange={handleInputChange} onKeyDown={handleKeyDown} />
    </div>
    );
};

export default Reminder;
