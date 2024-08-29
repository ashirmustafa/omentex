"use client";

// components/Slider.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slick Slider settings
const sliderSettings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  draggable: true,
  swipeToSlide: true,
  pauseOnHover: false,
};

const slides = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/300x200?text=Brand+1",
    alt: "Brand 1",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/300x200?text=Brand+2",
    alt: "Brand 2",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/300x200?text=Brand+3",
    alt: "Brand 3",
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/300x200?text=Brand+4",
    alt: "Brand 4",
  },
  {
    id: 5,
    imageUrl: "https://via.placeholder.com/300x200?text=Brand+5",
    alt: "Brand 5",
  },
  {
    id: 6,
    imageUrl: "https://via.placeholder.com/300x200?text=Brand+6",
    alt: "Brand 6",
  },
];

const CustomSlider: React.FC = () => {
  return (
    <div className="w-full">
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <img
              src={slide.imageUrl}
              alt={slide.alt}
              className="w-[150px] h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;