// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesAdaptation = ({ filters, onFilterChange }) => {
  return (
    <div className="FilterAdaptation">
      <h3 className="subtitle">ADAPTATION</h3>
      <button className="up" id="upButton">
        ▲
      </button>
      <div className="carousel-container" id="containerAdaptation">
        <div id="carouselAdaptation" className="carousel">
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
      </div>
      <button className="down" id="downButton">
        ▼
      </button>
    </div>
  );
};

export default FilterCheckboxesAdaptation;
