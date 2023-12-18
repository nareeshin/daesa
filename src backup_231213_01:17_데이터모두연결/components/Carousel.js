import React, { useEffect, useRef } from "react";

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const prevButton = carousel.querySelector(".down");
    const nextButton = carousel.querySelector(".up");

    function rotateForward() {
      var carousel = Carousel.carousel,
        children = carousel.children,
        firstChild = children[0],
        lastChild = children[children.length - 1];
      carousel.insertBefore(lastChild, firstChild);
    }

    function rotateBackward() {
      var carousel = Carousel.carousel,
        children = carousel.children,
        firstChild = children[0],
        lastChild = children[children.length - 1];
      carousel.insertBefore(firstChild, lastChild.nextSibling);
    }

    function animate(begin, end, finalTask) {
      var carousel = Carousel.carousel,
        change = end - begin,
        duration = Carousel.duration,
        startTime = Date.now();
      carousel.style.top = begin + "px";
      var animateInterval = window.setInterval(function () {
        var t = Date.now() - startTime;
        if (t >= duration) {
          window.clearInterval(animateInterval);
          finalTask();
          return;
        }
        t /= duration / 2;
        var top =
          begin +
          (t < 1
            ? (change / 2) * Math.pow(t, 3)
            : (change / 2) * (Math.pow(t - 2, 3) + 2));
        carousel.style.top = top + "px";
      }, 1000 / 60);
    }

    prevButton.onclick = function () {
      rotateForward();
      animate(-Carousel.rowHeight, 0, function () {});
    };

    nextButton.onclick = function () {
      animate(0, -Carousel.rowHeight, function () {
        rotateBackward();
        carousel.style.top = "0";
      });
    };
  }, []);

  return (
    <div className="carouselWrapper container">
      <ul className="carousel selectorContainer" ref={carouselRef}>
        {items.map((item) => (
          <li className="selectorItem" key={item.key} data-id={item.key}>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
