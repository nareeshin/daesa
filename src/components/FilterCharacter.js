import React from "react";

const FilterCharacter = ({ filters, onFilterChange }) => {
  return (
    <div className="CharacterWrap">
      {filters.map((filter, index) => (
        <div className="Character" key={filter}>
          <input
            className="CharacterInput"
            id={`CharacterInput_${index}`}
            type="checkbox"
            value={filter}
            onChange={(e) => onFilterChange(filter, e.target.checked)}
          />

          <label
            className="CharacterLabel"
            htmlFor={`CharacterInput_${index}`}
          ></label>
          <span className="Param">{filter}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterCharacter;
