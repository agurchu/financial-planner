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
        pass
    def get_long_goal(self):
        while True:
            long_goal = input("Insert your long goal\n").lower()
            if long_goal.isalpha():
                break
            print("Invalid long goal")
            
        print(f"Your goal is {long_goal}")
        return long_goal
    def get_medium_goal(self):
        while True:
            medium_goal = input("Insert your medium goal\n").lower()
            if medium_goal.isalpha():
                break
            print("Invalid medium goal")
            
        print(f"Your goal is {medium_goal}")
        return medium_goal
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