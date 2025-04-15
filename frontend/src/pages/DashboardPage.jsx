import { motion } from "framer-motion";
import React from "react";
import { GiExpense, GiReceiveMoney } from "react-icons/gi";
import { MdOutlineAccountBalanceWallet, MdSavings } from "react-icons/md";
import ExpenseBreakdownChart from "../components/reusable/ExpenseBreakdownChart.jsx";
import IncomeExpensesChart from "../components/reusable/IncomeExpensesChart.jsx";
import StatCard from "../components/reusable/StatCard";

function DashboardPage() {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     // if (isAuthenticated === true) {
  //     // }
  //     navigate("/");
  //   }, []);
  return (
    <main className="max-w-7xl w-full px-4 flex flex-col flex-wrap items-center mt-10 lg:px-8 ">
      {/* ============= Stats =============== */}
      <motion.div
        className="flex gap-2 flex-wrap justify-center items-center mb-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard
          name="Total Balance"
          icon={MdOutlineAccountBalanceWallet}
          value="R8,000"
          percentage="8.8"
        />
        <StatCard
          name="Total Income"
          icon={GiReceiveMoney}
          value="R4,000"
          percentage="-5.8"
        />
        <StatCard
          name="Total Expenses"
          icon={GiExpense}
          value="R2,000"
          percentage="15"
        />
        <StatCard
          name="Total Savings"
          icon={MdSavings}
          value="R500"
          percentage="6.8"
        />
      </motion.div>
      {/* ============== charts ================= */}

      <div className="w-full flex flex-wrap justify-center gap-2">
        <IncomeExpensesChart />
        <ExpenseBreakdownChart />
      </div>
    </main>
  );
}

export default DashboardPage;
