import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';




function Dashboard() {
  const [date, setDate] = useState(new Date());

return <div>(
    <div className='calendar'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );



  </div>;
}

export default Dashboard;
