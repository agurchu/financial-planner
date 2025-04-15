import { motion } from "framer-motion";
import React from "react";
import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";

export default function StatCard({ name, icon: Icon, value, percentage }) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 20px 25px -12px rgba(0,0,0,0.25)" }}
      className="bg-primary-1/5 hover:bg-accent w-full max-w-64 border max-h-max border-primary-1/25 overflow-hidden backdrop-blur-md shadow-xl rounded-xl"
    >
      <div className="p-4 sm:px-4 sm:py-3 flex ">
        <div className=" text-primary-1/50 relative text-start text-sm">
          <span>{name}</span>
         
        <span className="text-primary-1 font-bold text-2xl flex items-start">
          {value}
        </span>
        <div className="flex items-start text-[11px] font-medium">
          {Number(percentage) < 0 ? (
            <>
              <TfiStatsDown className="text-red-500" />
              <span className="mx-1 text-red-500">{percentage}%</span>{" "}
            </>
          ) : (
            <>
              {" "}
              <TfiStatsUp className="text-secondary-2" />
              <span className="mx-1 text-secondary-2">+{percentage}%</span>{" "}
            </>
          )}{" "}
          <span className="text-primary-1/50">from last month</span>
        </div>
        </div>
        <Icon size="24" className="text-primary-1 " />
      </div>
    </motion.div>
  );
}
