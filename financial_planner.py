import json
from datetime import datetime
current_date = datetime.now().strftime("%m-%d-%y")

# Placeholder for AI integration (An API or local model)
def ai_guidance(goal,finces,swot):
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
            montly_income = input("Insert your total monthly income").strip()
            if montly_income.isdigit():
                finances["Income"] = int(montly_income)
                break
            print("Invalid income prompt")
            
        expenses_run = True
        while expenses_run:
            while True:
                expense_name = input("Insert your expense name(e.g. rent, food) or done if you are done").strip().lower()
                if expense_name == "done":
                    expenses_run = False
                    break
                elif expense_name.isalpha():
                    finances["Expenses"][expense_name] = 0
                    break
                print("Invalid expense name")
            while expenses_run:
                expense_amount = input("Insert its amount(e.g. 1500)").strip()
                if expense_amount.isdigit():
                    finances["Expenses"][expense_name] = int(expense_amount)
                    break
                print("Invalid expense amount")
        for expense, amount in finances["Expenses"].items():
            expenses += f"{expense}: R{str(amount)},"
        income = finances.get("Income")
        expense_clean = expenses.strip(",")
        print(f"\nIncome: (R{income})")
        # print(f"Expenses: ({",".join(key+": R"+value for key,value in finances["Expenses"].items())})")
        print(f"Expenses: ({expense_clean})")
    
    # getting long goal from user
    def get_long_goal(self):
        while True:
            long_goal = input("Insert your long goal\n").lower()
            if long_goal.isalpha():
                break
            print("Invalid long goal")
            
        print(f"Your goal is {long_goal}")
        return long_goal
    
    # getting medium goal from user
    def get_medium_goal(self):
        while True:
            medium_goal = input("Insert your medium goal\n").lower()
            if medium_goal.isalpha():
                break
            print("Invalid medium goal")
            
        print(f"Your goal is {medium_goal}")
        return medium_goal
    
    # getting short goal from user
    def get_short_goal(self):
        while True:
            short_goal = input("Insert your short goal\n").lower()
            if short_goal.isalpha():
                break
            print("Invalid short goal")
            
        print(f"Your goal is {short_goal}")
        return short_goal
    def input_goals(self):
        pass

    def input_swot(self):
        pass

    def calculate_progress(self):
        pass

    def save_data(self, filename="fincaial_plan.json"):
        pass

    def load_data(self, filename="financial_plan.json"):
        pass

# Main program
def main():
    planner = FinancialPlanner()

if __name__ == "__main__":
    print(f"Financial Planner - Today's Date: {current_date}")
    main()