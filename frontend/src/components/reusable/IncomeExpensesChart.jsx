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
import {motion} from "framer-motion"

const data = [
  { name: "Jan", income: 4000, expenses: 2000 },
  { name: "Feb", income: 4000, expenses: 2500 },
  { name: "Mar", income: 4000, expenses: 1800 },
  { name: "Apr", income: 4000, expenses: 2100 },
  { name: "May", income: 4000, expenses: 1950 },
  { name: "Jun", income: 4000, expenses: 2000 },
  { name: "Jul", income: 4000, expenses: 2000 },
  { name: "Aug", income: 4000, expenses: 2000 },
  { name: "Sep", income: 4000, expenses: 2000 },
  { name: "Oct", income: 4000, expenses: 2000 },
  { name: "Nov", income: 4000, expenses: 2000 },
  { name: "Dec", income: 4000, expenses: 2000 },
];

export default function IncomeExpensesChart() {
  return (
    <motion.div>
      <h2>Income vs Expenses</h2>
      <div>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"name"} />
            <YAxis yAxisId={"left"} />
            <YAxis yAxisId={"right"} orientation={"right"} />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="expenses"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
