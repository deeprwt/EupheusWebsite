import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../assets/digital/stepAndLearn/2.png";
import img2 from "../../assets/digital/stepAndLearn/3.png";
import img3 from "../../assets/digital/stepAndLearn/4.png";

const Step = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Kinaesthetic Learning</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-purple-700">
            For Pre-Primary & Primary Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full font-semibold">
          Step & Learn powered by WizeFloor is an interactive floor that
          promotes collective and differentiated learning styles and needs
          through play and physical activity. A projector projects activities
          and learning games on to the floor from the ceiling. The children
          interact with the floor using their hands and feet allowing them to
          develop their cognitive as well as gross motor skills. Multiple
          children can play simultaneously.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col sm:w-5/12 w-full">
          <span className="px-3 ml-8 py-1 text-white font-semibold bg-purple-700 rounded-t-lg w-fit">
            BENEFITS
          </span>
          <img src={img2} className="w-full h-auto" alt="" />
        </div>
        <div className="bg-purple-700 flex flex-col rounded-lg sm:w-5/12 w-full gap-3 py-4">
          <h1 className="text-white flex w-full justify-center font-semibold">
            Multiple Learning Applications
          </h1>
          <div className="flex justify-around">
            <ul className="rounded-md flex flex-col gap-4 bg-purple-700">
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> QUIZ
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> STEPSTONE
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> BALLOONS
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> FLOOR KEYBOARD
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> THEME CARDS
              </li>
            </ul>
            <ul className="rounded-md bg-purple-700 gap-4 flex flex-col">
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> MEMORY
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> SENSORY
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> FOOTBALL
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> PUZZLE
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> PIANO
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src={img3} className="mt-[1rem]" alt="" />
    </div>
  );
};

export default Step;
