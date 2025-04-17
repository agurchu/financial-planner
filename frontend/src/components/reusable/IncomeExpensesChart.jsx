import { motion } from "framer-motion";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", income: 3000, expenses: 2750 },
  { name: "Feb", income: 3000, expenses: 2500 },
  { name: "Mar", income: 3000, expenses: 2900 },
  { name: "Apr", income: 3500, expenses: 2890 },
  { name: "May", income: 3000, expenses: 2950 },
  { name: "Jun", income: 3000, expenses: 2610 },
  { name: "Jul", income: 3700, expenses: 3000 },
  { name: "Aug", income: 3200, expenses: 2100 },
  { name: "Sep", income: 3400, expenses: 2700 },
  { name: "Oct", income: 4000, expenses: 3200 },
  { name: "Nov", income: 3800, expenses: 4000 },
  { name: "Dec", income: 3000, expenses: 3800 },
];

export default function IncomeExpensesChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="h-full min-w-96 bg-primary-1/5 hover:bg-accent backdrop-blur-xl shadow-xl rounded-2xl px-4 py-2 border border-primary-1/25"
    >
      <h2 className="text-primary-1 text-start font-medium text-lg">Income vs Expenses</h2>
      <div className="h-52">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"name"} />
            <YAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              dot={{ fill: "#3fd0c9", strokeWidth: 2, r: 3 }}
              type="monotone"
              dataKey="income"
              stroke="#3fd0c9"
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
            <Line type="monotone" dataKey="expenses" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
