import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import certtificate8 from "../assets/media/cer8.png";
import certtificate9 from "../assets/media/cer9.png";
import certtificate11 from "../assets/media/cer11.png";
import certtificate3 from "../assets/media/car3.png";
import certtificate4 from "../assets/media/cer4.png";
import certtificate5 from "../assets/media/cer5.png";
import certtificate6 from "../assets/media/cer6.png";
import certtificate7 from "../assets/media/cer7.png";
import certtificate1 from "../assets/media/cer1.png";
import certtificate2 from "../assets/media/cer2.png";

export default function NewsTimeline() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  return (
    <div className="flex flex-col gap-4 justify-center items-center my-8">
      <div className="flex flex-col gap-4 w-[100vw] items-center ">
        <div
          onClick={() => setFirst(!first)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
        >
          <span>News In 2022</span>
          <KeyboardArrowDown
            className={`!text-[3rem] ${
              first ? "rotate-180" : null
            } transition-all duration-150 ease-linear`}
          />
        </div>
        {first
          ? //   <div className=" w-full justify-start px-4 bg-transparent flex flex-wrap gap-3">
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Easy Siksha - Jan 10, 2022</span>
            //       <a href="https://news.easyshiksha.com/eupheus-learning-signs-mou-with-varthana-to-make-school-financing-and-21st-century-education-solutions-accessible-to-more-schools-in-india/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Business News this Week - Jan 10, 2022</span>
            //       <a href="http://businessnewsthisweek.com/education/eupheus-learning-signs-mou-with-varthana-to-make-school-financing-and-21st-century-education-solutions-accessible-to-more-schools-in-india/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Higher Education Digest - Jan 10, 2022</span>
            //       <a href="https://www.highereducationdigest.com/eupheus-learning-signs-mou-with-varthana-to-make-school-financing-and-21st-century-education-solutions-accessible-to-more-schools-in-india/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Media Bulletins - Jan 10, 2022</span>
            //       <a href="http://mediabulletins.com/education/eupheus-learning-signs-mou-with-varthana-to-make-school-financing-and-21st-century-education-solutions-accessible-to-more-schools-in-india/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Apn News - Jan 11, 2022</span>
            //       <a href="https://www.apnnews.com/eupheus-learning-signs-mou-with-varthana-to-make-school-financing-and-21st-century-education-solutions-accessible-to-more-schools-in-india/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Niharika Times - Jan 13, 2022</span>
            //       <a href="https://www.niharikatimes.com/india-news/news/eupheus-learning-signs-mou-with-varthana-to-promote-modern-education-30135117.html">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>The India Express - Jan 29, 2022</span>
            //       <a href="https://indianexpress.com/article/business/budget/union-budget-2022-expectations-live-updates-what-market-experts-companies-industry-bodies-india-inc-economists-expect-7738854/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>News Hot of The Press - Jan 29, 2022</span>
            //       <a href="https://newshotoffthepress.com/live-updates-budget-2022-news-expectations-live-high-hopes-pinned-on-modi-government-fm-nirmala-sitharaman-check-who-wants-what/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Jio Frame - Jan 29, 2022</span>
            //       <a href="https://www.jioforme.com/live-updates-budget-2022-news-expectations-live-high-hopes-pinned-on-modi-government-fm-nirmala-sitharaman-check-who-wants-what/1112569/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>India News Republic - Jan 29, 2022</span>
            //       <a href="https://indianewsrepublic.com/live-updates-budget-2022-news-expectations-live-high-hopes-pinned-on-modi-government-fm-nirmala-sitharaman-check-who-wants-what/633683/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Zee Business - Jan 31, 2022</span>
            //       <a href="https://www.zeebiz.com/india/news-budget-2022-news-expectations-india-live-updates-income-tax-calculator-slabs-bands-relief-80c-changes-date-and-time-highlights-177002">
            //         Link
            //       </a>
            //     </div>
            //   </div>
            null
          : null}
      </div>
      <div className="flex flex-col gap-4 w-[100vw] items-center">
        <div
          onClick={() => setSecond(!second)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
        >
          <span>News In 2021</span>
          <KeyboardArrowDown
            className={`!text-[3rem] ${
              second ? "rotate-180" : null
            } transition-all duration-150 ease-linear`}
          />
        </div>
        {second
          ? //   <div className=" w-full justify-start px-4 bg-transparent flex flex-wrap gap-3">
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>The Economic Times - Feb 15, 2021</span>
            //       <a href="https://economictimes.indiatimes.com/tech/funding/eupheus-learning-lands-4-1-million-in-funding/articleshow/80920694.cms">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>VC Circle - Feb 15, 2021</span>
            //       <a href="https://www.vccircle.com/kuwait-firms-lead-series-b-round-in-eupheus-learning-aimed-at-middle-east-rollout">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Money Control - Feb 15, 2021</span>
            //       <a href="https://www.moneycontrol.com/news/business/startup/eupheus-learning-raises-4-1-million-in-series-b-funding-round-6512441.html">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Entrepreneur India - Feb 15, 2021</span>
            //       <a href="https://www.entrepreneur.com/article/365407">Link</a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>Entrackr - Feb 20, 2021</span>
            //       <a href="https://entrackr.com/2021/02/funding-in-indian-startups-this-week-15-feb-20-feb/">
            //         Link
            //       </a>
            //     </div>
            //     <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //       <span>ED Week Market Brief - Feb 22, 2021</span>
            //       <a href="https://marketbrief.edweek.org/marketplace-k-12/k-12-dealmaking-renaissance-acquires-nearpod-major-pairing-classroom-focused-school-companies/">
            //         Link
            //       </a>
            //     </div>
            //   </div>
            null
          : null}
      </div>
      <div className="flex flex-col gap-4 w-[100vw] items-center">
        <div
          onClick={() => setThird(!third)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
        >
          <span>News In 2020</span>
          <KeyboardArrowDown
            className={`!text-[3rem] ${
              third ? "rotate-180" : null
            } transition-all duration-150 ease-linear`}
          />
        </div>
        {third
          ? //       <div className=" w-full justify-around px-4 bg-transparent flex flex-wrap gap-3">
            //         <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //           <span>India Today - Jan 12, 2020</span>
            //           <a href="https://economictimes.indiatimes.com/tech/funding/eupheus-learning-lands-4-1-million-in-funding/articleshow/80920694.cms">
            //             Link
            //           </a>
            //         </div>
            //         <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //           <span>Inc 42 - Jan 23, 2020</span>
            //           <a href="https://economictimes.indiatimes.com/tech/funding/eupheus-learning-lands-4-1-million-in-funding/articleshow/80920694.cms">
            //             Link
            //           </a>
            //         </div>
            //         <div className="px-4 w-[16rem] h-fit py-2 bg-[#f5ab1d] flex flex-col gap-4">
            //           <span>Business Insider - Jan 23, 2020</span>
            //           <a href="https://economictimes.indiatimes.com/tech/funding/eupheus-learning-lands-4-1-million-in-funding/articleshow/80920694.cms">
            //             Link
            //           </a>
            //         </div>
            //       </div>
            //     ) : null}
            //   </div>
            //   <div className="flex flex-col gap-4 w-[100vw] items-center">
            //     <div
            //       onClick={() => setFourth(!fourth)}
            //       className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
            //     >
            //       <span>Awards In 2019</span>
            //       <KeyboardArrowDown
            //         className={`!text-[3rem] ${
            //           fourth ? "rotate-180" : null
            //         } transition-all duration-150 ease-linear`}
            //       />
            //     </div>
            //     {fourth ? (
            //       <div className=" w-full justify-around px-4 bg-transparent flex gap-3">
            //         <img src={certtificate3} className="h-[14rem] w-auto" alt="" />
            //       </div>
            null
          : null}
      </div>
      <div className="flex flex-col gap-4 w-[100vw] items-center">
        <div
          onClick={() => setFifth(!fifth)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
        >
          <span>News In 2018</span>
          <KeyboardArrowDown
            className={`!text-[3rem] ${
              fifth ? "rotate-180" : null
            } transition-all duration-150 ease-linear`}
          />
        </div>
        {fifth
          ? //   <div className=" w-full justify-around px-4 bg-transparent flex gap-3">
            //     <img src={certtificate1} className="w-[24rem] h-auto" alt="" />
            //     <img src={certtificate2} className="w-[28rem] h-auto" alt="" />
            //   </div>
            null
          : null}
      </div>
    </div>
  );
}
