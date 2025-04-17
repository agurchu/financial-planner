import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import TransactionsCard from "./TransactionsCard.jsx";

export default function Transactions() {
  return (
    <div className="border border-primary-1/25 rounded-2xl p-4 bg-primary-1/5 hover:bg-accent">
      <div className="flex justify-between mb-4">
        <h2 className="text-primary-1 font-bold text-lg">
          Recent Transactions
        </h2>
        <button className="text-secondary-2 font-bold">View all</button>
      </div>
      <div>
        <TransactionsCard
          name="Groceries"
          icon={MdOutlineLocalGroceryStore}
          description="Food & Drinks"
          amt="500"
          date="Jan 06, 2025"
        />
      </div>
    </div>
  );
}
