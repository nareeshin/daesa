// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesCharacter = ({ filters, onFilterChange }) => {
  return (
    <div className="Characters">
      {filters.map((filter) => (
        <div className="CharacterInput" key={filter}>
          <label>
            <input
              type="checkbox"
              value={filter}
              onChange={(e) => onFilterChange(filter, e.target.checked)}
            />
            {filter}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxesCharacter;
