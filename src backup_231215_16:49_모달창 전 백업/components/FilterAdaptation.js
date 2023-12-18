import React, { useState } from "react";

const FilterAdaptation = ({ filters, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter, checked) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters(
        selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      );
    }

    onFilterChange(filter, checked);
  };

  return (
    <div className="FilterAdaptation">
      <h3 className="subtitle">ADAPTATION</h3>

      <div className="carousel-container" id="containerAdaptation">
        <div id="carouselAdaptation" className="carousel">
          {filters.map((filter, index) => (
            <div
              className={`carousel-item ${
                selectedFilters.includes(filter) ? "selected" : ""
              }`}
              key={filter}
            >
              <label
                className={`AdaptationLabel ${
                  selectedFilters.includes(filter) ? "selected" : ""
                }`}
                htmlFor={`AdaptationInput${index}`}
              >
                <input
                  type="checkbox"
                  value={filter}
                  onChange={(e) => handleFilterChange(filter, e.target.checked)}
                  id={`AdaptationInput${index}`}
                />
                <span
                  style={{
                    color: selectedFilters.includes(filter)
                      ? "black"
                      : "inherit",
                  }}
                >
                  {filter}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterAdaptation;
