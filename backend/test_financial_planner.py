import unittest
from unittest.mock import patch, mock_open
from io import StringIO
import sys
from financial_planner import FinancialPlanner, ai_guidance

laptop = "laptop"
class TestFinancialPlanner(unittest.TestCase):

    def setUp(self):
        """Setting up a fresh FinancialPlanner instance for each test. """
        self.planner = FinancialPlanner()
        
    @patch("sys.stdin",StringIO(f"1aptop\n{laptop}\nR5000\n5000\n11\n8\nTwelve\n12"))
    def test_short_goal(self):
        """
            Testing invalid prompt for short goal
        """
        output = StringIO()
        sys.stdout = output
        short_goal, target_amt, priority, timefr = self.planner.get_short_goal()
        
        self.assertEqual(output.getvalue(), f"""Insert your short goal
Invalid short goal name
Insert your short goal
Insert the target amount
Invalid target amount
Insert the target amount
Insert its priority between 1 and 10
Invalid priority
Insert its priority between 1 and 10
Insert timeframe
Invalid timeframe
Insert timeframe
Your goal is {laptop}\n""")
        self.assertEqual((short_goal,target_amt,priority,timefr), (laptop,5000.00,8,12))
        
    @patch("sys.stdin",StringIO(f"1aptop\n{laptop}\nR5000\n5000\n11\n8\nTwelve\n12"))   
    def test_long_goal(self):
        """
            Testing invalid prompt for long goal
        """
        output = StringIO()
        sys.stdout = output
        
        short_goal, target_amt, priority, timefr = self.planner.get_short_goal()
        
        self.assertEqual(output.getvalue(), f"""Insert your short goal
Invalid short goal name
Insert your short goal
Insert the target amount
Invalid target amount
Insert the target amount
Insert its priority between 1 and 10
Invalid priority
Insert its priority between 1 and 10
Insert timeframe
Invalid timeframe
Insert timeframe
Your goal is {laptop}\n""")
        self.assertEqual((short_goal,target_amt,priority,timefr), (laptop,5000.00,8,12))
        
    @patch("sys.stdin",StringIO(f"1aptop\n{laptop}\nR5000\n5000\n11\n8\nTwelve\n12"))
    def test_medium_goal(self):
        """
            Testing invalid prompt for medium goal
        """
        output = StringIO()
        sys.stdout = output
        medium_goal, target_amt, priority, timefr = self.planner.get_medium_goal()
        
        self.assertEqual(output.getvalue(), f"""Insert your medium goal
Invalid medium goal name
Insert your medium goal
Insert the target amount
Invalid target amount
Insert the target amount
Insert its priority between 1 and 10
Invalid priority
Insert its priority between 1 and 10
Insert timeframe
Invalid timeframe
Insert timeframe
Your goal is {laptop}\n""")
        self.assertEqual((medium_goal,target_amt,priority,timefr), (laptop,5000.00,8,12))
        
    def test_input_finances(self):
        """Testing correct finance input."""
        inputs = ["5000", "rent", "1500", "done", "food","500", "done"]
        with patch('builtins.input', side_effect=inputs):
            self.planner.input_finances()
            
    @patch("sys.stdin", StringIO("5,000\nR5000\n5000\nrent\n1500\nGroceries\n500\ndone"))
    def test_invalid_income(self):
        """
            Testing invalid income
        """
        output = StringIO()
        sys.stdout = output
        self.planner.input_finances()
        
        self.assertEqual(output.getvalue(),"""Insert your total monthly income
Invalid income prompt
Insert your total monthly income
Invalid income prompt
Insert your total monthly income
Insert your expense name(e.g. rent, food) or done if you are done
Insert its amount(e.g. 1500)
Insert your expense name(e.g. rent, food) or done if you are done
Insert its amount(e.g. 1500)
Insert your expense name(e.g. rent, food) or done if you are done

Finances:
Income: (R5000)
Expenses: (rent: R1500, groceries: R500)\n""")
        
    @patch("sys.stdin", StringIO("5000\nrent98\nrent\n1500\nGroceries\n500\ndone"))
    def test_invalid_expense_name(self):
        """
            Testing invalid expense name
        """
        output = StringIO()
        sys.stdout = output
        self.planner.input_finances()
        
        self.assertEqual(output.getvalue(),"""Insert your total monthly income
Insert your expense name(e.g. rent, food) or done if you are done
Invalid expense name
Insert your expense name(e.g. rent, food) or done if you are done
Insert its amount(e.g. 1500)
Insert your expense name(e.g. rent, food) or done if you are done
Insert its amount(e.g. 1500)
Insert your expense name(e.g. rent, food) or done if you are done

Finances:
Income: (R5000)
Expenses: (rent: R1500, groceries: R500)\n""")
        
    @patch("sys.stdin", StringIO("5000\nrent\nR1,500\n1500\nGroceries\n500\ndone"))
    def test_invalid_expense_amount(self):
        """
            Testing invalid expense amount
        """
        output = StringIO()
        sys.stdout = output
        self.planner.input_finances()
        
        self.assertEqual(output.getvalue(),"""Insert your total monthly income
Insert your expense name(e.g. rent, food) or done if you are done
Insert its amount(e.g. 1500)
Invalid expense amount
Insert its amount(e.g. 1500)
Insert your expense name(e.g. rent, food) or done if you are done
Insert its amount(e.g. 1500)
Insert your expense name(e.g. rent, food) or done if you are done

Finances:
Income: (R5000)
Expenses: (rent: R1500, groceries: R500)\n""")
        

if __name__ == "__main__":
    unittest.main()
