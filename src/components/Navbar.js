import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import NavbarLogo from "../assets/navbar-logo.png";
import MobileIcon from "../assets/mobile-icon.png";
import CloseMobileIcon from "../assets/close-mobile-icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
        display: "block",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="hidden md:flex h-[80px] flex items-center justify-between py-[20px] px-[40px]">
        <div className="flex items-center h-full space-x-[24px]">
          <img src={NavbarLogo} className="h-full w-auto object-cover" />
          <div className="navbar-list flex flex-1">
            <ul className="flex font-medium font-roboto text-[14px] text-tgray">
              <li className="py-[10px] px-[18px] bg-gray text-yellow rounded-[100px] cursor-pointer">
                HOME
              </li>
              <li className="py-[10px] px-[18px] hover:text-yellow cursor-pointer">
                ITEMS1
              </li>
              <li className="py-[10px] px-[18px] hover:text-yellow cursor-pointer">
                ITEMS2
              </li>
              <li className="py-[10px] px-[18px] hover:text-yellow cursor-pointer">
                ITEMS3
              </li>
              <li className="py-[10px] px-[18px] hover:text-yellow cursor-pointer">
                ITEMS4
              </li>
            </ul>
          </div>
        </div>
        <div className="space-x-[8px]">
          <button className="bg-yellow text-dark py-[8px] px-[32px] rounded-[100px] font-cervino text-[16px] uppercase hover:bg-[#C79B12]">
            Sign Up
          </button>
          <button className="inline-block bg-transparent text-tgray outline outline-1 outline-yellow box-border py-[8px] px-[32px] rounded-[100px] font-cervino text-[16px] uppercase hover:outline-[#FFE8AB]">
            Log In
          </button>
        </div>
      </nav>
      <nav className="bg-dark fixed z-[100] flex md:hidden h-[60px] w-full items-center justify-between py-[12px] px-[20px]">
        <div className="flex items-center h-full space-x-[16px]">
          <img
            src={!menuOpen ? MobileIcon : CloseMobileIcon}
            className="w-[24px] cursor-pointer"
            onClick={toggleMenu}
          />
          <img src={NavbarLogo} className="h-full" />
        </div>

        <div className="space-x-[8px]">
          <button className="bg-yellow text-dark py-[6px] px-[24px] rounded-[100px] font-cervino text-[16px] uppercase hover:bg-[#C79B12]">
            Sign Up
          </button>
          <button className="inline-block bg-transparent text-tgray outline outline-1 outline-yellow box-border py-[6px] px-[24px] rounded-[100px] font-cervino text-[16px] uppercase hover:outline-[#FFE8AB]">
            Log In
          </button>
        </div>
        <div
          ref={menuRef}
          className="bg-grayer fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] hidden z-50"
        >
          <ul className="flex flex-col items-center justify-center px-[20px] pt-[20px] gap-[16px] font-medium font-roboto text-[14px] text-tgray">
            <li className="py-[14px] w-full bg-gray text-yellow rounded-[100px] cursor-pointer">
              HOME
            </li>
            <li className="py-[14px] w-full hover:text-yellow cursor-pointer">
              ITEMS1
            </li>
            <li className="py-[14px] w-full hover:text-yellow cursor-pointer">
              ITEMS2
            </li>
            <li className="py-[14px] w-full hover:text-yellow cursor-pointer">
              ITEMS3
            </li>
            <li className="py-[14px] w-full hover:text-yellow cursor-pointer">
              ITEMS4
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
