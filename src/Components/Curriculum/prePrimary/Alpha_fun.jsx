import React from 'react'
import { Circle } from "@mui/icons-material";
import book from "../../../assets/curriculum/alphaFun/5.png";
import alphafun from "../../../assets/curriculum/alphaFun/Curriculum Catalogue_2021-22_Page_12.jpg";
import group from "../../../assets/curriculum/alphaFun/4.png";


const Alpha_fun = ({sOpen}) => {
  return (
    <>
       <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <img src={alphafun} className="w-full h-auto" alt="" />
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
           The Early Childhood Learning Programme based on Integrated and
            Experiential Learning promotes creative thinking in young learners. It
            is designed by experienced teachers and adheres to the elements of
            Multiple Intelligences and Bloom's Taxonomy. Our activity-based books
            and notebooks give children the opportunity to explore, understand, and
            enjoy learning. They follow an interactive approach and aim to build the
            learner's independence from an early age.
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
            <span className="text-black font-semibold">330</span>
            <span className="text-black font-semibold">370</span>
            <span className="text-black font-semibold">395</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
          <span className="text-orange-500 font-semibold">ALPHA FUN </span>
                incorporates a combination of phonics and sight
        word reading to ensure language development in early years.
        The approach and activities focus on building the following skills:
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
        <div className="flex flex-col sm:w-8/12 w-full">
        <img src={group} className="w-full h-auto" alt="" />

        </div>
        <div className="flex flex-col sm:w-[30%] w-full">
        <span className="px-3 ml-3 py-1 bg-orange-300 rounded-t-lg w-fit">
            KEY FEATURES
          </span>

          <ul className="px-2 py-1 w-full rounded-md bg-orange-500 text-white">
            <li>
              <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b> Revision Sheet </b>
                            Recapitulation of
                            concepts covered
                            in the previous class.

            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Word building,</b>
                    phonetic practice
                    of CVC words, and
                    learning picture-word
                    association.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Word Wall</b>
                                Helps to recall the
                    vowels sound and
                    usage.
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Reading</b>
                            Helps in reading
                by blending the
                sounds.
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-white" /> &nbsp; <b>Grammar Pages</b>
                                Teaches useful
                    topics of grammar
                    through child-friendly
                    activities.
            </li>

          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
        <div className="flex flex-col items-center sm:w-1/2 w-full">
          <img src={book} className="w-[40%] h-auto" alt="" />
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

export default Alpha_fun