import unittest
from unittest.mock import patch, mock_open
import json
from io import StringIO
import sys
from financial_planner import FinancialPlanner, ai_guidance

class TestFinancialPlanner(unittest.TestCase):

    def setUp(self):
        """Set up a fresh FinancialPlanner instance for each test. """
        self.planner = FinancialPlanner()
    
    def test_input_finances(self):
        """Test that finances are correctly input."""
        inputs = ["5000", "rent", "1500", "food","500", "done"]
        with patch('builtins.input', side_effect=inputs):
            self.planner.input_finances()

if __name__ == "__main__":
    unittest.main()
