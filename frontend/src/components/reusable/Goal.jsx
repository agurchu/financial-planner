import React, { useState,useEffect } from 'react';

// import "react-circular-progressbar/dist/style.css";
import GoalProcess from "./GoalProcess.jsx"

export default function Goal({current_cash, target_cash, name,totalMoths}) {
  const [showDetails,setShowDetails] = useState(false);
  const current_amt = current_cash;
  const target_amt = target_cash;
  const persent = target_amt ? (current_amt/target_amt) *  100 : 0;

  // calculate elapsed time
  const currentDate = new Date();
  const start = new Date(currentDate);
  const elapsedMonths = Math.min((currentDate - start)/(1000 *60*60*24*30), totalMoths);
// toggle visibility of circular progress bars
  const toggleDetails = ()=> setShowDetails(!showDetails);
  return (<>
    <button onClick={toggleDetails} className='px-4 bg-primary-1/5 hover:bg-accent transition-all duration-200 ease-in-out py-2 border border-primary-1/25 rounded-2xl'>
        <div className='flex justify-between'><div className='text-start'><h3 className='font-bold text-primary-1 text-lg'>{name}</h3>< p className='text-[12px] text-primary-2'>R{current_amt} of R{target_amt}</p></div ><div className='w-10 h-6 bg-secondary-1/50 rounded-full normalFlex text-[12px] text-primary-1'>{persent}%</div></div>
        <div className='w-full bg-primary-1/25 overflow-hidden h-2 rounded-full mt-2'>
          <div className={`h-full bg-secondary-2`} style={{width: `${persent}%`}}/>
        </div>
    </button>

    {showDetails &&
      <GoalProcess toggleDetails={toggleDetails} persentange={persent}/>}
    </>)
}
