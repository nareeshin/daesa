// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesScenario = ({ filters, onFilterChange }) => {
  return (
    <div className="FilterScenario">
      <h3 className="subtitle">SCENARIO</h3>
      <button className="up" id="upButton">
        ▲
      </button>
      <div className="carousel-container" id="containerScenario">
        <div id="carouselScenario" className="carousel">
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

export default FilterCheckboxesScenario;
