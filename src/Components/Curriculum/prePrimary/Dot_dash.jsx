import React from 'react'
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/dotDash/6.png";
import book2 from "../../../assets/curriculum/dotDash/7.png";
import dotdash from "../../../assets/curriculum/dotDash/Curriculum Catalogue_2021-22_Page_13.jpg";
import flower from "../../../assets/curriculum/alphaFun/5.png";


const Dot_dash = ({sOpen}) => {
  return (
    <>
        <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <img src={dotdash} className="w-full h-auto" alt="" />
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
        <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-orange-400 py-2">
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Title</span>
            <span className="text-black font-semibold">Book 1</span>
            <span className="text-black font-semibold">Book 2</span>
            <span className="text-black font-semibold">Book 3</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Price</span>
            <span className="text-black font-semibold">230</span>
            <span className="text-black font-semibold">260</span>
            <span className="text-black font-semibold">260</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
          <span className="text-orange-500 font-semibold">DOT & DASH  </span>
          contains a variety of exercises that build a sound foundation
          for developing writing skills among the young learners. It takes the child
          through various stages of handwriting development. <br />
          The writing exercises will help the child to:
          <ul className="px-2 py-1 w-full rounded-md ">
            <li>
              <Circle className="!text-[0.5rem] " /> &nbsp;  develop eye-hand coordination and fine motor skills.

            </li>
            <li>
            <Circle className="!text-[0.5rem] " /> &nbsp;  be imaginative and creative.
            </li>
            <li>
            <Circle className="!text-[0.5rem] " /> &nbsp; be prepared for letter-writing.
            </li>
          </ul>
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
        <div className="flex flex-col sm:w-5/12 w-full">
            <img src={book1} className="w-full h-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-4/12 w-full">
            <img src={book2} className="w-full h-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-[30%] w-full">
        <span className="px-3 ml-3 py-1 bg-orange-300 rounded-t-lg w-fit">
            KEY FEATURES
          </span>

          <ul className="px-2 py-1 w-full rounded-md bg-orange-500 text-white">
            <li>
              <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b> Tracing Shapes </b> 
               Helps in learning  
               different 
              dimensions to 
                geometric and 
               curved shapes. 

            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Dot to Dot</b>
                        Guides the
            formation of a
            pattern and
            develops spatial
            intelligence.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Colouring</b>
                      Helps in motor skill
          building through
          artistic expression.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Pattern Writing</b>
            Helps in building
          tripod grasp and
          wrist movement
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
        <div className="flex flex-col items-center sm:w-1/2 w-full">
          <img src={flower} className="w-[40%] h-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-1/2 w-full">
          <span className="px-3 ml-6 py-1 bg-orange-500 rounded-t-lg w-fit">
          TITLES AVAILABLE FOR
          </span>

          <ul className="px-4 py-2 flex flex-col w-fit border-orange-500 border-2 gap-4 rounded-lg justify-center bg-orange-400 ">
            <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-orange-400 py-2">
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

export default Dot_dash