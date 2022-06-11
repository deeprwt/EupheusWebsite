import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import firstSectionSchool from "../assets/first-section-school.174ed857.svg";
import firstSectionLighthouse from "../assets/first-section-lighthouse.a0be8772.svg";
import section2schools from "../assets/section2schools.png";
import section2students from "../assets/section2students.png";
import power from "../assets/power.png";
import image1 from "../assets/image1.png";
import book from "../assets/book.png";
import card from "../assets/card.png";
import robot from "../assets/robot.png";
import reading from "../assets/reading.png";
import laptop from "../assets/laptop.png";
import schoolmitra from "../assets/schoolmitra.png";
import trophy from "../assets/trophy.png";
import code2win from "../assets/code2win.png";
import classK from "../assets/classclap.png";
import play from "../assets/play.png";
import laptop2 from "../assets/laptop2.png";
import iso from "../assets/iso.png";
import sm from "../assets/sm.png";
import footerimg1 from "../assets/footerimg1.png";
import { Parallax } from "react-scroll-parallax";
import Slider from "../Components/Slider";
import Form from "../Components/Form";
import { Tween, ScrollTrigger, Reveal } from "react-gsap";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const timeout = useRef(null);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    document.title = "Eupheus Learning";
    setWidth();
    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  const setWidth = () => {
    if (window.screen.width < 450) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const resetTime = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  // useEffect(() => {
  //   resetTime();
  //   timeout.current = setTimeout(() => {
  //     setIndex((prev) => {
  //       return prev === 2 ? 0 : prev + 1;
  //     });
  //   }, 3000);

  //   return () => {
  //     resetTime();
  //   };
  // }, [index]);

  return (
    <div
      className="bg-[#dbdbdb] w-[100%] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"home"} />
      <div className="sm:mt-0 mt-[9rem]">
        <Slider />
      </div>

      <Reveal repeat>
        <Tween
          from={{ opacity: 0, transform: "translate3d(-100px, 0, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0px, 0, 0)" }}
          ease="back.out(1.4)"
        >
          <div className="mt-[4rem] text-red-700 md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col text-base lg:text-xl 2xl:text-4xl">
            <span>INDIA’S LARGEST SCHOOL FOCUSED</span>
            <span>DISTRIBUTION PLATFORM</span>
          </div>
        </Tween>
      </Reveal>

      <Reveal repeat>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
          <div className=" sm:mt-[4rem] mt-[1rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] lg:text-lg 2xl:text-2xl text-sm">
            Eupheus Learning is positioned as the ‘largest, school-focused
            distribution platform in India’ and is already present in “One out
            of Four Premium Private Schools of India”. The company is focused on
            bridging the gap between in-classroom and at home learning by
            offering pedagogically differentiated technology-led solutions in
            the K–12 space
          </div>
        </Tween>
      </Reveal>

      <Parallax translateX={[-20, 10]} scale={[0.75, 1]}>
        <div className=" sm:mt-[8rem] mt-[3rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col text-base lg:text-xl 2xl:text-4xl">
          <span>EUPHEUS LEARNING THE LIGHTHOUSE OF</span>

          <span>TRANSFORMATION IN SCHOOLS</span>
        </div>
      </Parallax>
      {/* <div className="sm:mt-[5rem] mt-[2rem] sm:w-[60vw] w-[100vw] flex sm:gap-20 gap-3 2xl:ml-[18vw] lg:ml-[13vw] sm:ml-[8vw]">
        <Parallax translateX={["-100px", "120px"]} scale={[0.75, 1]}>
          <img
            src={firstSectionLighthouse}
            className="sm:w-[35vw] w-[80vw] h-auto"
            alt=""
          />
        </Parallax>
        <Parallax translateX={["100px", "-100px"]} scale={[0.75, 1]}>
          <img
            src={firstSectionSchool}
            className="sm:w-[35vw] w-[80vw]h-auto"
            alt=""
          />
        </Parallax>
      </div> */}

      <div className="sm:mt-[5rem] mt-[2rem] w-[100vw] flex md:gap-[7rem] sm:gap-[4rem] gap-4 items-center justify-center">
        <Parallax rotateY={[180, 570]}>
          <img
            src={section2schools}
            className="sm:w-[25vw] w-[40vw] h-auto object-cover"
            alt=""
          />
        </Parallax>
        <Parallax rotateY={[180, 570]}>
          <img
            src={firstSectionLighthouse}
            className="sm:w-[25vw] w-[40vw] h-auto object-cover"
            alt=""
          />
        </Parallax>

        <Parallax rotateY={[180, 570]}>
          <img
            src={section2students}
            className="sm:w-[25vw] w-[40vw] h-auto object-cover"
            alt=""
          />
        </Parallax>
      </div>

      <Reveal repeat>
        <Tween
          from={{ opacity: 0, transform: "translate3d(-100px, 0, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0px, 0, 0)" }}
          ease="back.out(1.4)"
        >
          <div className=" sm:mt-[8rem] mt-[3rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col text-base lg:text-xl 2xl:text-4xl">
            <span>THE POWER OF THE WIDEST</span>
            <span>CURRICULUM CATALOGUE</span>
          </div>
        </Tween>
      </Reveal>

      <Reveal repeat>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
          <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] lg:text-lg 2xl:text-2xl text-sm">
            With its Classroom-first and Curriculum-focused approach, Eupheus
            Learning aims to reach 10 million kids in India through its
            curriculum and specially curated educational offerings in
            Kinaesthetic Learning, Reading Enhancement, STEM/ STEAM, and English
            language learning via exclusive tie-ups with award-winning education
            technology companies from across the world.
          </div>
        </Tween>
      </Reveal>
      <Parallax translateX={[100, -210]}>
        <img
          src={power}
          className="w-[50vw] h-auto mt-[2.5rem] ml-[25vw]"
          alt=""
        />
      </Parallax>
      <div className="flex gap-4 items-center w-[100vw] justify-center pl-6 mt-[2.5rem]">
        <h3 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm lg:w-[26vw] md:w-[45vw] w-[35vw]">
          Empower your children beyond books and boards that can prepare them
          for the unprecedented challenges of tomorrow.
        </h3>
        {/* <Parallax rotate={[180, 570]}> */}
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}
            to={{ opacity: 1, transform: "translate3d(0, 0px, 0)" }}
            ease="back.out(1.4)"
          >
            <img src={image1} className="w-[40vw] h-auto" alt="" />
          </Tween>
        </Reveal>
        {/* </Parallax> */}
      </div>
      <div className="mt-[2.5rem] w-[100vw] justify-center items-center flex flex-col gap-4">
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}
            to={{ opacity: 1, transform: "translate3d(0, 0px, 0)" }}
            ease="back.out(1.4)"
          >
            <img src={book} className="w-[8rem] ml-[30vw] h-auto" alt="" />
          </Tween>
        </Reveal>
        <div className="flex gap-4">
          <Parallax translateX={[-50, 50]}>
            <div className=" relative">
              <img
                src={card}
                className="sm:w-[20rem] w-[24rem] h-auto"
                alt=""
              />
              <div className="absolute top-0 flex flex-col sm:gap-3 gap-1 sm:pt-[5rem] pt-[2rem] sm:pl-[2rem] pl-[1rem]">
                <div className="text-yellow-500 font-bold lg:text-2xl md:text-6xl sm:text-xl text-sm">
                  CURRICULAR CONTENT
                </div>
                <div className="text-gray-700 sm:text-xl text-xs md:w-[17rem] h-auto sm:w-[15rem] w-[10rem] pr-2 ">
                  Eupheus Learning places learners at the heart of education.
                  Therefore, textbooks and syllabi are designed by subject
                  matter experts from across the globe and are mapped to CBSE
                  and ICSE boards.
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax translateX={[50, -50]}>
            <div className=" relative">
              <img
                src={card}
                className="sm:w-[21.3rem] w-[25.1rem] h-auto"
                alt=""
              />
              <div className="absolute top-0 flex flex-col sm:gap-3 gap-1 sm:pt-[5rem] pt-[2rem] sm:pl-[2rem] pl-[1rem]">
                <div className="text-yellow-500 font-bold lg:text-2xl md:text-6xl sm:text-4xl text-sm">
                  SUPPLEMENTAL CONTENT
                </div>
                <div className="text-gray-700 sm:text-xl text-xs md:w-[17rem] sm:w-[15rem] w-[10rem]">
                  Specially curated educational offerings, such as Step and
                  Learn, Cubetto, and Fiction Express to promote Kinaesthetic
                  Learning, Reading Enhancement, STEM/STEAM, and English
                  language learning
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
      <div className="flex w-[100vw] justify-center md:gap-[13rem] sm:gap-[9rem] gap-4">
        <img src={reading} className="w-[10rem] sm:w-[25vw] h-auto" alt="" />
        <img src={robot} className="w-[10rem] sm:w-[25vw] h-auto" alt="" />
      </div>
      <div className="flex gap-4 flex-col w-fit items-end md:ml-[12vw] md:wl-[5vw] 2xl:ml-[18vw] pl-[2rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 text-base lg:text-xl 2xl:text-4xl font-bold pr-2">
            PERSONALISATION REMEDIAL SERVICE
          </h1>
          <h1 className="text-red-500 text-base lg:text-xl 2xl:text-4xl font-semibold text-right pr-2">
            TO GAIN AN EDGE IN THE FUTURE
          </h1>
        </span>
        {mobile ? (
          <div className="flex flex-col md:gap-[7rem] gap-2 items-center">
            <Parallax translateX={[-50, 20]}>
              <div className=" relative">
                <img
                  src={laptop}
                  className="w-[43vw] h-[40vh] sm:w-[25vw] sm:h-auto"
                  alt=""
                />
                <img
                  src={classK}
                  className=" absolute -top-3 sm:w-[40%] w-full sm:-left-0 -left-[4rem] h-auto"
                  alt=""
                />
              </div>
            </Parallax>
            <div className="flex flex-col gap-2 items-end">
              <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm pr-2 w-[90vw]">
                ClassKlap offers the NEP-based curriculum, seamless schooling,
                and various programs to make schools and students future-ready.
                Embrace the new-age learning to gain an edge in the future.
              </h1>
              <a href="https://www.classklap.com/">
                <button className="px-2 mt-2 active:scale-95 bg-red-600 text-gray-300 rounded-md mr-6">
                  Know More
                </button>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex md:gap-[7rem] gap-[2rem] items-center">
            <Parallax translateX={[-50, 20]}>
              <div className=" relative">
                <img
                  src={laptop}
                  className="w-[43vw] h-[40vh] sm:w-[25vw] sm:h-auto"
                  alt=""
                />
                <img
                  src={classK}
                  className=" absolute -top-2 w-[40%] h-auto"
                  alt=""
                />
              </div>
            </Parallax>
            <div className="flex flex-col gap-2 items-end">
              <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-[35vw]">
                ClassKlap offers the NEP-based curriculum, seamless schooling,
                and various programs to make schools and students future-ready.
                Embrace the new-age learning to gain an edge in the future.
              </h1>
              <a href="https://www.classklap.com/">
                <button className="px-2 mt-2 active:scale-95 bg-red-600 text-gray-300 rounded-md mr-6">
                  Know More
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-4 flex-col md:ml-[12vw] md:wl-[5vw] 2xl:ml-[18vw] pl-[2rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 text-base lg:text-xl 2xl:text-4xl font-bold">
            PERSONALISATION REMEDIAL SERVICE
          </h1>
          <h1 className="text-red-500 text-base lg:text-xl 2xl:text-4xl font-semibold">
            TO GAIN AN EDGE IN THE FUTURE
          </h1>
        </span>
        {mobile ? (
          <div className="flex flex-col md:gap-[7rem] gap-2 items-center">
            <Parallax translateX={[100, -130]}>
              <div className=" relative">
                <img
                  src={schoolmitra}
                  className="w-full h-[40vh] sm:w-[35vw] sm:h-auto"
                  alt=""
                />
                <img
                  src={sm}
                  className=" absolute top-0 sm:w-[40%] w-[60vw] h-auto"
                  alt=""
                />
              </div>
            </Parallax>
            <div className="flex flex-col gap-2 items-end">
              <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-[90vw] pr-2">
                SchoolMitra a home grown SaaS company offering digital school
                management system has introduced The 21st Century School OS
                which unifies ERP (enterprise resource planning), LMS (learning
                management system) and CMS (content management system) on a
                single sign-on, benefitting all stakeholders of a school alike –
                Principals, Teachers, Students and Parents.
              </h1>
              <a href="https://www.schoolmitra.com/">
                <button className="px-2 mt-2 active:scale-95 bg-red-600 text-gray-300 mr-6 rounded-md">
                  Know More
                </button>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex md:gap-[7rem] gap-[2rem] items-center">
            <div className="flex flex-col gap-2 items-end">
              <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-[35vw]">
                SchoolMitra a home grown SaaS company offering digital school
                management system has introduced The 21st Century School OS
                which unifies ERP (enterprise resource planning), LMS (learning
                management system) and CMS (content management system) on a
                single sign-on, benefitting all stakeholders of a school alike –
                Principals, Teachers, Students and Parents.
              </h1>
              <a href="https://www.schoolmitra.com/">
                <button className="px-2 mt-2 active:scale-95 bg-red-600 text-gray-300 mr-6 rounded-md">
                  Know More
                </button>
              </a>
            </div>
            <Parallax translateX={[100, -115]}>
              <div className=" relative">
                <img
                  src={schoolmitra}
                  className="w-[43vw] h-[40vh] sm:w-[35vw] sm:h-auto"
                  alt=""
                />
                <img
                  src={sm}
                  className=" absolute top-0 w-[40%] h-auto"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
        )}
      </div>
      {/* <div className="flex flex-col w-[100vw]">
        <div className="flex gap-4 flex-col md:ml-[12vw] md:wl-[5vw] 2xl:ml-[18vw] pl-[2rem] pr-[1rem] sm:mt-[5rem] mt-[3rem]">
          <span>
            <h1 className=" text-red-700 text-base lg:text-xl 2xl:text-4xl  font-bold">
              REVOLUTIONIZING SCHOOLS WITH
            </h1>
            <h1 className="text-red-500 text-base lg:text-xl 2xl:text-4xl  font-semibold">
              THE 21ST CENTURY SCHOOL OS
            </h1>
          </span>
        </div>
        <div className="flex items-center w-[100vw]">
          <h1 className=" md:mt-[2.5rem] md:ml-[12vw] 2xl:ml-[18vw] sm:mb-[5rem] mb-[1rem] text-gray-700 lg:w-[40vw] md:w-[70vw] w-[20vw] lg:text-lg 2xl:text-2xl text-sm">
            Schools need assistance on ‘content management’, ‘learning
            management’, ‘enterprise resource planning’, ‘financial management’,
            ‘communication management’, etc. and there are disparate solutions
            existing in the marketplace which make matters worse for a school.
            SchoolMitra (a company acquired by Eupheus Learning), a home grown
            SaaS company offering digital school management system has
            introduced The 21st Century School OS which unifies ERP (enterprise
            resource planning), LMS (learning management system) and CMS
            (content management system) on a single sign-on, benefitting all
            stakeholders of a school alike – Principals, Teachers, Students and
            Parents.
          </h1>
          <Parallax translateX={[100, -115]}>
            <div className=" relative sm:mt-[3rem] mt-[1rem]">
              <div>
                <img
                  className="absolute sm:top-[3rem] top-[2rem] sm:-left-[2rem] left-[2rem] sm:w-[60%] w-[50%] sm:pl-[2rem]"
                  src={sm}
                  alt=""
                />
                <img
                  className="mt-[1rem] sm:w-auto w-full h-auto sm:h-[30rem]"
                  src={schoolmitra}
                  alt=""
                />
              </div>
            </div>
          </Parallax>
        </div>
      </div> */}

      <div className="w-[100vw] my-[4rem] flex justify-center items-center">
        <iframe
          className="sm:w-[60vw] sm:h-[60vh] w-[80vw] h-[40vh]"
          src="https://www.youtube.com/embed/VRdUjcdI8-Y"
        ></iframe>
      </div>

      {/* <Form /> */}

      <div className="w-[100vw] items-center px-[2vw] py-[2rem] grid grid-rows-1 grid-cols-3 gap-[2rem] justify-between bg-[#f5ab1d]">
        <div className="flex flex-col gap-3">
          <div className="flex w-[30vw] flex-col gap-2">
            <a href="https://www.vccircle.com/lightrock-india-funded-eupheus-learning-buys-saas-platform-schoolmitra">
              <span className=" sm:text-sm text-xs text-white">
                <span>
                  Lightrock India-funded Eupheus Learning buys SaaS platform
                  SchoolMitra
                </span>
              </span>
            </a>
            <span className="md:text-base text-xs text-red-700">
              Feb 15, 2022
            </span>
          </div>
          <div className=" flex w-[30vw] flex-col gap-2">
            <a href="https://economictimes.indiatimes.com/tech/funding/eupheus-learning-acquires-classklap-for-19-million/articleshow/86396052.cms">
              <span className="sm:text-sm text-xs text-white">
                Eupheus Learning acquires ClassKlap for $19 million
              </span>
            </a>
            <span className="md:text-base text-xs text-red-700">
              Sep 21, 2021
            </span>
          </div>
          <div className=" flex w-[30vw] flex-col gap-2">
            <a href="https://economictimes.indiatimes.com/industry/services/education/eupheus-learning-collaborates-with-global-education-solutions-to-help-students-develop-competencies/articleshow/85295893.cms">
              <span className=" sm:text-sm text-xs text-white">
                Eupheus Learning collaborates with Global Education Solutions to
                help students develop competencies
              </span>
            </a>
            <span className="md:text-base text-xs text-red-700">
              Aug 13, 2021
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className=" flex w-[30vw] flex-col gap-2">
            <a href="https://www.apnnews.com/eupheus-learning-signs-mou-with-varthana-to-make-school-financing-and-21st-century-education-solutions-accessible-to-more-schools-in-india/">
              <span className=" sm:text-sm text-xs text-white">
                Eupheus Learning signs MoU with Varthana to make school
                financing and 21st century education solutions accessible to
                more schools in India
              </span>
            </a>
            <span className="md:text-base text-xs text-red-700">
              Jan 11, 2022
            </span>
          </div>
          <div className=" flex w-[30vw] flex-col gap-2">
            <a href="https://economictimes.indiatimes.com/tech/funding/edtech-startup-eupheus-learning-raises-10-million-from-lightrock-india/articleshow/86198785.cms?from=mdr">
              <span className="sm:text-sm text-xs text-white">
                Edtech startup Eupheus Learning raises $10 million from
                Lightrock India
              </span>
            </a>
            <span className="md:text-base text-xs text-red-700">
              Sep 14, 2021
            </span>
          </div>
          <div className=" flex w-[30vw] flex-col gap-2">
            <a href="https://www.cnbctv18.com/business/most-trusted-brands-of-india-2021-8791541.htm">
              <span className="sm:text-sm text-xs text-white">
                Eupheus Learning - Most Trusted Brands Of India 2021
              </span>
            </a>
            <span className="md:text-base text-xs text-red-700">
              Apr 12, 2021
            </span>
          </div>
        </div>

        <img src={footerimg1} alt="" />
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Home;
