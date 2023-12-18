// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesDecade = ({ filters, onFilterChange }) => {
  return (
    <div className="Decade">
      {filters.map((filter) => (
        <div className="DecadeInput" key={filter}>
          <label></label>
          <input
            type="checkbox"
            value={filter}
            onChange={(e) => onFilterChange(filter, e.target.checked)}
          />
          {filter}
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxesDecade;
