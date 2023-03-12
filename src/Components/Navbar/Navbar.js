import React from "react";
import NavItem from "./NavItem";
import { SiRiotgames } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const navitemStyle = "text-navItemColor text-sm";
const navItemTextStyle = "hover:text-navItemColor text-sm uppercase";

function Navbar() {
  const handleClickScroll = (Id) => {
    const element = document.getElementById(Id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed w-[100%] z-40 bg-opacity-10 backdrop-blur-lg ">
      <ul className="flex flex-row px-4 mx-auto xl:py-2 items-center">
        <div className="flex items-center">
          <span className="pr-3">
            <SiRiotgames size={20} />
          </span>
          <Link to="/">
            <li className=" p-1 m-1 text-2xl pr-4 uppercase">CipherSchools</li>
          </Link>
        </div>

        <NavItem className="auto" onClick={() => handleClickScroll("About")}>
          <div className="group">
            <span className={navItemTextStyle}>Top streaming</span>
          </div>
        </NavItem>
        <NavItem onClick={() => handleClickScroll("ExperienceList")}>
          <div className="group">
            <span className={navItemTextStyle}>games</span>
          </div>
        </NavItem>
        <NavItem onClick={() => handleClickScroll("Projects")}>
          <div className="group">
            <span className={navItemTextStyle}>teams</span>
          </div>
        </NavItem>
        <NavItem
          onClick={() => handleClickScroll("Projects")}
          className="pl-11 w-[30%]"
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<BsSearch />} />
            <Input type="text" placeholder="Search" />
          </InputGroup>
        </NavItem>
        <NavItem className="ml-auto">
          <AiOutlineMessage size={20} />
        </NavItem>
        <NavItem>
          <AiOutlineBell size={20} />
        </NavItem>
        <NavItem>
          <p>Darshan</p>
        </NavItem>
        <NavItem>
          <div className="rounded-md border-4 border-purple-500 overflow-hidden">
            <img
              className=" h-8 w-8"
              src="https://prod.assets.earlygamecdn.com/images/tenz-valorfeed-settings.jpg?mtime=1651353441"
              alt="profile"
            />
          </div>
        </NavItem>
      </ul>
    </div>
  );
}

export default Navbar;
