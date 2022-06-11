import React from 'react'
import { Circle } from "@mui/icons-material";
import img1 from "../../assets/digital/stepAndLearn/2.png";
import img2 from "../../assets/digital/stepAndLearn/3.png";
import img3 from "../../assets/digital/stepAndLearn/4.png";

const Primo = ({sOpen}) => {
  return (
    <>
        <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Coding Program</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-[#844290]">
          For Pre-Primary to Primary Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full font-semibold">
        <span className="text-[#844290] font-semibold"><b>Cubetto: Screenless coding toy for girls and boys </b></span>
                    Cubetto is a friendly wooden robot that will teach your child
            the basics of computer programming through adventure and
            hands-on play. The learning programme is Montessori-aligned
            and LOGO turtle-inspired.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col sm:w-6/12 w-full">
          
         
          <span className="sm:w-3/5 w-full font-semibold">
        <span className="text-[#844290] font-semibold"><b>Control Board </b></span> <br />
                    Place the blocks on the board to tell
            Cubetto where to go. Hit the blue
            button and Cubetto executes your
            very first program.
        </span>
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
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Coding Program</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-[#844290]">
          For Pre-Primary to Primary Levels
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4 sm:w-[40%] w-full">
        <span className="font-semibold">
        <span className="text-[#844290] font-semibold"><b>Control Board </b></span> <br />
                    Place the blocks on the board to tell
            Cubetto where to go. Hit the blue
            button and Cubetto executes your
            very first program.
        </span>
        </div>
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Coding Program</span>
          <img src={img1} className="w-full h-auto" alt="" />
            <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-[#844290]">
            For Pre-Primary to Primary Levels
            </h1>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center bg-[#844290]">
      <h1 className="text-white font-semibold px-3 rounded-md py-1 m-3 ">
      Why should kids learn coding and computational thinking?
          </h1>
      </div>
      <img src={img3} className="mt-[1rem]" alt="" />
    </div>
    </>
  )
}

export default Primo