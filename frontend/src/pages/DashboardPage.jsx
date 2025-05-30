import { motion } from "framer-motion";
import React from "react";
import { GiExpense, GiReceiveMoney } from "react-icons/gi";
import { MdOutlineAccountBalanceWallet, MdSavings } from "react-icons/md";
import ExpenseBreakdownChart from "../components/reusable/ExpenseBreakdownChart.jsx";
import IncomeExpensesChart from "../components/reusable/IncomeExpensesChart.jsx";
import StatCard from "../components/reusable/StatCard";
import Transactions from "../components/reusable/Transactions.jsx";
import DashboardGoals from "../components/reusable/DashboardGoals.jsx";

function DashboardPage() {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     // if (isAuthenticated === true) {
  //     // }
  //     navigate("/");
  //   }, []);
  return (
    <main className="shadow-inner border-t border-l border-primary-1/25 w-full px-4 min-h-full overflow-auto flex mx-auto flex-col items-center py-2 lg:px-8 ">
      {/* ============= Stats =============== */}
      <motion.div
        className="normalFlex gap-2 flex-wrap mb-4 w-full"
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

      <div className="w-full justify-center grid  content-center lg:grid-cols-[1fr_auto] grid-cols-1 mx-auto gap-2">
        <div className="grid gap-2 ">
          <IncomeExpensesChart />
          <Transactions />
        </div>
        <div className="grid gap-2 ">
          <ExpenseBreakdownChart />
          <DashboardGoals />
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
