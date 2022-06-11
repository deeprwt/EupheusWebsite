import React from 'react'
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/splash/9.png";
import splash from "../../../assets/curriculum/splash/Curriculum Catalogue_2021-22_Page_15.jpg";
import flower from "../../../assets/curriculum/alphaFun/5.png";

const Splash = ({sOpen}) => {
  return (
    <>
      <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <img src={splash} className="w-full h-auto" alt="" />
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
        The Early Childhood Learning Programme based on Integrated and
        Experiential Learning promotes creative thinking in young learners. It is
        designed by experienced teachers adhering to the elements of Multiple
        Intelligences and Bloom's Taxonomy. Our activity-based books and
        notebooks give children the opportunity to explore, understand, and enjoy
        learning. They follow an interactive approach and aim to build learner
        independence right from an early age.
        </span>
        <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#a25db7] py-2">
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Title</span>
            <span className="text-black font-semibold">Book 1</span>
            <span className="text-black font-semibold">Book 2</span>
            <span className="text-black font-semibold">Book 3</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Price</span>
            <span className="text-black font-semibold">300</span>
            <span className="text-black font-semibold">320</span>
            <span className="text-black font-semibold">355</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
          <span className="text-[#87459c] font-semibold">SPLASH </span>
          makes children conversant with concepts and ideas pertaining to
        awareness about the environment. It sets ground to build on observation,
        sequential thinking, and socio-emotional attitudes. The series assists
        learners to discover their surroundings and develop their cognitive
        capacity. The approach and activities focus on building the following skills:
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
        <div className="flex flex-col sm:w-8/12 w-full">
            <img src={book1} className="w-full h-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-[30%] w-full">
        <span className="px-3 ml-3 py-1 bg-[#87459c] rounded-t-lg w-fit">
            KEY FEATURES
          </span>

          <ul className="px-2 py-1 w-full rounded-md bg-[#a25db7] text-white">
            <li>
              <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b> Object Identification and Association </b> 
              Develops ability to
                recognise, name and
                recall concepts,
                ideas and objects.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Creative Appreciation</b>
            Builds ability to
                think creatively
                and express.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Independent Thinking and Problem Solving </b>
            Interesting child-friendly
            activities that enhance
            higher order thinking
            skills (HOTS).

            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Visual Memory</b>
            Tasks that develop the
                ability to distinguish
                between objects,
                pictures and physical
                characteristics.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
        <div className="flex flex-col items-center sm:w-1/2 w-full">
          <img src={flower} className="w-[40%] h-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-1/2 w-full">
          <span className="px-3 ml-6 py-1 bg-[#87459c] rounded-t-lg w-fit">
          TITLES AVAILABLE FOR
          </span>

          <ul className="px-4 py-2 flex flex-col w-fit border-[#87459c] border-2 gap-4 rounded-lg justify-center bg-[#a25db7] ">
            <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#a25db7] py-2">
                <div className="flex flex-col gap-2">
                    <span className="text-white font-semibold">Age 2+ <br />
                        Level-1</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-white font-semibold">Age 3+ <br />
                        Level-2</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-white font-semibold">Age 4+ <br />
                        Level-3</span>
                </div>
            </div>
          </ul>
        </div>
       
      </div>
    </div> 

    </>
  )
}

export default Splash