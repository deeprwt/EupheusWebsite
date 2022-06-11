import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import solutionBanner from "../assets/solution-banner.png";
import solImg2 from "../assets/sol-img2.png";
import solMap from "../assets/sol-map.png";
import Footer from "../Components/Footer";
import img3 from "../assets/sol-img3.png";
// import { Parallax } from "react-scroll-parallax";
// import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="sm:h-[100vh] relative w-[100vw]  ">
        {/* <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[30vw] sm:top-[30vh] top-[8vh] right-[5vw]  lg:right-[60vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-base font-extrabold ">
            THE POWER OF THE
          </h1>
          <h1 className="text-black-500 md:text-3xl text-sm font-semibold">
            WIDEST CATALOGUE OF OFFERINGS
          </h1>
        </div> */}
        <img
          className="sm:h-[100vh] h-auto sm:mt-0 mt-[9rem] object-cover w-[100vw]"
          src={solutionBanner}
          alt=""
        />
      </div>

      {/* <div className="a w-12 h-12 bg-blue-700">gsap box</div> */}

      <div className=" sm:mt-[4rem] mt-[1rem] text-gray-700  md:mx-[12vw] mx-[5vw] md:text-2xl text-base">
        Eupheus Learning Group (combined entity of Eupheus Learning, ClassKlap
        and SchoolMitra), apart from their largest catalogue of curricular and
        co-curricular offerings mapped to CBSE and ICSE boards, has introduced
        21st Century School OS which is a unified digital platform offering
        content management system (CMS), enterprise resource planning (ERP) and
        learning management system (LMS) through a single sign on, making lives
        simpler for all stakeholders alike – principals, teachers, parents and
        students.
        <br />
        <br />
        Eupheus is a pioneer when it comes to personalizing learning outcomes
        for a student, since the company believes that each student is unique.
        There’s a unique offering called ‘personalized remedial solution’ which
        customizes remedial help for students thereby making them understand the
        subject at the topic level.
        <br />
        <br />
        The brand is focused on transforming schools into a 21st Century School
        with the increased digitalization appreciation of the modern world
      </div>

      <div className=" sm:mt-[8rem] mt-[2rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-bold flex flex-col md:text-5xl text-base">
        <span>COURSE BOOK SOLUTIONS FOR</span>
        <span>PRE-PRIMARY TO GRADE 8</span>
      </div>
      <div className="mt-[2rem] flex justify-center">
        <img
          onClick={() => navigate("/curriculum")}
          className=" h-auto w-[50vw] cursor-pointer hover:scale-90 transition-all duration-150 ease-linear"
          src={solImg2}
          alt=""
        />
      </div>
      <div className="w-[100vw] my-[2rem] flex justify-center items-center">
        <iframe
          className="sm:w-[60vw] w-[90vw] sm:h-[60vh] h-[30vh] shadow-3xl"
          src="https://www.youtube.com/embed/J2I1oTQ7p18"
        ></iframe>
      </div>

      <div className="sm:mt-[8rem] mt-[1rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-bold flex flex-col md:text-5xl text-base">
        <span>SUPPLEMENTAL SOLUTIONS</span>
      </div>
      <div className="mt-[2rem] flex justify-center">
        <img
          onClick={() => navigate("/digital")}
          className=" h-auto cursor-pointer hover:scale-90 transition-all duration-150 ease-linear w-[70vw]"
          src={solMap}
          alt=""
        />
      </div>
      <div className="w-[100vw] my-[2rem] flex justify-center items-center">
        <iframe
          className="sm:w-[60vw] w-[90vw] sm:h-[60vh] h-[30vh] shadow-3xl"
          src="https://www.youtube.com/embed/TFBDy2-eGEo"
        ></iframe>
      </div>

      <div className="sm:mt-[8rem] mt-[1rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-bold flex flex-col md:text-5xl text-base">
        <span>THE POWER OF THE 21ST CENTURY SCHOOL OS</span>
      </div>
      <div className="grid lg:grid-cols-3  gap-2 sm:mb-[5rem] mb-[1rem]">
        <div className="mt-[2.5rem] text-gray-700 lg:w-[50vw] sm:pr-0 pr-[1rem] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-sm">
          The 21st Century School OS unifies ERP (enterprise resource planning),
          LMS (learning management system) and CMS (content management system)
          on a single sign-on, for all stakeholders of a school – parents,
          teachers, students and parents. With the uniqueness lies in the
          content and technology solutions development and deployment, Eupheus
          Learning is working together with schools to encourage and support
          children as they develop the core STEAM skills that are essential to
          succeed in school and in today’s economy.
        </div>

        <img
          src={img3}
          className="w-[50vw] h-auto lg:mt-[-5rem] ml-[25vw]"
          alt=""
        />
      </div>
      <div className="w-[100vw] my-[2rem] flex justify-center items-center">
        <iframe
          className="sm:w-[60vw] w-[90vw] sm:h-[60vh] h-[30vh] shadow-3xl"
          src="https://www.youtube.com/embed/0urmsIvVQM0"
        ></iframe>
      </div>

      <Footer />
      <GoToTop />
    </div>
  );
};

export default Solutions;
