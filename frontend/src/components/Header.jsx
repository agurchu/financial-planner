import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdLightMode, MdModeNight } from "react-icons/md";

export default function Header() {
  const [isNightMode, setIsNightMode] = useState(true);
  return (
    <div className="bg-accent w-full justify-between flex h-16 px-8 py-3 border-b border-primary-1/25 ">
      <div className=" flex flex-col items-start relative">
        <span className="text-secondary-2 font-Poppins font-black text-2xl">
          Ritmo
        </span>
        <span className="text-primary-1 text-[10px] -bottom-0 text-nowrap absolute">
          Financial Planner
        </span>
      </div>

      {/* =============== profile & mode =============== */}
      <div className="normalFlex ">
        <div className="mr-4 normalFlex">
          <div className="items-end flex flex-col mr-2 relative">
            <span className="font-bold text-sm text-primary-1 translate-y-1">Katlegojdev</span>
            <p className="text-secondary-2 ">Good</p>
          </div>
          <div className="bg-primary-1 rounded-full p-1 w-8 h-8 normalFlex">
            <FaUser size={20}/>
          </div>
        </div>
        <button
          onClick={() => setIsNightMode(!isNightMode)}
          className={`rounded-full ${isNightMode ? "bg-primary-1" : "bg-black/75"} normalFlex p-1 `}
        >
        {isNightMode ? <>  <div className="rounded-full w-6 h-6 bg-accent mr-2 relative text-primary-1">
              <MdModeNight
                size={20}
                className="absolute right-[1px] bottom-[2px]"
              />
          </div>
          <span className="text-sm mr-1 w-8">
            Light
          </span></> : <> 
          <span className="text-primary-1 text-sm ml-1 mr-2 w-8">
            Night
          </span>
          <div className="rounded-full w-6 h-6 bg-accent mr-0 relative text-primary-1">
        
              <MdLightMode
                size={20}
                className="absolute right-[1px] bottom-[2px]"
              />
          </div>
          </>}
        </button>
      </div>
    </div>
  );
}
