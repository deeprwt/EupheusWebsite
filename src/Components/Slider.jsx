import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import bn1 from "../assets/banner/banner1.png";
import bn2 from "../assets/banner/banner2.png";
import bn3 from "../assets/banner/banner3.png";
import bn4 from "../assets/banner/banner4.png";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      cancelOnInteraction={false}
      interval={3000}
      play={true}
      className=" h-[100vh]"
    >
      <div className="" data-src={bn1} />
      <div data-src={bn2} />
      <div data-src={bn3} />
      <div data-src={bn4} />
    </AutoplaySlider>
  );
};

export default Slider;
