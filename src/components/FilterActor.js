import React, { useState } from "react";

const FilterActor = ({ filters, onFilterChange }) => {
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
    <div className="FilterActor">
      <h3 className="subtitle">ACTOR</h3>

      <div className="carousel-container" id="containerActor">
        <div id="carouselActor" className="carousel">
          {filters.map((filter, index) => (
            <div
              className={`carousel-item ${
                selectedFilters.includes(filter) ? "selected" : ""
              }`}
              key={filter}
            >
              <label
                className={`ActorLabel ${
                  selectedFilters.includes(filter) ? "selected" : ""
                }`}
                htmlFor={`ActorInput${index}`}
              >
                <input
                  type="checkbox"
                  value={filter}
                  onChange={(e) => handleFilterChange(filter, e.target.checked)}
                  id={`ActorInput${index}`}
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

export default FilterActor;
