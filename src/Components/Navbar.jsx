import React from 'react'
import grayBg from '../assets/grayBg.png'
import logo from '../assets/logo.png'
import menuLine from '../assets/menuLine.png'
import { CircleOutlined, Circle } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ highlight }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`lg:px-16 md:px-4 gap-4 sm:px-16 fixed z-50 lg:h-[13vh] md:h-[15vh] sm:h-[20vh]  px-6 py-4 flex flex-col md:flex-row items-center justify-between bg-[#dbdbdb] w-[100vw]`}
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <img
        src={logo}
        onClick={() => navigate("/")}
        className="md:w-auto cursor-pointer md:h-[4rem] w-[10rem] h-[3rem]"
        alt=""
      />

      <div
        className='flex lg:gap-[5.2rem] 3xl:gap-[8rem] md:w-[60%] md:gap-8 sm:gap-16 gap-4 md:mr-12 mt-6 bg-no-repeat'
        style={{ backgroundImage: `url(${menuLine})` }}
      >
        <div className=' flex flex-col   gap-1 justify-center items-center'>
          {highlight === 'home' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              onClick={() => navigate('/')}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/')}
            />
          )}
          <span className='text-xs sm:text-base 2xl:text-2xl flex gap-1'>
            <span>Why</span>
            <span>Eupheus</span>
          </span>
        </div>
        <div className=' flex flex-col gap-1 justify-center items-center'>
          {highlight === 'about' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              // onClick={() => navigate("/about")}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/about')}
            />
          )}

          <span className='text-xs sm:text-base 2xl:text-2xl flex gap-1'>
            <span>About</span>
            <span>Us</span>
          </span>
        </div>
        <div className=' flex flex-col gap-1 justify-center items-center'>
          {highlight === 'solutions' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              onClick={() => navigate('/solutions')}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/solutions')}
            />
          )}

          <span className='text-xs sm:text-base 2xl:text-2xl'>Solutions</span>
        </div>

        <div className=' flex flex-col gap-1 justify-center items-center'>
          {highlight === 'events' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              onClick={() => navigate('/events')}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/events')}
            />
          )}
          <span className='text-xs sm:text-base 2xl:text-2xl'>
            Competitions
          </span>
        </div>
        <div className=' flex flex-col gap-1 justify-center items-center'>
          {highlight === 'media' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              onClick={() => navigate('/media')}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/media')}
            />
          )}
          <span className='text-xs sm:text-base 2xl:text-2xl'>News</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
