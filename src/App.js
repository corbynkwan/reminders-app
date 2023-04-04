import logo from './logo.svg';
import './App.css';
import NewReminder from './NewReminder'
import Reminder from './Reminder'
import React, { useState, useEffect } from 'react';

function App() {
  const [reminders, setReminders] = useState(JSON.parse(localStorage.getItem('reminders') || []));


  // Save reminders to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);
  return (
    <div className="main ">
      <h1 className="text-3xl font-bold text-blue-600">
        Reminders
      </h1>
      <div>
        {reminders.map((reminder, index) => {
          return (
            <div>
              <Reminder key={reminder+index}reminders={reminders}reminder={reminder}setReminders={setReminders}index={index}/>
            </div>
          )
          

        }
          )}
      </div>
      <NewReminder reminders={reminders} setReminders={setReminders}/>
      
    </div>
  );
}

export default App;
