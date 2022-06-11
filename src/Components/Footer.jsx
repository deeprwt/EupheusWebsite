import React from "react";
import logWhite from "../assets/logoWhite.png";
import phone from "../assets/phone.png";
import { Email, PhoneAndroid } from "@mui/icons-material";

import {
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  Circle,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <div className="bg-red-600 w-[100vw] lg:px-[9rem] items-start sm:px-[3rem] px-4 py-[2rem] flex justify-between h-fit ">
        <div className="flex flex-col gap-3 sm:w-[20vw] w-[25vw]">
          <img src={logWhite} className="object-cover w-full" alt="" />
          <span className="text-white sm:text-sm text-xs w-full">
            A-12, Second Floor, Mohan Cooperative Industrial Estate, Main
            Mathura Road, Near Sarita Vihar Metro Station, New Delhi – 110044
          </span>
        </div>
        <div className="flex flex-col mt-[1.5rem] gap-3 sm:w-[20vw] w-[25vw] items-center">
          <span className="text-white sm:text-xl text-base">USEFUL LINKS</span>
          <div className="flex flex-col gap-1">
            <span className="text-white sm:text-sm text-xs">
              Privacy Policy
            </span>
            <span className="text-white sm:text-sm text-xs">Career</span>
            <span className="text-white sm:text-sm text-xs">
              Terms & Conditions
            </span>
          </div>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/Eupheuslearning/">
              <Facebook className=" sm:!text-[2rem]" />
            </a>
            <a href="https://twitter.com/eupheuslearning">
              <Twitter className=" sm:!text-[2rem]" />
            </a>
            <a href="https://in.linkedin.com/company/eupheus-learning">
              <LinkedIn className=" sm:!text-[2rem]" />
            </a>

            <a href="https://www.youtube.com/channel/UCCANr2d0iWusG9A0yFO93ag">
              <YouTube className=" sm:!text-[2rem]" />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-[1.5rem] gap-3 sm:w-[20vw] w-[30vw] items-center">
          <span className="text-white sm:text-xl text-base">GET IN TOUCH</span>
          <div className="flex flex-col gap-1">
            <span className="text-white sm:text-sm text-xs">
              <PhoneAndroid className="text-black" /> 011-61400200
            </span>
            <span className="text-white sm:text-sm text-xs">
              <Email className="text-black" /> info@eupheus.in
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
