import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import owl from "../assets/digital/owl.png";
import Sidebar from "../Components/Sidebar";
import Zoom from "../Components/Curriculum/prePrimary/Zoom";
import Step from "../Components/Digital/Step";
import Primo from "../Components/Digital/Primo";

const Digital = () => {
  const [sOpen, setSopen] = useState(true);
  const [page, setPage] = useState("default");
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const changePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full 2xl:ml-[10rem] ml-8 xl:ml-[6rem] flex flex-col sm:pl-[3rem] sm:pt-4 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4">
            <div className="  text-gray-700 w-full items-start flex flex-col  md:text-2xl text-base">
              <span>To See Through</span>
              <span>Interesting Insights,</span>
            </div>
            <div className=" text-red-700 font-bold flex flex-col items-start w-full md:text-5xl text-base">
              <span>Your Power to</span>
              <span>Comprehend...</span>
            </div>

            <div className=" text-gray-700 flex flex-col items-start  md:text-2xl text-base">
              <span>Your Learning Partner</span>
              <span>Preparing you for the future!</span>
            </div>
            <div className="flex justify-center w-full">
              <img
                src={owl}
                className="lg:w-[30vw] w-[50vw] 2xl:w-[38vw] h-auto"
                alt=""
              />
            </div>
          </div>
        );
        break;
      case "step":
        return <Step sOpen={sOpen} />;
        break;
        case "primo":
          return <Primo sOpen={sOpen} />;
          break;

      default:
        break;
    }
  };

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] flex">
        <Sidebar
          sOpen={sOpen}
          setSopen={setSopen}
          type={"digital"}
          setPage={setPage}
        />
        {changePage()}
        {/* <Zoom sOpen={sOpen} /> */}
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default Digital;
