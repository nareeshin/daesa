// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesKeyword = ({ filters, onFilterChange }) => {
  return (
    <div className="Keywords">
      {filters.map((filter) => (
        <div className="Keyword" key={filter}>
          <span className="Scope">ON</span>
          <input
            type="checkbox"
            className="KeywordInput"
            value={filter}
            onChange={(e) => onFilterChange(filter, e.target.checked)}
          />
          {filter}
          <label className="Param"></label>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxesKeyword;
