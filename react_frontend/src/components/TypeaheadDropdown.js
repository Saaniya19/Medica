import React, { useState } from 'react';

export function TypeAheadDropdown({ options, onSelect }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Filter options based on user input
    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setFilteredOptions([]);
    onSelect(option); // Pass selected option back to parent component
  };

  return (
    <div>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="text-3xl flex-auto self-start mt-2 py-3 justify-between items-start px-8 max-w-full text-left pl- w-[1000px] border-white max-md:flex-wrap max-md:px-5 max-md:mt-10"
            placeholder="Type medication name."
        />
        <ul>
            {filteredOptions.map((option, index) => (
                <li key={index} onClick={() => handleOptionSelect(option)}>{option}</li>
            ))}
        </ul>
    </div>
  );
};

export default TypeAheadDropdown;