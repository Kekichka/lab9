import React, { useContext } from 'react';
import './style.css';
import CalendarContext from '../../context/calendar.context';
import { MONTHS } from '../shared/months';

const MonthsComponent = () => {
  const { setCurrentDate, currentDate, events } = useContext(CalendarContext);

  const hasEventsInMonth = (monthIndex) => {
    const key = `${currentDate.getFullYear()}-${monthIndex}-${currentDate.getDate()}`;
    const eventsForMonth = events[key] || [];
    return eventsForMonth.length > 0;
  };

  const handleClick = (index) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(index);
      return newDate;
    });
  };

  const renderMonth = (month, index) => (
    <div
      key={index}
      className={`month content-item ${hasEventsInMonth(index) ? 'has-events' : ''}`}
      onClick={() => handleClick(index)}
    >
      {month}
    </div>
  );

  const renderMonths = () => MONTHS.map(renderMonth);

  return (
    <div className='months-wrapper content-wrapper'>
      <div className='header'>{MONTHS[currentDate.getMonth()]}</div>
      {renderMonths()}
    </div>
  );
};

export default MonthsComponent;
