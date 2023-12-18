import React, { useState } from "react";

const FilterDirector = ({ filters, onFilterChange }) => {
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
    <div className="FilterDirector">
      <h3 className="subtitle">DIRECTOR</h3>

      <div className="carousel-container" id="containerDirector">
        <div id="carouselDirector" className="carousel">
          {filters.map((filter, index) => (
            <div
              className={`carousel-item ${
                selectedFilters.includes(filter) ? "selected" : ""
              }`}
              key={filter}
            >
              <label
                className={`DirectorLabel ${
                  selectedFilters.includes(filter) ? "selected" : ""
                }`}
                htmlFor={`DirectorInput${index}`}
              >
                <input
                  type="checkbox"
                  value={filter}
                  onChange={(e) => handleFilterChange(filter, e.target.checked)}
                  id={`DirectorInput${index}`}
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

export default FilterDirector;
