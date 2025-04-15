import { motion } from "framer-motion";
import React from "react";
import { GiExpense, GiReceiveMoney } from "react-icons/gi";
import { MdOutlineAccountBalanceWallet, MdSavings } from "react-icons/md";
import StatCard from "../components/reusable/StatCard";
import IncomeExpensesChart from "../components/reusable/IncomeExpensesChart.jsx";


function DashboardPage() {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     // if (isAuthenticated === true) {
  //     // }
  //     navigate("/");
  //   }, []);
  return (
    <main className="max-w-7xl  px-4 mx-auto mt-10 lg:px-8 ">
      {/* ============= Stats =============== */}
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 mb-8 w-full"
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

      <div>
        <IncomeExpensesChart/>
      </div>
    </main>
  );
}

export default DashboardPage;
