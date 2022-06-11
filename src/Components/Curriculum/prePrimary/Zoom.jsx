import React from "react";
import { Circle } from "@mui/icons-material";
import book from "../../../assets/curriculum/zoom/book.png";
import zoom from "../../../assets/curriculum/zoom/zoom.png";
import img1 from "../../../assets/curriculum/zoom/1.png";
import img2 from "../../../assets/curriculum/zoom/2.png";

const Zoom = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <img src={zoom} className="w-full h-auto" alt="" />
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
          <span className="text-orange-500 font-semibold">Zoom!</span> is a
          three-year integrated Early Years Education series for the
          foundational levels in the school curriculum. The series caters to the
          age group of 3 to 6 years for Preschool 1, 2, 3 grades. It amalgamates
          the essence of Montessori education with the recommendations of the
          National Education Policy, 2020, for the linguistic, motor, and
          cognitive milestones of the early years of a child’s life. The series
          consists of three kits containing books and learning materials, an
          extensively planned Teachers’ Manual, a robotic coding game, and an
          app for learning at home.
        </span>
        <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-orange-400 py-2">
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Title</span>
            <span className="text-black font-semibold">Preschool 1</span>
            <span className="text-black font-semibold">Preschool 2</span>
            <span className="text-black font-semibold">Preschool 3</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Price</span>
            <span className="text-black font-semibold">1430</span>
            <span className="text-black font-semibold">1430</span>
            <span className="text-black font-semibold">1430</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
        <div className="flex flex-col sm:w-8/12 w-full">
          <span className="px-3 ml-3 py-1 bg-orange-500 rounded-t-lg w-fit">
            KEY FEATURES
          </span>

          <ul className="px-2 py-1 w-full rounded-md bg-orange-200">
            <li>
              <Circle className="!text-[0.5rem]" /> Amalgamation of flexible
              approach to Montessori ideology and 21st-century skills
            </li>
            <li>
              <Circle className="!text-[0.5rem]" /> Language acquisition is
              guided through phonetics and interlinked curriculum
            </li>
            <li>
              <Circle className="!text-[0.5rem]" /> Gross motor and fine motor
              skills are honed along with social and emotional growth
            </li>
            <li>
              <Circle className="!text-[0.5rem]" /> Concept of multiple
              intelligences is merged with 21st-century learning patterns
            </li>
            <li>
              <Circle className="!text-[0.5rem]" /> Aligned interests encourage
              parents and facilitators to function as equal stakeholders
            </li>
            <li>
              <Circle className="!text-[0.5rem]" /> Learning through digital
              components encompasses self-learning extending from classroom to
              home
            </li>
            <li>
              <Circle className="!text-[0.5rem]" /> Clear guidelines and
              illustrations add to the visual, sensorial, experiential,
              collaborative, and inquiry-based learning approach
            </li>
            <li>
              <Circle className="!text-[0.5rem]" /> Simple to complex movement
              in prerequisites, progression, objectives, and outcomes
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:w-[30%] w-full">
          <span className="px-3 ml-3 py-1 bg-orange-500 rounded-t-lg w-fit">
            TEACHERS’ MANUAL
          </span>

          <span className="px-2 py-1 w-full rounded-md bg-orange-200">
            Includes pedagogy for each skill, a detailed annual plan divided
            into quarterly, monthly, and day-wise plans. Project work is
            integrated with the learning graph of the three academic years. It
            also includes comprehensive daywise bridge plans, learning
            indicators, and evaluation tips.
          </span>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
        <div className="flex flex-col sm:w-1/2 w-full">
          <span className="px-3 ml-3 py-1 bg-orange-500 rounded-t-lg w-fit">
            COMPONENTS
          </span>

          <ul className="px-4 py-2 flex flex-col gap-2 w-full rounded-md bg-white border-orange-500 border-2 ">
            <li>
              <span className="text-orange-500 font-semibold">
                Print Learning Material
              </span>{" "}
              includes 7 books—Phonics, Literacy, Numeracy, General Awareness,
              Art and Craft, Storybook, and Rhymes. Also includes flash cards,
              fun mats, and stickers that add to the fun element of learning.
            </li>
            <li>
              <span className="text-orange-500 font-semibold">
                Digital Content
              </span>{" "}
              includes e-books, animations, interactive e-worksheets and
              e-activities.
            </li>
            <li>
              <span className="text-orange-500 font-semibold">
                Cubetto curriculum
              </span>{" "}
              to learn basic coding and problem-solving though play and
              adventure.
            </li>
            <li>
              <span className="text-orange-500 font-semibold">
                Pickatale App
              </span>
              connects school learning to home learning.
            </li>
            <li>
              <span className="text-orange-500 font-semibold">
                Zaner-Bloser Eupheus Handwriting Book
              </span>
              to develop handwriting skills.
            </li>
            <div className="flex items-center gap-5">
              <img src={img1} className="w-auto h-[2rem]" alt="" />
              <img src={img2} className="w-auto h-[5rem]" alt="" />
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:w-1/2 w-full">
          <img src={book} className="w-[60%] h-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Zoom;
