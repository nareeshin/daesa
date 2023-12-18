import React, { useState } from "react";

const FilterScenario = ({ filters, onFilterChange }) => {
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
    <div className="FilterScenario">
      <h3 className="subtitle">SCENARIO</h3>

      <div className="carousel-container" id="containerScenario">
        <div id="carouselScenario" className="carousel">
          {filters.map((filter, index) => (
            <div
              className={`carousel-item ${
                selectedFilters.includes(filter) ? "selected" : ""
              }`}
              key={filter}
            >
              <label
                className={`ScenarioLabel ${
                  selectedFilters.includes(filter) ? "selected" : ""
                }`}
                htmlFor={`ScenarioInput${index}`}
              >
                <input
                  type="checkbox"
                  value={filter}
                  onChange={(e) => handleFilterChange(filter, e.target.checked)}
                  id={`ScenarioInput${index}`}
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

export default FilterScenario;
