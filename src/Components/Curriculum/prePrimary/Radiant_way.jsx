import React from 'react'

import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/radiantWay/11.png";
import book2 from "../../../assets/curriculum/radiantWay/12.png";
import book3 from "../../../assets/curriculum/radiantWay/13.png";
import book4 from "../../../assets/curriculum/radiantWay/14.png";
import numbermaxx from "../../../assets/curriculum/radiantWay/Curriculum Catalogue_2021-22_Page_17.jpg";
import flower from "../../../assets/curriculum/alphaFun/5.png";
const Radiant_way = ({sOpen}) => {
  return (
    <>
       <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <img src={numbermaxx} className="w-full h-auto" alt="" />
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
        <span className="text-[#76ad59] font-semibold">The Radiant Way Pre-Primer and Primer series  </span>
        has been specially prepared
        to meet the needs of the students who have been newly introduced to the
        study of English in the pre-primary classes of English-medium schools.
        While the series is linked with the Radiant Way series and the New Radiant
        Readers, it has been planned to be used as independent introductory English readers. 
        </span>
        <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#e1ec7a] py-2">
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Title</span>
            <span className="text-black font-semibold">Book 1</span>
            <span className="text-black font-semibold">Book 2</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Price</span>
            <span className="text-black font-semibold">155</span>
            <span className="text-black font-semibold">150</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
        <div className="flex flex-col sm:w-4/12 w-full">
            <img src={book1} className="w-full h-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-[60%] w-full">
        <span className="px-3 ml-3 py-1 bg-[#76ad59] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>

          <ul className="px-2 py-1 w-full rounded-md bg-[#e1ec7a] text-black">
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Teaching methodology perfect for learners whose mother
              tongue is not English
            </li>
            <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Combination of ‘Phonic’ and ‘Look-and-Say’ method of
                teaching
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-black" /> &nbsp; Most of the vocabulary words provided in the series have short vowel sounds
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-black" /> &nbsp; Attractive four-colour illustrations found on most of the pages of the series
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-black" /> &nbsp; Child-friendly layout to engage young readers
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-black" /> &nbsp; Variety of exercises provided for revision work
            </li>
            <li>
            <Circle className="!text-[0.5rem] text-black" /> &nbsp; Grade-appropriate vocabulary
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
        <div className="flex flex-col items-center sm:w-1/2 w-full">
          <img src={book2} className="w-[80%] h-auto" alt="" />
        </div>
        <div className="flex flex-col items-center sm:w-1/2 w-full">
           <img src={book3} className="w-[80%] h-auto" alt="" />
        </div>
        <div className="flex flex-col items-center sm:w-1/2 w-full">
           <img src={book4} className="w-[80%] h-auto" alt="" />
        </div>
      </div>
    </div> 
    </>
  )
}

export default Radiant_way