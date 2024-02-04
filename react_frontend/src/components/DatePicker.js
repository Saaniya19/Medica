import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateOfBirthInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      placeholderText="Select date of birth"
      dateFormat="dd/MM/yyyy"
      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={15}
      dropdownMode="select"
    />
  );
};