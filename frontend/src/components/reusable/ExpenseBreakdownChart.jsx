import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Rent", value: 14000 },
  { name: "Groceries", value: 9800 },
  { name: "Tansport", value: 4300 },
  { name: "Entertainment", value: 3200 },
  { name: "Utillities", value: 2200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function ExpenseBreakdownChart() {
  return (
    <div className="bg-primary-1/5 shadow-2xl w-full hover:bg-accent border-l-[1px] border-t-[1px] flex flex-col  border-primary-1/25 rounded-3xl p-4">
        <h2 className="text-start font-bold text-xl text-primary-1 mb-4">Expenses Breakdown</h2>
      <div className=" flex justify-around flex-col sm:flex-row ">
        <div className="h-full min-w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={50}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-primary-1/25 rounded-3xl grid p-4 sm:ml-2 sm:mt-0 mt-4 max-h-max gap-2">
          {data.map((item, index) => (
            <div className="flex items-center ">
              <div
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                className={`w-4 h-4 rounded-full`}
              />
              <span className="ml-2 text-primary-1 ">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
