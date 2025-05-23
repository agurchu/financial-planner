import React from 'react'
import { MdOutlineLocalGroceryStore,MdOutlineFileDownload,MdOutlineBed,MdOutlinePostAdd, MdOutlineElectricBolt} from "react-icons/md";
import { GiAvoidance } from "react-icons/gi";
import { motion } from "framer-motion";
import TransactionsCard from '../components/reusable/TransactionsCard'

const items = [
  <TransactionsCard
  name="Groceries"
  icon={MdOutlineLocalGroceryStore}
  description="Food & Drinks"
  amt="500"
  date="Jan 06, 2025"
/>,
<TransactionsCard
  name="Rent"
  icon={MdOutlineBed}
  description="Housing"
  amt="2500"
  date="Jan 01, 2025"
/>,
<TransactionsCard
  name="Electricoty Bill"
  icon={MdOutlineElectricBolt}
  description="Utillities"
  amt="900"
  date="Jan 01, 2025"
/>,
<TransactionsCard
  name="Entertainment"
  icon={GiAvoidance}
  description="Gaming & Cinema"
  amt="150"
  date="Jan 25, 2025"
/>,
]

export default function TransactionsPage() {
  return (
    <main className="shadow-inner border-t border-l border-primary-1/25 w-full px-4 min-h-full overflow-auto mx-auto flex-col py-2 lg:px-8 ">
    {/* <motion.div
    className="border-l-[1px] border-t-[1px] w-full h-max border-primary-1/25 shadow-2xl rounded-2xl p-4 bg-primary-1/5"> */}
      <div className="flex justify-between mb-4">
        <h2 className="text-primary-1 font-bold text-lg">
          Transactions
        </h2>
        <div className='normalFlex gap-2'>
            <button className='normalFlex gap-2'><MdOutlineFileDownload /><span>Export</span></button>
            <button className='bg-primary-2 px-2 py-1 text-accent rounded-md normalFlex gap-1'><MdOutlinePostAdd size={24}/><span className='text-sm'>Add Transactions</span></button>
        </div>
      </div>
      <div className="grid gap-2 border-l-[1px] border-t-[1px] w-full h-max border-primary-1/25 shadow-2xl rounded-2xl p-4 bg-primary-1/5">
      
      {items.map((item, index) => (
        <div  key={index}>{item}</div>
      ))}
      </div>
    {/* </motion.div> */}
    </main>
  )
}
