import React, { useEffect, useState } from "react";
import grayBg from "../assets/grayBg.png";
import {
  School,
  AccountBalance,
  KeyboardArrowDown,
  Menu,
  Circle,
} from "@mui/icons-material";
import Hamburger, { Spin } from "hamburger-react";
import { Link } from "react-router-dom";

const Sidebar = ({ sOpen, setSopen, type, setPage }) => {
  const [pp, setPp] = useState(false);
  const [cbse, setCbse] = useState(false);
  const [isOpen, setOpen] = useState(sOpen);

  const [hidden, setHidden] = useState(null);

  const handleChangePage = (name) => {
    setPage(name);
    if (window.innerWidth < 430) {
      setSopen(false);
    }
  };

  useEffect(() => {
    handleHidden();
    window.addEventListener("resize", handleHidden);

    return () => {
      window.removeEventListener("resize", handleHidden);
    };
  }, []);

  const handleHidden = () => {
    if (window.innerWidth < 470) {
      setHidden(false);
      setSopen(false);
      setOpen(false);
    } else {
      setHidden(true);
      setSopen(true);
      setOpen(true);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${grayBg})` }}
      className={`overflow-auto transition-all sm:py-2 ease-linear bg-[#dbdbdb] duration-200 ${
        sOpen ? "w-[55rem] lg:w-[30rem] 2xl:w-[30rem] md:w-[34rem]" : "w-0"
      }  min-h-[100vh] max-h-full`}
    >
      {/* hamburger icon */}
      <div
        className={`fixed block sm:hidden top-0 left-2 !z-50`}
        onClick={() => setSopen(!sOpen)}
      >
        <Hamburger toggled={isOpen} direction="right" toggle={setOpen} />
      </div>
      <div
        className={`flex flex-col gap-6 transition-all sm:pt-0 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] ease-linear duration-100`}
      >
        {/* pre primary */}

        <section>
          <div
            onClick={() => setPp(!pp)}
            className="px-6 py-2 flex items-center bg-[#af4242be] rounded-md  gap-4 w-full hover:shadow-xl  border-l-2 border-white cursor-pointer"
          >
            <h1 className=" text-gray-100 sm:text-xl text-sm font-bold">
              <span>
                {type === "curriculum"
                  ? "Pre-Primary"
                  : "Kinaesthetic Learning"}
              </span>
            </h1>
            <div className={`ml-8  transition-all ease-linear duration-200`}>
              <KeyboardArrowDown className=" text-gray-100" />
            </div>
          </div>

          {type === "curriculum" ? (
            <>
              <div
                className={`${
                  pp
                    ? "opacity-100 visible h-[20rem] lg:h-[19rem] md:h-[18.6rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}

                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("zoom")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    {type === "curriculum" ? "Zoom!" : "Step & Learn"}
                  </h1>
                </div>

                {type === "curriculum" ? (
                  <>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                         onClick={() => handleChangePage("alpha_fun")}
                        className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        Alpha Fun
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                         onClick={() => handleChangePage("dot_dash")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        Dot & Dash
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                       onClick={() => handleChangePage("number_maxx")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        NUMBER MAX
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                      onClick={() => handleChangePage("splash")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        SPLASH
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                      onClick={() => handleChangePage("pitara")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        PITARA
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                       onClick={() => handleChangePage("radiant_way")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        RADIANT WAY (PRE-PRIMER AND PRIMER)
                      </h1>
                    </div>
                  </>
                ) : null}

                {/* </Link> */}
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  pp
                    ? "opacity-100 visible h-[2rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("step")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    {type === "curriculum" ? "Zoom!" : "Step & Learn"}
                  </h1>
                </div>
                {type === "curriculum" ? (
                  <>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        Alpha Fun
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        Dot & Dash
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        NUMBER MAX
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        SPLASH
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        PITARA
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        RADIANT WAY (PRE-PRIMER AND PRIMER)
                      </h1>
                    </div>
                  </>
                ) : null}

                {/* </Link> */}
              </div>
            </>
          )}
        </section>

        <section>
          <div
            onClick={() => setCbse(!cbse)}
            className="px-6 py-2 flex items-center bg-[#af4242be] rounded-md  gap-4 w-full hover:shadow-xl  border-l-2 border-white cursor-pointer"
          >
            <h1 className=" text-gray-100 sm:text-xl text-sm font-bold">
              {type === "curriculum" ? "CBSE SOLUTIONS" : "Coding"}
            </h1>
            <div className={`ml-8  transition-all ease-linear duration-200`}>
              <KeyboardArrowDown className=" text-gray-100" />
            </div>
          </div>
          {type === "curriculum" ? (
            <>
              <div
                className={`${
                  cbse
                    ? " opacity-100 visible h-[19rem] lg:h-[19rem] md:h-[18.6rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! ENGLISH
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    ENGLISH VIBES!
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! GRAMMAR & COMPOSITION
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    GRAMMAR AND COMPOSITION VIBES!
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    NEW RADIANT READERS LITERATURE READERS
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    RADIANT WAY (FIRST STEP TO FOURTH STEP)
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    MY WORLD MY EARTH—ENVIRONMENTAL STUDIES
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! MATHS
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! MATHS
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! SCIENCE
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! COMPU-BYTES
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    COMPUTER APPLICATIONS
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    VALLARI—HINDI PATHMALA
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    SURBHIKA—HINDI VYAKARAN MALA
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    SILVER BELLS
                  </h1>
                </div>

                {/* </Link> */}
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  cbse
                    ? " opacity-100 visible h-[19rem] lg:h-[19rem] md:h-[18.6rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("primo")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Primo
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Robo Garden
                  </h1>
                </div>
                {/* </Link> */}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
