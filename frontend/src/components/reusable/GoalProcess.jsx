import React from 'react'
import { RxCross2 } from "react-icons/rx";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";

export default function GoalProcess({persentange, toggleDetails}) {
  return (
    <div className='fixed normalFlex top-0 right-0 bottom-0 left-0 z-10 '>
        <div className='bg-primary-1/5 p-4 w-[90%] h-56 backdrop-blur-md relative overflow-hidden rounded-xl '>
        <button onClick={toggleDetails} className='hover:bg-primary-1/25 top-0 transition-all duration-300 ease-in-out text-primary-1 absolute right-0 z-10 p-1'><RxCross2  size={24}/></button>
        <div className=' flex relative flex-wrap justify-around '>
          <div className='text-center mt-6 text-primary-1'>
            <h3 className='text-lg font-semibold '>Months</h3>
            <div className='w-24 mx-auto mt-2'>
              <CircularProgressbar value={persentange}
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
    </div>
    </div>
  )
}
