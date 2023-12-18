// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesSource = ({ filters, onFilterChange }) => {
  return (
    <div className="FilterSource">
      <h3 className="subtitle">SOURCE</h3>
      <button className="up" id="upButton">
        ▲
      </button>
      <div className="carousel-container" id="containerSource">
        <div id="carouselSource" className="carousel">
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

export default FilterCheckboxesSource;
