import React from 'react'
import Goal from "./Goal.jsx"

export default function Goals() {
  return (
    <div className='grid gap-2 '>
        <Goal name="Vacation Fund" startDate={"2025-03-25"} totalMonths={6} current_cash={15000} target_cash={20000}  />
        <Goal name="New Car"  startDate={"2025-01-30"} totalMonths={36} current_cash={150000} target_cash={250000}  />
        <Goal name="New Phone"  startDate={"2025-02-25"} totalMonths={12} current_cash={1200} target_cash={8000}  />
    </div>
  )
}
