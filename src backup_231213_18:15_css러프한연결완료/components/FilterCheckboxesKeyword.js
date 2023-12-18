// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesKeyword = ({ filters, onFilterChange }) => {
  return (
    <div className="KeywordWrap">
      {filters.map((filter, index) => (
        <div className="Keyword" key={filter}>
          <span className="Scope">ON</span>
          <input
            className="KeywordInput"
            id={`KeywordInput${index}`}
            type="checkbox"
            value={filter}
            onChange={(e) => onFilterChange(filter, e.target.checked)}
          />
          {filter}
          <label
            className="Param KeywordLabel"
            htmlFor={`KeywordInput${index}`}
          ></label>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxesKeyword;
