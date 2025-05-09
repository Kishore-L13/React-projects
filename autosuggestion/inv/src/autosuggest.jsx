import React, { useState } from "react";

const AutoSuggestDropdown = () => {
  const data = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" }
    { id: 5, name: "Pineapple" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setActiveIndex(-1); // Reset selection

    if (value) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSelect = (name) => {
    setInputValue(name);
    setFilteredSuggestions([]);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(filteredSuggestions[activeIndex].name);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
      {filteredSuggestions.length > 0 && (
        <ul style={{ border: "1px solid #ccc", padding: 0, margin: 0 }}>
          {filteredSuggestions.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item.name)}
              style={{
                listStyle: "none",
                padding: "8px",
                cursor: "pointer",
                backgroundColor: activeIndex === index ? "#ddd" : "#f9f9f9",
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggestDropdown;
