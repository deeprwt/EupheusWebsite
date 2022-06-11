import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import duck from "../assets/curriculum/duck.png";
import Sidebar from "../Components/Sidebar";
import Zoom from "../Components/Curriculum/prePrimary/Zoom";
import Alpha_fun from "../Components/Curriculum/prePrimary/Alpha_fun";
import Dot_dash from "../Components/Curriculum/prePrimary/Dot_dash";
import Number_maxx from "../Components/Curriculum/prePrimary/Number_maxx";
import Splash from "../Components/Curriculum/prePrimary/Splash";
import Pitara from "../Components/Curriculum/prePrimary/Pitara";
import Radiant_way from "../Components/Curriculum/prePrimary/Radiant_way";

const Curriculum = () => {
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
              <span>To wade through</span>
              <span>difficult concepts,</span>
            </div>
            <div className=" text-red-700 font-bold flex flex-col items-start w-full md:text-5xl text-base">
              <span>Your Power to</span>
              <span>Navigate ...</span>
            </div>

            <div className=" text-gray-700 flex flex-col items-start  md:text-2xl text-base">
              <span>Your Learning Partner</span>
              <span>Preparing you for the future!</span>
            </div>
            <div className="flex justify-center w-full">
              <img
                src={duck}
                className="lg:w-[30vw] w-[50vw] 2xl:w-[38vw] h-auto"
                alt=""
              />
            </div>
          </div>
        );
        break;
      case "zoom":
        return <Zoom sOpen={sOpen} />;
        break;
      case "alpha_fun":
        return <Alpha_fun sOpen={sOpen} />;
        break; 
      case "dot_dash":
          return <Dot_dash sOpen={sOpen} />;
          break; 
      case "number_maxx":
          return <Number_maxx sOpen={sOpen} />;
          break; 
          case "splash":
            return <Splash sOpen={sOpen} />;
            break; 
            case "pitara":
            return <Pitara sOpen={sOpen} />;
            break; 
            case "radiant_way":
              return <Radiant_way sOpen={sOpen} />;
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
          type={"curriculum"}
          setPage={setPage}
        />
        {changePage()}
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default Curriculum;
