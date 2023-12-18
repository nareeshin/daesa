import React from "react";

const FilterKeyword = ({ filters, onFilterChange }) => {
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

          <label
            className="KeywordLabel"
            htmlFor={`KeywordInput${index}`}
          ></label>
          <span className="Param">{filter}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterKeyword;
