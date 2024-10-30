import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineCoffee } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const [visible, setVisible] = useState(true); // Track visibility
  let inactivityTimeout;

  // Toggle mobile menu
  const handleNav = () => {
    setNav(!nav);
  };

  // Reset inactivity timer on any interaction
  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimeout);
    setVisible(true); // Show the sidebar on interaction
    inactivityTimeout = setTimeout(() => {
      setVisible(false); // Hide after inactivity
    }, 1000); // 2 seconds of inactivity
  };

  // Add mouse movement event listener to reset timer
  useEffect(() => {
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
      clearTimeout(inactivityTimeout);
    };
  }, []);

  return (
    <div className="relative">
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />

      {/* Mobile Menu */}
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">ANITA</span>
          </a>
          <a
            href="#aboutus"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About Us</span>
          </a>
          <a
            href="#support"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineCoffee size={20} />
            <span className="pl-4">Support Us</span>
          </a>
        </div>
      ) : (
        ""
      )}

      {/* Hover detection area - wide to allow hovering close to the sidebar */}
      <div
        className="fixed top-0 left-0 h-screen w-10 z-50"
        onMouseEnter={() => setVisible(true)} // Show sidebar when near
        onMouseLeave={() => resetInactivityTimer()} // Start timer again when leaving
      ></div>

      {/* Desktop SideNav with fade-in/out */}
      <div
        className={`fixed top-[25%] z-10 transform transition-transform duration-500 ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseLeave={() => resetInactivityTimer()} // Hide when moving away
      >
        <div className="flex flex-col ">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#aboutus"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#support"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineCoffee size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
