// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesDecade = ({ filters, onFilterChange }) => {
  return (
    <div className="DecadeWrap">
      {filters.map((filter, index) => (
        <div className="DecadeWrapInner">
          <div className="Decade" key={filter}>
            <input
              className="DecadeInput"
              id={`DecadeInput_${index}`}
              type="checkbox"
              value={filter}
              onChange={(e) => onFilterChange(filter, e.target.checked)}
            />{" "}
            <label
              className="DecadeLabel"
              htmlFor={`DecadeInput_${index}`}
            ></label>
            <span className="Param">{filter}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxesDecade;
