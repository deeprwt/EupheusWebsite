import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
import Banner_1 from "../assets/mediaBanner.png";
import grayBg from "../assets/grayBg.png";

import AwardTimeline from "../Components/AwardTimeline";
import NewsTimeline from "../Components/NewsTimeline";

export default function Media() {
  useEffect(() => {
    document.title = "News - Eupheus";
  }, []);
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"media"} />

      <div className="sm:h-[100vh] relative w-[100vw]  ">
        {/* <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[30vw] sm:top-[30vh] top-[8vh] right-[5vw]  lg:right-[60vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-base ont-extrabold  ">
            EUPHEUS LEARNING IN
          </h1>
          <h1 className="text-black-500 md:text-3xl text-sm font-bold">
            THE LIMELIGHT
          </h1>
        </div> */}
        <img
          className="sm:h-[100vh] h-auto sm:mt-0 mt-[9rem] object-cover w-[100vw]"
          src={Banner_1}
          alt=""
        />
      </div>

      {/* <div className="px-[6vw] w-[100vw] my-8 sticky top-[3rem] flex gap-4 justify-center items-center">
        <div className="w-[30vw] bg-[#f5ab1d] h-[30vh]">News</div>
        <div className="w-[30vw] bg-[#f5ab1d] h-[30vh]">Awards</div>
      </div> */}

      <AwardTimeline />
      {/* <div className="my-[8rem]">
        <div className="flex items-center justify-center">
          <div className="  text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-5xl text-3xl">
            <span>AWARDS & RECOGNITIONS</span>
          </div>
          <div className="lg:w-[50vw] md:w-[70vw] ">
            <img className="w-auto" src={trophy} alt="" />
          </div>
        </div>
      </div> */}

      {/* <NewsTimeline /> */}

      <Footer />
      <GoToTop />
    </div>
  );
}
