import "./Carousel.css";
import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  // Function to go to the next slide
  const nextSlide = () => {
    if (!autoplayPaused) {
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (!autoplayPaused) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      setCurrentIndex(prevIndex);
    }
  };

  // Auto-play the carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change slide every 7 seconds

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Pause autoplay on mouse enter
  const handleMouseEnter = () => {
    setAutoplayPaused(true);
  };

  // Resume autoplay on mouse leave
  const handleMouseLeave = () => {
    setAutoplayPaused(false);
  };

  return (
    <div
      className="mb-3 carousel_border rounded-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel d-flex">
        <button
          className="position-absolute z-3 prev_icon d-none "
          onClick={prevSlide}
        >
          &#60;
        </button>
        <div className="carousel-content rounded-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <button
          className="position-absolute z-2 next_icon d-none"
          onClick={nextSlide}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
