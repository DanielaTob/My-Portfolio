import React from "react";
import { FaGithub} from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


export default function CardWork() {
  return (

    <div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
      
      
      
      <div className="transform transition duration-500 hover:scale-105">
        <img
          src="https://source.unsplash.com/random/350x350"
          alt="project photo"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="text-red inline-block scale-110">
                <FaGithub />
              </span>
              <div>
              <span className="text-red px-4 inline-block scale-125">
                <BiWorld/>
              </span>
              </div>
            </div>

            <h4 className="mt-1 text-lg font-title font-normal  leading-tight truncate">
              Project Name
            </h4>

            <div className="mt-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="mt-2">
              <span className="text-red text-sm font-title font-semibold">
                View More
              </span>
             
            </div>
          </div>
        </div>
      </div>



      <div className="transform transition duration-500 hover:scale-105">
        <img
          src="https://source.unsplash.com/random/350x350"
          alt="project photo"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="text-red inline-block scale-110">
                <FaGithub />
              </span>
              <div>
              <span className="text-red px-4 inline-block scale-125">
                <BiWorld/>
              </span>
              </div>
            </div>

            <h4 className="mt-1 text-lg font-title font-normal leading-tight truncate">
              Project Name
            </h4>

            <div className="mt-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="mt-2">
              <span className="text-red text-sm font-title font-semibold">
                View More
              </span>
             
            </div>
          </div>
        </div>
      </div>


      <div className="transform transition duration-500 hover:scale-105">
        <img
          src="https://source.unsplash.com/random/350x350"
          alt="project photo"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="text-red inline-block scale-110">
                <FaGithub />
              </span>
              <div>
              <span className="text-red px-4 inline-block scale-125">
                <BiWorld/>
              </span>
              </div>
            </div>

            <h4 className="mt-1 text-lg font-title font-normal leading-tight truncate">
              Project Name
            </h4>

            <div className="mt-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="mt-2">
              <span className="text-red text-sm font-title font-semibold">
                View More
              </span>
             
            </div>
          </div>
        </div>
      </div>





      <div className="transform transition duration-500 hover:scale-105">
        <img
          src="https://source.unsplash.com/random/350x350"
          alt="project photo"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="text-red inline-block scale-110">
                <FaGithub />
              </span>
              <div>
              <span className="text-red px-4 inline-block scale-125">
                <BiWorld/>
              </span>
              </div>
            </div>

            <h4 className="mt-1 text-lg font-normal font-title leading-tight truncate">
              Project Name
            </h4>

            <div className="mt-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            <div className="mt-2">
              <span className="text-red text-sm font-title font-semibold">
                View More
              </span>
             
            </div>
          </div>
        </div>
      </div>




    </div>

    </div>
  );
}
