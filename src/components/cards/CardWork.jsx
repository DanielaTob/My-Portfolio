import React from "react";
import { FaGithub} from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


export default function CardWork() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-9">
      
      
      
      <div>
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

            <h4 className="mt-1 text-xl font-semibold  leading-tight truncate">
              Project Name
            </h4>

            <div className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="mt-4">
              <span className="text-red text-md font-semibold">
                View More
              </span>
             
            </div>
          </div>
        </div>
      </div>



      <div>
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

            <h4 className="mt-1 text-xl font-semibold leading-tight truncate">
              Project Name
            </h4>

            <div className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="mt-4">
              <span className="text-red text-md font-semibold">
                View More
              </span>
             
            </div>
          </div>
        </div>
      </div>


      <div>
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

            <h4 className="mt-1 text-xl font-semibold leading-tight truncate">
              Project Name
            </h4>

            <div className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="mt-4">
              <span className="text-red text-md font-semibold">
                View More
              </span>
             
            </div>
          </div>
        </div>
      </div>





      <div>
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

            <h4 className="mt-1 text-xl font-semibold leading-tight truncate">
              Project Name
            </h4>

            <div className="mt-4">
              <span className="text-red text-md font-semibold">
                View More
              </span>
             
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}
