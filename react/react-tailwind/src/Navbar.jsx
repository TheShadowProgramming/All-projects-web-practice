import React, {useEffect, useState} from "react";
import "./navbar.css";
import paramLogo from "./assets/ParamTransCropped-transformed.png";

const Navbar = () => {
    const [sideBarVis, setSideBarVis] = useState(false);

    const showSideBar = () => {
        setSideBarVis(true)
    }

    const hideSideBar = () => {
        setSideBarVis(false)
    }

  return (
    <>
      <div className="navbar w-screen z-[999] h-auto bg-slate-950 flex">
        <div className="p-2 grid place-items-center md:p-4">
          <img className="max-w-36 md:max-w-48" src={paramLogo} alt="" />
        </div>
        <div className="hidden md:flex md:ml-auto md:items-center">
          <ul className="list-none flex justify-evenly">
            <li className="text-white p-4 transition-colors duration-300 hover:text-[#950C9A]">
              <a href="#services">Services</a>
            </li>
            <li className="text-white p-4 transition-colors duration-300 hover:text-[#950C9A]">
              <a href="#team">Team</a>
            </li>
            <li className="text-white p-4 transition-colors duration-300 hover:text-[#950C9A]">
              <a href="#clients">Clients</a>
            </li>
            <li className="text-white p-4 transition-colors duration-300 hover:text-[rgb(149,12,154)]">
              <a href="#enquire">Enquire</a>
            </li>
          </ul>
        </div>
        <div onClick={() => showSideBar()} className={`text-white ${sideBarVis ? 'hidden' : 'flex'} flex-col justify-center cursor-pointer ml-auto mr-2.5 md:hidden`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
        <ul className={`list-none w-auto h-auto bg-[rgba(255,255,255,0.05)] ${sideBarVis ? "right-[0%]" : 'right-[-100%]'} flex md:hidden backdrop-blur-lg justify-evenly flex-col items-center top-0 right-0 fixed z-[999] shadow-lg rounded-3xl`}>
          <div onClick={() => hideSideBar()} className="text-white flex cursor-pointer mt-6 ml-auto mr-3 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e8eaed" 
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224  224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
          <li className="text-white w-full text-xs p-4 transition-colors duration-1200 touch-manipulation tap-highlight-transparent">
            <a className="w-full" href="#services">Services</a>
          </li>
          <li className="text-white w-full text-xs p-4 transition-colors duration-1200 touch-manipulation tap-highlight-transparent">
            <a className="w-full" href="#team">Team</a>
          </li>
          <li className="text-white w-full text-xs p-4 transition-colors duration-1200 touch-manipulation tap-highlight-transparent">
            <a className="w-full" href="#clients">Clients</a>
          </li>
          <li className="text-white w-full text-xs p-4 transition-colors duration-1200 touch-manipulation tap-highlight-transparent">
            <a className="w-full" href="#enquire">Enquire</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
