import React, { useState } from "react";

const FilterCheckboxesActor = ({ filters, onFilterChange }) => {
  const [top, setTop] = useState(0);

  const rotateForward = () => {
    animate(top, top - 8 * 30, setTop);
  };

  const rotateBackward = () => {
    animate(top, top + 8 * 30, setTop);
  };

  const animate = (start, end, setter) => {
    const duration = 500; // Adjust the duration as needed
    const startTime = Date.now();

    const animateInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= duration) {
        clearInterval(animateInterval);
        setter(end);
        return;
      }

      const progress = elapsed / duration;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic easing

      const currentPosition = start + easeProgress * (end - start);
      setter(currentPosition);
    }, 1000 / 60);
  };

  return (
    <div className="FilterActor">
      <h3 className="subtitle">ACTOR</h3>
      <button className="up" onClick={rotateForward}>
        ▲
      </button>
      <div className="carousel-container" id="containerActor">
        <div
          id="carouselActor"
          className="carousel"
          style={{ top: `${top}px` }}
        >
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
      <button className="down" onClick={rotateBackward}>
        ▼
      </button>
    </div>
  );
};

export default FilterCheckboxesActor;
