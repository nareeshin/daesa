// src/components/FilterCheckboxes.js
import React from "react";

const FilterCheckboxesActor = ({ filters, onFilterChange }) => {
  return (
    <div className="FilterActor">
      <h3 className="subtitle">ACTOR</h3>

      <div className="carousel-container" id="containerActor">
        <div id="carouselActor" className="carousel">
          {filters.map((filter) => (
            <div className="carousel-item" key={filter}>
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
    </div>
  );
};

export default FilterCheckboxesActor;
