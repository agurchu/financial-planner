import React, {useState} from "react";
import { MdOutlineLocalGroceryStore,MdOutlineBed, MdOutlineElectricBolt} from "react-icons/md";
import { GiAvoidance } from "react-icons/gi";
import TransactionsCard from "./TransactionsCard.jsx";
import { motion } from "framer-motion";

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

export default function Transactions() {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleView = () => {
    setIsExpanded(!isExpanded)
  }

  const displayedItems = isExpanded ? items : items.slice(0, 3);
  return (
    <motion.div
    initial={{ opacity: 0, x: 25 }}
    animate={{ opacity: 1, x: 0 }}
    
    whileHover={{ x: 2, boxShadow: "0 20px 25px -12px rgba(0,0,0,0.25)" }}
    className="border-l-[1px] border-t-[1px] border-primary-1/25 shadow-2xl rounded-2xl p-4 bg-primary-1/5">
      <div className="flex justify-between mb-4">
        <h2 className="text-primary-1 font-bold text-lg">
          Recent Transactions
        </h2>
        {items.length > 3 && (
          <button onClick={toggleView} className="text-secondary-2 font-bold">{isExpanded ? "View Less" : "View All"}</button>
        )}
        
      </div>
      <div className="grid gap-2">
      {displayedItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      </div>
    </motion.div>
  );
}
