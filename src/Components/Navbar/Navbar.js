import React from "react";
import NavItem from "./NavItem";
import { SiRiotgames } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuButton,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// add underline hover effect to navItemStyle with start to end animation
const navItemTextStyle =
  " text-sm font-semibold text-gray-500 hover:underline hover:text-gray-700 transition duration-300 ease-in-out uppercase";

function Navbar() {
  const handleClickScroll = (Id) => {
    const element = document.getElementById(Id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed w-[100%] bg-darkmode z-40 text-white">
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
          className="pl-8 w-[30%]"
        >
          {/* purple search outline */}
          <InputGroup>
            {/* puple outline search component */}
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch size={20} />}
            />
            <Input
              variant="outline"
              placeholder="Search"
              className="bg-darkmode text-white"
            />
          </InputGroup>
        </NavItem>
        <NavItem className="ml-auto">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="outline"
              colorScheme="purple"
              _hover={{ bg: "gray.300" }}
              icon={<AiOutlineMessage size={20} />}
              className="flex items-center justify-center outline-none"
            />

            <MenuList>
              <MenuItem>
                <div className="flex items-center">
                  <p className="text-md text-purple-500 text-md font-semibold">
                    Subroza: Hi Shawty
                  </p>
                  <BsDot size={25} className="text-purple-500 " />
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-center">
                  <p className="text-md text-purple-500 text-md font-semibold">
                    Binks: Kaise hai bhai?
                  </p>
                  <BsDot size={25} className="text-purple-500 " />
                </div>
              </MenuItem>
              <MenuItem>
                <p className="text-md text-gray-500 text-md font-semibold">
                  Tenz: Lets Colab
                </p>
              </MenuItem>
            </MenuList>
          </Menu>
        </NavItem>
        <NavItem>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="outline"
              _hover={{ bg: "gray.300" }}
              colorScheme="purple"
              icon={<AiOutlineBell size={20} />}
              className="flex items-center justify-center outline-none"
            />
            <MenuList>
              <MenuItem>
                <div>
                  <p className="font-semibold text-purple-500">
                    Tenz posted a new video. Check it out now!
                  </p>
                  <p className="text-sm text-gray-600 tracking-tighter">
                    2 hours ago
                  </p>
                </div>
              </MenuItem>
              <MenuItem>
                <div>
                  <p className="font-semibold text-purple-500">
                    Hiko just went live!
                  </p>
                  <p className="text-sm text-gray-600 tracking-tighter">
                    4 hours ago
                  </p>
                </div>
              </MenuItem>

              <MenuItem>
                <div>
                  <p className="font-semibold text-gray-700">
                    Simple liked your comment!
                  </p>
                  <p className="text-sm text-gray-600 tracking-tighter">
                    2 hours ago
                  </p>
                </div>
              </MenuItem>

              <MenuItem>
                <div>
                  <p className="font-semibold text-gray-700 ">
                    Subscribe to Binks for more Valorant content!
                  </p>
                  <p className="text-sm text-gray-600 tracking-tighter">
                    2 hours ago
                  </p>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </NavItem>
        <NavItem>
          <p>Darshan</p>
        </NavItem>
        <NavItem>
          <div className="rounded-md border-4 border-purple-500 overflow-hidden">
            <img
              className=" h-8 w-8"
              src="https://avatars.githubusercontent.com/u/68650149?v=4"
              alt="profile"
            />
          </div>
        </NavItem>
      </ul>
    </div>
  );
}

export default Navbar;
