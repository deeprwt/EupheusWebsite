import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PeopleSlider from "../Components/PeopleSlider";
import { LinkedIn } from "@mui/icons-material";

import GoToTop from "../Components/Top";
import Banner_1 from "../assets/aboutBanner.png";
import grayBg from "../assets/grayBg.png";
import img1 from "../assets/about/Asset 35@3x.png";
import img2 from "../assets/about/Asset 34@3x.png";
import img3 from "../assets/about/Asset 36@3x.png";
import img4 from "../assets/about/Asset 15@3x.png";
import img5 from "../assets/about/Asset 16@3x.png";
import img6 from "../assets/about/Asset 17@3x.png";
import img7 from "../assets/about/Asset 37@3x.png";

import img8 from "../assets/about/1.png";
import img9 from "../assets/about/2.png";
import img10 from "../assets/about/3.png";
import img11 from "../assets/about/4.png";
import card from "../assets/card.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  // const ref = useRef(null);
  useEffect(() => {
    document.title = "About Us - Eupheus";
    // const element = ref.current;
    // gsap.fromTo(
    //   element.querySelector(".element"),
    //   {
    //     opacity: 0,
    //     y: -20,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     scrollTrigger: {
    //       trigger: element.querySelector(".element"),
    //       start: "top top",
    //       end: "bottom center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"about"} />
      <div className="sm:h-[100vh] relative w-[100vw]  ">
        <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[30vw] sm:top-[30vh] top-[2rem] right-[5vw]  lg:right-[60vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-sm ont-extrabold  ">
            WELCOME TO THE LIGHTHOUSE OF
          </h1>
          <h1 className="text-black-500 md:text-3xl text-xs font-bold">
            TRANSFORMATION
          </h1>
        </div>
        <img
          className="sm:h-[100vh] h-auto sm:mt-0 mt-[9rem] object-cover w-[100vw]"
          src={Banner_1}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4 md:mb-[30vh] sm:my-[4rem] my-[1rem] relative">
        <div className=" text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold text-base lg:text-xl 2xl:text-4xl">
          <span>OUR VISION</span>
        </div>

        <div className=" text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] sm:pr-0 pr-4 lg:text-lg 2xl:text-2xl text-sm">
          To be the lighthouse of transformation in Schools. We will be the
          change makers inside schools by transforming them to become the 21st
          Century Schools and democratizing access to quality education for
          students. We will do so by empowering schools with learning solutions
          and technology through content and operating system. Because we feel
          that an empowered school is a great breeding point for a happier
          student.
        </div>
        <img
          src={img1}
          className="sm:absolute sm:right-[13rem] right-[12rem] object-cover  top-[4rem] sm:w-[60vw] w-[100vw] h-auto"
          alt=""
        />
      </div>

      <div className="flex gap-4 items-center w-[100vw] justify-start sm:pl-[12vw] pl-[5vw] md:mt-[40vh]">
        <h3 className="text-gray-700 md:text-2xl text-sm lg:w-[26vw] md:w-[45vw] w-[35vw] flex flex-col gap-4">
          <span className="font-extrabold text-base lg:text-xl 2xl:text-4xl text-red-700">
            OUR MISSION
          </span>

          <span className=" text-gray-700  lg:text-lg 2xl:text-2xl text-sm">
            To become the largest school focused distribution platform in India.
            And then globally.
          </span>
        </h3>

        <img src={img2} className="md:w-[40vw] w-[60vw] h-auto" alt="" />
      </div>

      <div className="flex flex-col gap-8 sm:mb-[40vh] relative">
        <div className=" mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold text-base lg:text-xl 2xl:text-4xl">
          <span>MEET THE GUIDING LIGHT</span>
        </div>

        <div className=" text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] lg:text-lg 2xl:text-2xl text-sm">
          The brand of Proficiency Learning Solutions Private Limited, Eupheus
          Learning started its operations in June 2017. Based in New Delhi, it
          was bootstrapped by about 40 members who joined the 3-founding member
          team to create a new category in the Indian education market.
        </div>

        <div className=" text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] lg:text-lg 2xl:text-2xl text-sm">
          The founding team comprises creative minds with experience of more
          than 120 man-years in starting up and turning around businesses in the
          Education and Training space.
        </div>
        <img
          src={img3}
          className="sm:absolute right-[3vw] bottom-0 object-cover top-[5rem] sm:w-[70vw] w-[100vw] h-auto"
          alt=""
        />
      </div>

      <div className="flex sm:flex-row flex-col gap-3 w-[100vw] px-[5vw]">
        <div className="flex flex-col gap-7 sm:w-[30vw] w-full items-start">
          <div className="flex flex-col gap-12 relative">
            <div className=" mt-[4rem] lg:w-full md:w-[70vw] md:text-3xl text-xl">
              <span className="text-gray-800 font-bold">
                SARVESH SHRIVASTAVA,
              </span>
              <br />
              <span className="text-gray-600 font-semibold">
                FOUNDER AND MANAGING DIRECTOR
              </span>
            </div>

            <img
              src={img4}
              className="sm:w-[20vw] w-[60vw] shadow-2xl h-auto"
              alt=""
            />
          </div>
          <div
            className=" text-gray-700 overflow-hidden lg:w-full md:w-[70vw] lg:text-lg 2xl:text-2xl text-sm"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: `${first ? "5" : "100"}`,
            }}
          >
            Sarvesh brings with him more than 32 years’ experience in education
            and IT sectors, during which he has held progressive leadership
            positions in organizations such as General Electric, Corning,
            Telecom Australia, NIIT, Pearson and Encyclopaedia Britannica. He
            also successfully started and ran his own company undertaking
            several EPC optical fibre contracts which were the first in India
            including the first franchise of pay phones in the 1990s. His last
            stint was as Managing Director at Encyclopaedia Britannica South
            Asia, Executive. He holds a master’s degree in chemical engineering
            from the University of Illinois, Chicago, US.
          </div>
          <button
            className="px-3 py-1 gap-1 text-gray-200 bg-gray-500 rounded-md"
            onClick={() => setFirst(!first)}
          >
            {first ? "Read More" : "Read Less"}
          </button>
          <a href="https://www.linkedin.com/in/sarveshwar-sarvesh-shrivastava-4b4986/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-7 sm:w-[30vw] w-full items-start">
          <div className="flex flex-col gap-12 relative">
            <div className=" mt-[4rem] lg:w-full md:w-[70vw] md:text-3xl text-xl">
              <span className="text-gray-800 font-bold">
                VED PRAKASH KHATTRI,
              </span>
              <br />
              <span className="text-gray-600 font-semibold">
                CO-FOUNDER AND DIRECTOR
              </span>
            </div>

            <img
              src={img5}
              className="sm:w-[20vw] w-[60vw] shadow-2xl h-auto"
              alt=""
            />
          </div>
          <div
            className=" text-gray-700 overflow-hidden lg:w-full md:w-[70vw] lg:text-lg 2xl:text-2xl text-sm"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: `${second ? "5" : "100"}`,
            }}
          >
            Ved has about 26 years’ sales experience in the K12 publishing
            industry space. He has held progressive positions with Suman
            Prakashan, Ratna Sagar, Oxford University Press and Encyclopaedia
            Britannica with credentials of successfully opening new territories
            and grown the business in his tenures at each company. Ved in his
            last assignment was Vice President – K12 at Encyclopaedia Britannica
            South Asia. He holds a bachelor’s degree in commerce.
          </div>
          <button
            className="px-3 py-1 gap-1 text-gray-200 bg-gray-500 rounded-md"
            onClick={() => setSecond(!second)}
          >
            {second ? "Read More" : "Read Less"}
          </button>
          <a href="https://www.linkedin.com/in/ved-prakash-khatri-3a588220/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-7 sm:w-[30vw] w-full items-start">
          <div className="flex flex-col gap-12 relative">
            <div className=" mt-[4rem] lg:w-full md:w-[70vw] md:text-3xl text-xl">
              <span className="text-gray-800 font-bold">AMIT KAPOOR,</span>
              <br />
              <span className="text-gray-600 font-semibold">
                CO-FOUNDER AND DIRECTOR
              </span>
            </div>

            <img
              src={img6}
              className="sm:w-[20vw] w-[60vw] shadow-2xl h-auto"
              alt=""
            />
          </div>
          <div
            className=" text-gray-700 overflow-hidden lg:w-full md:w-[70vw] lg:text-lg 2xl:text-2xl text-sm"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: `${third ? "5" : "100"}`,
            }}
          >
            Amit has more than 19 years’ experience in sales and marketing
            across Education, Training & Entertainment industries covering
            Indian and International markets. His stints at NIIT, Palador
            Pictures, Centum Learning, Across World Education and Encyclopaedia
            Britannica have been focussed on Sales, market entry and growth
            strategies coupled with a focus on business development. Prior to
            founding Eupheus, he was Head – Digital sales at Encyclopaedia
            Britannica. He holds a post graduate diploma in marketing from T.A.
            Pai Management Institute.
          </div>
          <button
            className="px-3 py-1 gap-1 text-gray-200 bg-gray-500 rounded-md"
            onClick={() => setThird(!third)}
          >
            {third ? "Read More" : "Read Less"}
          </button>
          <a href="https://www.linkedin.com/in/amkapoor/">
            <button className="px-3 py-1 flex items-center gap-1 text-gray-200 bg-gray-500 rounded-md">
              <LinkedIn /> <span>Linkedin</span>
            </button>
          </a>
        </div>
      </div>

      {/* persons */}

      <div className="flex flex-col gap-4 mb-[3rem] relative">
        <div className=" mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold text-base lg:text-xl 2xl:text-4xl">
          <span>MEET OUR HEROES OF CHANGE</span>
        </div>

        <div className=" text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] lg:text-lg 2xl:text-2xl text-sm">
          We are a team of dedicated professionals bringing relevant and
          creative solutions to make a difference in education in India. Get in
          touch! Let’s bring a new dawn of learning together.
        </div>

        <img src={img7} className="" alt="" />
      </div>
      <PeopleSlider />

      {/* investers section */}

      <div className=" flex flex-col w-[100vw] md:px-[12vw] px-[5vw] gap-[3rem]">
        <div className=" mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] font-extrabold text-base lg:text-xl 2xl:text-4xl">
          MEET OUR INVESTORS
        </div>
        <div className="flex sm:flex-row flex-col justify-around">
          <div
            className="py-[1rem] px-[2rem] bg-no-repeat sm:w-[50rem] w-full lg:h-[64rem] 2xl:h-[78rem] h-[60rem]"
            style={{
              backgroundImage: `url(${card})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex flex-col gap-8 w-[100%] pl-7 items-center">
              <span className="text-yellow-500 sm:pt-[10vh] pt-[3rem] font-bold text-base lg:text-xl 2xl:text-4xl">
                LIGHTROCK INDIA (2021)
              </span>

              <img src={img11} className="w-[50%] h-auto" alt="" />
              <div className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-full">
                Lightrock provides patient capital and business-building support
                to world-class entrepreneurs across three key themes - Unlocking
                human potential, equitably; Building resource efficiency,
                sustainably; Reimagining business productivity, responsibly -
                covering key sectors such as Food and Agriculture, Logistics,
                Mobility, Healthcare, Renewable energy, Education, Future of
                Work and Financial services. Their thematic platform approach to
                investing stems from their belief that every firm operates not
                in isolation but through a set of symbiotic relationships with
                players across the value chain in their sector. The ability to
                think through these interconnections and find ways to improve
                system-level outcomes across firms can create a virtuous cycle
                of value creation that significantly outpaces mere individual
                firm growth. Lightrock invests between $10 and $50M in a
                company. They also can invest significantly higher amounts in
                situations that offer a compelling fit to their investment
                thesis and mission.
              </div>
            </div>
          </div>
          <div
            className="py-[1rem] px-[2rem] bg-no-repeat sm:w-[50rem] w-full lg:h-[58rem] 2xl:h-[75rem] h-[54rem]"
            style={{
              backgroundImage: `url(${card})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex flex-col gap-8 pl-7 items-center">
              <div className="text-yellow-500 font-bold sm:pt-[10vh] pt-[3rem] text-base lg:text-xl 2xl:text-4xl">
                UNITED EDUCATION COMPANY AND AL RAYAN HOLDING COMPANY, KUWAIT
                (2021)
              </div>
              <img src={img10} className="w-[50%] h-auto" alt="" />
              <div className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-full">
                United Education Company is a Kuwaiti shareholding company
                registered and incorporated in Kuwait on 18th February 2003 with
                a paid-up capital of KD 10 million to capitalize on
                opportunities in the educational sector. The Company commenced
                its operations in 2004 with establishing The American University
                of Kuwait. In 2012 it established The American United School and
                acquired Al-Rayan Holding Company with its 6 schools with a
                total combined capacity of over 12,500 students, offering
                different curriculums to cater to the local market's diverse
                demographic composition. The company will continue to seek
                opportunities in the educational sector and expand its asset
                base within the GCC region.
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-around">
          {/* <div className="box"></div> */}
          <div
            className="sm:py-[7rem] py-[3rem] h-[37rem] px-[2rem] bg-no-repeat sm:w-[50rem] w-full lg:h-[48rem] 2xl:h-[53rem]"
            style={{
              backgroundImage: `url(${card})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex flex-col items-center gap-8">
              <div className="text-yellow-500 font-bold text-base lg:text-xl 2xl:text-4xl">
                YUJ VENTURES (2020)
              </div>
              <img src={img9} className="w-[50%] h-auto" alt="" />
              <div className="text-gray-700 lg:text-lg pl-6 2xl:text-2xl text-sm w-full">
                Yuj Ventures is the private investing arm of the Yuj platform.
                Backed by the family office of Sid Yog, Founding Partner of a
                global investment firm, The Xander Group Inc., Yuj Ventures
                invests in new and innovative ideas and companies; helps rapidly
                growing companies scale in emerging markets; and enables
                networks, alliances and joint ventures that support emerging
                markets’ entry. The firm has invested in companies across India,
                Hong Kong, Singapore, the United States, Russia, Latin America,
                and the United Kingdom.
              </div>
            </div>
          </div>
          <div
            className="sm:py-[7rem] py-[4rem] px-[2rem] bg-no-repeat sm:w-[50rem] w-full lg:h-[47rem] 2xl:h-[53rem] h-[36rem]"
            style={{
              backgroundImage: `url(${card})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex flex-col items-center gap-8">
              <div className="text-yellow-500 font-bold text-base lg:text-xl 2xl:text-4xl">
                SIXTH SENSE VENTURES (2018)
              </div>
              <img src={img8} className="w-[50%] h-auto" alt="" />
              <div className="text-gray-700 pl-6 lg:text-lg 2xl:text-2xl text-sm w-full">
                Sixth Sense Ventures is India’s first domestic, consumer-centric
                venture fund, founded by Nikhil Vora (Ex-Managing Director of
                IDFC Securities), who is regarded as one of the strongest
                analytical minds in the country. They like to back “first
                generation” entrepreneurs and are flexible regards the stage and
                size of investments as long as the business addresses the
                consumer needs “more efficiently”, be it products, services,
                distribution, analytics, etc.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <GoToTop />
    </div>
  );
}
