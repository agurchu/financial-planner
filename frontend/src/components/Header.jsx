import React, { useState } from "react";
import { MdModeNight , MdLightMode} from "react-icons/md";

export default function Header() {
    const [isNightMode, setIsNightMode] = useState(true)
  return (
    <div className="fixed bg-accent w-full justify-between flex h-16 px-8 py-3 border-b border-primary-1/25 ">
      <div className=" flex flex-col items-start relative">
        <span className="text-secondary-2 font-Poppins font-black text-2xl">
          Ritmo
        </span>
        <span className="text-primary-1 text-[10px] -bottom-0 text-nowrap absolute">
          Financial Planner
        </span>
      </div>

      {/* =============== profile & mode =============== */}
      <div>
        <button onClick={()=> setIsNightMode(!isNightMode)} className="rounded-full bg-primary-1 normalFlex p-1 ">
          <div className="rounded-full w-6 h-6 bg-accent w-6 mr-2 relative text-primary-1">
            {isNightMode ? <MdModeNight size={20} className="absolute right-[1px] bottom-[2px]"/> : <MdLightMode size={20} className="absolute right-[1px] bottom-[2px]"/>}
          </div>
          <span className="text-sm mr-1 w-8">{isNightMode ?"Light" : "Night"}</span>
        </button>
      </div>
    </div>
  );
}
