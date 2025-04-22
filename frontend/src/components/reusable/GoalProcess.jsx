import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { RxCross2 } from "react-icons/rx";

export default function GoalProcess({ toggleDetails, startDate, totalMonths }) {
  // calculate elapsed time
  const currentDate = new Date();
  const start = new Date(startDate);
  const elapsedMonths = Math.min(
    (currentDate - start) / (1000 * 60 * 60 * 24 * 30),
    totalMonths
  );
  const monthPercentage = (elapsedMonths / totalMonths) * 100;
  const monthsLeft = totalMonths - elapsedMonths;

  const totalWeeks = totalMonths * 4.333; // Approx. weeks in a month
  const elapsedWeeks = elapsedMonths * 4.333;
  const weeksLeft = totalWeeks - elapsedWeeks;
  const weekPercentage = (elapsedWeeks / totalWeeks) * 100;

  const totalDays = totalMonths * 30.42; // Approx. days in a month
  const elapsedDays = elapsedMonths * 30.42;
  const daysLeft = totalDays - elapsedDays;
  const dayPercentage = (elapsedDays / totalDays) * 100;

  return (
    <div className="fixed normalFlex top-0 right-0 bottom-0 left-0 z-10 ">
      <div className="bg-primary-1/15 p-4 w-[90%] h-56 backdrop-blur-lg relative overflow-hidden rounded-xl ">
        <button
          onClick={toggleDetails}
          className="hover:bg-primary-1/25 top-0 transition-all duration-300 p-2 ease-in-out text-primary-1 absolute right-0 z-10 p-1"
        >
          <RxCross2 size={24} />
        </button>
        <div className=" flex relative flex-wrap justify-around ">
          <div className="text-center mt-6 text-primary-1">
            <h3 className="text-lg font-semibold ">
              Months {`(${monthPercentage.toFixed()}%)`}
            </h3>
            <div className="w-24 mx-auto mt-2">
              <CircularProgressbarWithChildren
                value={monthPercentage}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                  pathColor: "#2eaf7d",
                  textColor: "#c1f6ed",
                  trailColor: "#02353c",
                })}
              >
                <div className="normalFlex flex-col text-sm leading-tight">
                  <strong>{monthsLeft.toFixed()} months</strong> left
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className="text-center mt-6 text-primary-1">
            <h3 className="text-lg font-semibold ">
              weeks {`(${weekPercentage.toFixed()}%)`}
            </h3>
            <div className="w-24 mx-auto mt-2">
              <CircularProgressbarWithChildren
                value={weekPercentage}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                  pathColor: "#2eaf7d",
                  textColor: "#c1f6ed",
                  trailColor: "#02353c",
                })}
              >
                <div className="normalFlex flex-col text-sm leading-tight">
                  <strong>{weeksLeft.toFixed()} weeks</strong> left
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className="text-center text-primary-1 mt-6">
            <h3 className="text-lg font-semibold ">
              Days {`(${dayPercentage.toFixed()}%)`}
            </h3>
            <div className="w-24 mx-auto mt-2">
              <CircularProgressbarWithChildren
                value={dayPercentage}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                  pathColor: "#2eaf7d",
                  textColor: "#c1f6ed",
                  trailColor: "#02353c",
                })}
              >
                <div className="normalFlex flex-col leading-tight">
                  <strong>{daysLeft.toFixed()} days</strong> left
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
const GoalProgress = ({ goalName, savedAmount, goalAmount, startDate, totalMonths }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Calculate savings percentage
  const savingsPercentage = goalAmount ? (savedAmount / goalAmount) * 100 : 0;

  // Calculate elapsed time
  const currentDate = new Date();
  const start = new Date(startDate);
  const elapsedMonths = Math.min(
    (currentDate - start) / (1000 * 60 * 60 * 24 * 30),
    totalMonths
  ); // Approx. months
  const monthPercentage = (elapsedMonths / totalMonths) * 100;

  const totalWeeks = totalMonths * 4.333; // Approx. weeks in a month
  const elapsedWeeks = elapsedMonths * 4.333;
  const weekPercentage = (elapsedWeeks / totalWeeks) * 100;

  const totalDays = totalMonths * 30.42; // Approx. days in a month
  const elapsedDays = elapsedMonths * 30.42;
  const dayPercentage = (elapsedDays / totalDays) * 100;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className="max-w-xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={toggleDetails}
      aria-expanded={showDetails}
      aria-label={showDetails ? 'Collapse time details' : 'Expand time details'}
    >
  //     // {/* Same JSX as above, using dynamic percentages */
//     </div>
//   );
// };

// Example usage
//   <GoalProgress
//     goalName="Car"
//     savedAmount={15000}
//     goalAmount={200000}
//     startDate="2024-12-18" // 3 months ago from April 18, 2025
//     totalMonths={12}
//   />;
// */
