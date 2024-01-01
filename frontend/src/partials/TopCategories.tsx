import React from "react";
import TopCatogoryIcon from "../Components/TopCatogoryIcon";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      autoplay: boolean;
      autoplaySpeed: number;
    };
  }>;
}

const TopCategories: React.FC = () => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Show 4 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 5, // Show 1 slide at a time on mobile
          autoplay: true, // Auto-scroll
          autoplaySpeed: 1800,
        },
      },
    ],
  };

  return (
    <div className="container lg:max-w-7xl mx-auto px-4 pt-8">
      {/* <div className="grid lg:grid-cols-8 gap-6">
      </div> */}
      <Slider {...settings}>
        <div className="p-2">
          <TopCatogoryIcon />
        </div>
        <div className="p-2">
          <TopCatogoryIcon />
        </div>
        <div className="p-2">
          <TopCatogoryIcon />
        </div>
        <div className="p-2">
          <TopCatogoryIcon />
        </div>
        <div className="p-2">
          <TopCatogoryIcon />
        </div>
        <div className="p-2">
          <TopCatogoryIcon />
        </div>
        <div className="p-2">
          <TopCatogoryIcon />
        </div>
        <div className="p-2">
          <TopCatogoryIcon />
        </div>
      </Slider>
    </div>
  );
};

export default TopCategories;
