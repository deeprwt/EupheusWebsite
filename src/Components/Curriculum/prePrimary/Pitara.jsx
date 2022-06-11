import React from 'react'
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/pitara/10.png";
import pitara from "../../../assets/curriculum/pitara/Curriculum Catalogue_2021-22_Page_16.jpg";
import flower from "../../../assets/curriculum/alphaFun/5.png";

const Pitara = ({sOpen}) => {
  return (
    <>
     <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <img src={pitara} className="w-full h-auto" alt="" />
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
        <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#1ab1df] py-2">
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Title</span>
            <span className="text-black font-semibold">Book 1</span>
            <span className="text-black font-semibold">Book 2</span>
            <span className="text-black font-semibold">Book 3</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Price</span>
            <span className="text-black font-semibold">330</span>
            <span className="text-black font-semibold">370</span>
            <span className="text-black font-semibold">395</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
          <span className="text-[#0095a4] font-semibold">NUMBER MAX </span>
          equips children with sound numerical skills. It creates a
            readiness for mathematical operations, application of concepts to daily
            life situations and logical thinking. The approach and activities focus on
            building the following skills:
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
        <div className="flex flex-col sm:w-8/12 w-full">
            <img src={book1} className="w-full h-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-[30%] w-full">
        <span className="px-3 ml-3 py-1 bg-[#227880] rounded-t-lg w-fit">
            KEY FEATURES
          </span>

          <ul className="px-2 py-1 w-full rounded-md bg-[#1ab1df] text-white">
            <li>
              <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b> Finger Tracing </b> 
              Helps in learning
              number formation.

            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Counting Objects</b>
            Builds numerical skills.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Tracing and Colouring </b>
            Develops fine motor
                skills and preparedness
                for number writing
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Activities</b>
            Review of counting skills
            to build cognitive skills.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Writing Practice </b>
            Assists number
                    writing and promotes
                    independent writing.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Get Crafty  </b>
            Builds fine motor
            skills through artistic
            learning.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Review Sheet  </b>
            Helps in recognition,
                recall and reinforcement
                of the learnt concepts.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
        <div className="flex flex-col items-center sm:w-1/2 w-full">
          <img src={flower} className="w-[40%] h-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-1/2 w-full">
          <span className="px-3 ml-6 py-1 bg-[#0095a4] rounded-t-lg w-fit">
          TITLES AVAILABLE FOR
          </span>

          <ul className="px-4 py-2 flex flex-col w-fit border-[#0095a4] border-2 gap-4 rounded-lg justify-center bg-[#1ab1df] ">
            <div className="flex gap-4 rounded-md w-fit px-3 justify-center py-2">
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

export default Pitara