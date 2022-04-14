import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function GroupButton() {
  return (
    <div>
      <div className="flex gap-4 pl-9 pt-10">
        <a href="#projects" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-red gap-2 text-white font-fontFamily-paragraph  font-semibold py-2 px-4  rounded-lg inline-flex items-center">
         <span>Projects</span> <IoIosArrowDroprightCircle className="fill-current w-4 h-4 mr-2"/>
        </a>
        <div>

        <a href="#contact">
          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red duration-300bg-transparent text-red font-semibold font-fontFamily-paragraph hover:text-white py-2 px-4 border border-red hover:border-transparent rounded-lg">
            Contact
          </button>
        </a>
        </div>
      </div>
    </div>
  );
}
