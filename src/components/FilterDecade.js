import React from "react";

const FilterDecade = ({ filters, onFilterChange }) => {
  return (
    <div className="DecadeWrap">
      {filters.map((filter, index) => (
        <div key={filter} className="DecadeWrapInner">
          <div className="Decade">
            <label className="switch" htmlFor={`DecadeInput_${index}`}>
              <input
                className="DecadeInput"
                id={`DecadeInput_${index}`}
                type="checkbox"
                value={filter}
                onChange={(e) => onFilterChange(filter, e.target.checked)}
              />{" "}
              <div className="button">
                <div className="light"></div>
                <div className="dots"></div>
                <div className="characters"></div>
                <div className="shine"></div>
                <div className="shadow"></div>
              </div>
            </label>
            <span className="Param">{filter}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterDecade;
