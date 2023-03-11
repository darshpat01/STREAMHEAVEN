import React from "react";
import NavItem from "./NavItem";

const navitemStyle = "text-navItemColor text-sm";
const navItemTextStyle = "hover:text-navItemColor text-sm";

function Navbar() {
  const handleClickScroll = (Id) => {
    const element = document.getElementById(Id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed w-[100%] z-40 bg-opacity-10 backdrop-blur-sm ">
      <ul className="flex flex-row container mx-auto xl:py-2 ">
        <li className=" p-1 m-1 font-solarscript text-2xl pr-4 ">
          Darshan Patel
        </li>
        <NavItem className="ml-auto" onClick={() => handleClickScroll("About")}>
          <div className="group">
            <span className={navitemStyle}>01.</span>{" "}
            <span className={navItemTextStyle}>About</span>
          </div>
        </NavItem>
        <NavItem onClick={() => handleClickScroll("ExperienceList")}>
          <div className="group">
            <span className={navitemStyle}>02.</span>{" "}
            <span className={navItemTextStyle}>Experience</span>
          </div>
        </NavItem>
        <NavItem onClick={() => handleClickScroll("Projects")}>
          <div className="group">
            <span className={navitemStyle}>03.</span>{" "}
            <span className={navItemTextStyle}>Project</span>
          </div>
        </NavItem>
        <NavItem onClick={() => handleClickScroll("Contact")}>
          <div className="group">
            <span className={navitemStyle}>04.</span>{" "}
            <span className={navItemTextStyle}>Contact</span>
          </div>
        </NavItem>
        <li className="font-opensans  p-2 px-3 m-1 text-navItemColor border rounded-md border-navItemColor  hover:bg-[#9966cc1a]">
          <span className="font-semibold text-sm">
            <a
              href="https://drive.google.com/file/d/1NW7SgSsC0opyEX_YEKpYWiFRTXcBgEOt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
