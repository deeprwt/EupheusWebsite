import React from "react";
import dashBorder from "../assets/dash-border.png";
import board from "../assets/board.png";
import lgDashBorder from "../assets/dash-border-lg.png";
import submit from "../assets/submit.png";

const Form = () => {
  return (
    <div className="w-[100vw] my-[4rem] flex justify-center">
      <div className="bg-white rounded-r-3xl drop-shadow-2xl sm:px-[5rem] sm:py-[5rem] py-[2rem]">
        <form className="flex flex-col gap-[3rem]">
          <div className="flex gap-2 justify-between items-center sm:mx-0 mx-4">
            <input type="radio" name="info" />
            <lable className="sm:text-3xl text-xs font-semibold">
              PRINCIPAL/SCHOOL
            </lable>
            <input type="radio" name="info" />
            <lable className="sm:text-3xl text-xs font-semibold">TEACHER</lable>
            <input type="radio" name="info" />
            <lable className="sm:text-3xl text-xs font-semibold">
              PARENTS/STUDENT
            </lable>
          </div>
          <div className="flex sm:gap-[4rem] gap-4 items-center sm:ml-0 ml-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="sm:text-3xl text-sm font-semibold">
                  FIRST AND LAST NAME
                </h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat sm:w-[30vw] w-[60vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input type="text" className=" outline-none w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="sm:text-3xl text-sm font-semibold">ADDRESS</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat sm:w-[30vw] w-[60vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input type="text" className=" outline-none w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="sm:text-3xl text-sm font-semibold">
                  ZIP / CITY
                </h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat sm:w-[30vw] w-[60vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input type="text" className=" outline-none w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="sm:text-3xl text-sm font-semibold">PHONE</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat sm:w-[30vw] w-[60vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input type="text" className=" outline-none w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="sm:text-3xl text-sm font-semibold">E-MAIL</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat sm:w-[30vw] w-[60vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input type="text" className=" outline-none w-full" />
                </div>
              </div>
            </div>
            <img src={board} className="w-[25vw] h-[25vw]" alt="" />
          </div>
          <div className="sm:w-full w-[90%] ml-4">
            <h1 className="sm:text-3xl text-base font-semibold">QUERY</h1>
            <div
              className="px-8 py-6 bg-no-repeat w-full sm:h-[20vh] h-[10vh]"
              style={{
                backgroundImage: `url(${lgDashBorder})`,
                backgroundSize: "100% 100%",
              }}
            >
              <input type="text" className=" outline-none w-full" />
            </div>
          </div>
          <button>
            <img
              src={submit}
              className=" sm:w-auto w-[40vw] sm:ml-0 ml-4"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
