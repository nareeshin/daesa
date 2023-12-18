import React, { useState } from "react";

const FilterSource = ({ filters, onFilterChange }) => {
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
    <div className="FilterSource">
      <h3 className="subtitle">SOURCE</h3>

      <div className="carousel-container" id="containerSource">
        <div id="carouselSource" className="carousel">
          {filters.map((filter, index) => (
            <div
              className={`carousel-item ${
                selectedFilters.includes(filter) ? "selected" : ""
              }`}
              key={filter}
            >
              <label
                className={`SourceLabel ${
                  selectedFilters.includes(filter) ? "selected" : ""
                }`}
                htmlFor={`SourceInput${index}`}
              >
                <input
                  type="checkbox"
                  value={filter}
                  onChange={(e) => handleFilterChange(filter, e.target.checked)}
                  id={`SourceInput${index}`}
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

export default FilterSource;
