"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/contexts";

export const Navbar = ({ title, options }: { title: string; options?: string[] }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { mblview, darkState, toggleDark } = useAppContext();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setToggle(false);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center h-[8vh] pr-4 pl-4 border-b
          ${darkState ? "bg-neutral-900 border-neutral-700" : "bg-white border-gray-300"}
        `}
      >
        {/* Left: Logo / Title */}
        <div className={`text-2xl w-[70%] ${darkState ? "text-white" : "text-black"}`}>
          {title}
        </div>

        <div className="flex items-baseline justify-end">
          {/* Desktop Menu */}
          {!mblview && (
            <ul className="flex md:gap-12 sm:gap-10 mr-7">
              {options?.map((opt, idx) => (
                <li
                  key={idx}
                  className={`font-sans text-xl cursor-pointer
                    ${darkState ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-black"}
                  `}
                  onClick={() =>
                    scrollToSection(
                      opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase()
                    )
                  }
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}

          <div className="flex gap-3">
            <button
              className={`text-2xl hover:cursor-pointer
                ${darkState ? "text-yellow-400" : "text-amber-950"}
              `}
              onClick={toggleDark}
            >
              ☼
            </button>

            {/* Mobile Toggle Button */}
            {mblview && (
              <button
                className={`text-3xl font-bold focus:outline-none
                  ${darkState ? "text-white" : "text-amber-950"}
                `}
                onClick={() => setToggle(!toggle)}
              >
                ☰
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mblview && toggle && (
        <ul
          className={`flex flex-col gap-4 px-4 pt-2 shadow
            ${darkState ? "bg-neutral-900" : "bg-white"}
          `}
        >
          {options?.map((opt, idx) => (
            <li
              key={idx}
              className={`font-sans text-2xl cursor-pointer border-b
                ${
                  darkState
                    ? "text-gray-300 border-neutral-700"
                    : "text-amber-950 border-gray-50"
                }
              `}
              onClick={() =>
                scrollToSection(
                  opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase()
                )
              }
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
