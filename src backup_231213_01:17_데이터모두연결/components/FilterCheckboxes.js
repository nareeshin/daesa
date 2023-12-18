// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxes = ({ filters, onFilterChange }) => {
  return (
    <div>
      {filters.map((filter) => (
        <div key={filter}>
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

export default FilterCheckboxes;
