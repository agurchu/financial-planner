import React, { useState,useEffect } from 'react';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
// import "react-circular-progressbar/dist/style.css";

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
    <button onClick={toggleDetails} className='px-4 bg-primary-1/5 hover:bg-accent py-2 border border-primary-1/25 rounded-2xl'>
        <div className='flex justify-between'><div className='text-start'><h3 className='font-bold text-primary-1 text-lg'>{name}</h3>< p className='text-[12px] text-primary-2'>R{current_amt} of R{target_amt}</p></div ><div className='w-10 h-6 bg-secondary-1/50 rounded-full normalFlex text-[12px] text-primary-1'>{persent}%</div></div>
        <div className='w-full bg-primary-1/25 overflow-hidden h-2 rounded-full mt-2'>
          <div className={`h-full bg-secondary-2`} style={{width: `${persent}%`}}/>
        </div>
    </button>

    {showDetails &&
      <div className='fixed normalFlex top-0 right-0 bottom-0 left-0 z-10 '>
      
        <div className='bg-primary-1/5 flex relative justify-around  rounded-xl backdrop-blur-md w-[90%] h-56'>
        <button onClick={toggleDetails} className='abosolute bg-primary-1/25 '>Close</button>
          <div className='text-center mt-6 text-primary-1'>
            <h3 className='text-lg font-semibold '>Months</h3>
            <div className='w-24 mx-auto mt-2'>
              <CircularProgressbar value={25}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: '#2eaf7d',
                textColor: '#c1f6ed',
                trailColor: '#02353c',
              })}
              />
            </div>
          </div>
          <div className='text-center mt-6 text-primary-1'>
            <h3 className='text-lg font-semibold '>weeks</h3>
            <div className='w-24 mx-auto mt-2'>
              <CircularProgressbar value={25}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: '#2eaf7d',
                textColor: '#c1f6ed',
                trailColor: '#02353c',
              })}
              />
            </div>
          </div>
          <div className='text-center text-primary-1 mt-6'>
            <h3 className='text-lg font-semibold '>Days</h3>
            <div className='w-24 mx-auto mt-2'>
              <CircularProgressbar value={25}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: '#2eaf7d',
                textColor: '#c1f6ed',
                trailColor: '#02353c',
              })}
              />
            </div>
          </div>
        </div>
    </div>}
    </>)
}
