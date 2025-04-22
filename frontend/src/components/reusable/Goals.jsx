import React from 'react'
import Goal from "./Goal.jsx"

export default function Goals() {
  return (
    <div className='grid gap-2'>
        <Goal name="Vacation Fund" current_cash={15000} target_cash={20000}  />
        <Goal name="New Car" current_cash={150000} target_cash={250000}  />
        <Goal name="New Phone" current_cash={1200} target_cash={8000}  />
    </div>
  )
}
