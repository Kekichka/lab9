import React, { useContext } from 'react';
import { MONTHS } from '../shared/months';
import './style.css';
import CalendarContext from '../../context/calendar.context';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const MonthComponent = () => {
  const { currentDate, setCurrentDate, events } = useContext(CalendarContext);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysCount = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleDayClick = (day) => {
    const newDate = new Date(currentDate);
    newDate.setDate(day);
    setCurrentDate(newDate);
  };

  return (
    <div className='content-wrapper month-wrapper'>
      <div className='header'>{MONTHS[currentMonth]}</div>
      {WEEK_DAYS.map((dayName, index) => (
        <div key={index} className='day-name'>
          {dayName}
        </div>
      ))}
      {Array.from({ length: daysCount }, (_, i) => i + 1).map((day) => (
        <div
          key={day}
          onClick={() => handleDayClick(day)}
          className={`content-item day ${events[`${currentYear}-${currentMonth}-${day}`]?.length ? 'has-events' : ''}`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default MonthComponent;
