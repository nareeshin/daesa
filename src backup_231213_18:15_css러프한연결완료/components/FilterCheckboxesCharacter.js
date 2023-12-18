// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesCharacter = ({ filters, onFilterChange }) => {
  return (
    <div className="CharacterWrap">
      {filters.map((filter, index) => (
        <div className="Character" key={filter}>
          <input
            className="CharacterInput"
            id={`CharacterInput_${index}`}
            type="checkbox"
            value={filter}
            onChange={(e) => onFilterChange(filter, e.target.checked)}
          />
          {filter}
          <label
            className="CharacterLabel"
            htmlFor={`CharacterInput_${index}`}
          ></label>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxesCharacter;
