import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function GroupButton() {
  return (
    <div>
      <div className="flex gap-4 pl-9 pt-10">
        <button className="bg-red gap-2 text-white font-fontFamily-paragraph  font-semibold py-2 px-4  rounded-lg inline-flex items-center">
         <span>View My Projects</span> <IoIosArrowDroprightCircle className="fill-current w-4 h-4 mr-2"/>
        </button>
        <div>


          <button className="bg-transparent hover:bg-red text-red font-semibold font-fontFamily-paragraph hover:text-white py-2 px-4 border border-red hover:border-transparent rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
