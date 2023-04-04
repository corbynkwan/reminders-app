import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const NewReminder = ({reminders,setReminders}) => {
    const handleClick = () => {
        setReminders([...reminders,''])
      };
    

    return (
        <div className="new-reminder-container bg-slate-100 text-blue-600" onClick={handleClick}> 
            <FontAwesomeIcon icon={faPlus} />
            <h1 className="inline">New Reminder</h1>
        </div>
    );
};

export default NewReminder;
