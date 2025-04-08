import json
from datetime import datetime
current_date = datetime.now().strftime("%m-%d-%y")

# Placeholder for AI integration (An API or local model)
def ai_guidance(goal,finances,swot):
    pass

# class to manage financial data and goals
class FinancialPlanner:
    def __init__(self):
        pass

    def input_finances(self):
        """
            This funtion collects user's income and expenses and store them into a dictionary for later use
        """
        
        finances = {
            "Income": 0,
            "Expenses": {}
        }
        expenses = ""
        while True:
            montly_income = input("Insert your total monthly income\n").strip()
            if montly_income.isdigit():
                finances["Income"] = int(montly_income)
                break
            print("Invalid income prompt")
            
        expenses_run = True
        while expenses_run:
            amount_run = True
            while True:
                
                expense_name = input("Insert your expense name(e.g. rent, food) or done if you are done\n").strip().lower()
                if expense_name == "done":
                    expenses_run = False
                    amount_run = False
                   
                    break
                elif expense_name.isalpha():
                    finances["Expenses"][expense_name] = 0
                    amount_run = True
                    break
                else:
                    print("Invalid expense name")
                    amount_run = False
                
            while amount_run:
                expense_amount = input("Insert its amount(e.g. 1500)\n").strip()
                if expense_amount.isdigit():
                    finances["Expenses"][expense_name] = int(expense_amount)
                    break
                print("Invalid expense amount")
               
        for expense, amount in finances["Expenses"].items():
            expenses += f" {expense}: R{str(amount)},"
        income = finances.get("Income")
        expense_clean = expenses.strip(", ")
        print("\nFinances:")
        print(f"Income: (R{income})")
        # print(f"Expenses: ({",".join(key+": R"+value for key,value in finances["Expenses"].items())})")
        print(f"Expenses: ({expense_clean})")
        return income, expense_clean
    
    # getting long goal from user
    def get_long_goal(self):
        """"
        Vacation" (R2,000, short-term, priority 8, timeframe 12 months)

        Returns:
            _string_: _name of the goal_
            _float_: _target amount of the goal_
            _int_: _priority of the goal_
            _int_: _timeframe of the goal_
        """
        while True:
            long_goal = input("Insert your long goal\n").lower()
            if long_goal.isalpha():
                break
            print("Invalid long goal name")
        while True:
            target_amount = input("Insert the target amount\n").lower()
            if target_amount.isdigit():
                break
            print("Invalid target amount")
        while True:
            priority = input("Insert its priority between 1 and 10\n").lower()
            if priority.isdigit() and 1<= int(priority) <=10:
                break
            print("Invalid priority")
        while True:
            timeframe = input("Insert timeframe\n").lower()
            if timeframe.isdigit():
                break
            print("Invalid timeframe")
            
        print(f"Your goal is {long_goal}")
        return (long_goal, float(target_amount), int(priority),int(timeframe))
    
    # getting medium goal from user
    def get_medium_goal(self):
        """"
        Vacation" (R2,000, short-term, priority 8)

        Returns:
            _string_: _name of the goal_
            _float_: _target amount of the goal_
            _int_: _priority of the goal_
            _int_: _timeframe of the goal_
        """
        while True:
            medium_goal = input("Insert your medium goal\n").lower()
            if medium_goal.isalpha():
                break
            print("Invalid medium goal name")
        while True:
            target_amount = input("Insert the target amount\n").lower()
            if target_amount.isdigit():
                break
            print("Invalid target amount")
        while True:
            priority = input("Insert its priority between 1 and 10\n").lower()
            if priority.isdigit() and 1<= int(priority) <=10:
                break
            print("Invalid priority")
        while True:
            timeframe = input("Insert timeframe\n").lower()
            if timeframe.isdigit():
                break
            print("Invalid timeframe")
            
        print(f"Your goal is {medium_goal}")
        return (medium_goal, float(target_amount), int(priority),int(timeframe))
    
    # getting short goal from user
    def get_short_goal(self):
        """"
        Vacation" (R2,000, short-term, priority 8)

        Returns:
            _string_: _name of the goal_
            _float_: _target amount of the goal_
            _int_: _priority of the goal_
            _int_: _timeframe of the goal_
        """
        while True:
            short_goal = input("Insert your short goal\n").lower()
            if short_goal.isalpha():
                break
            print("Invalid short goal name")
        while True:
            target_amount = input("Insert the target amount\n").lower()
            if target_amount.isdigit():
                break
            print("Invalid target amount")
        while True:
            priority = input("Insert its priority between 1 and 10\n").lower()
            if priority.isdigit() and 1<= int(priority) <=10:
                break
            print("Invalid priority")
        while True:
            timeframe = input("Insert timeframe\n").lower()
            if timeframe.isdigit():
                break
            print("Invalid timeframe")
            
        print(f"Your goal is {short_goal}")
        return (short_goal, float(target_amount), int(priority),int(timeframe))
    def input_goals(self):
        pass

    def input_swot(self):
        pass

    def calculate_progress(self):
        pass

    def save_data(self, filename="data.json"):
        pass

    def load_data(self, filename="data.json"):
        pass

# Main program
def main():
    planner = FinancialPlanner()

if __name__ == "__main__":
    print(f"Financial Planner - Today's Date: {current_date}")
    main()