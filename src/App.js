import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 94.12,
    date: new Date(2022, 1, 20),
  },
  {
    id: "e2",
    title: "Football",
    amount: 24.12,
    date: new Date(2021, 10, 12),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 794.92,
    date: new Date(2021, 8, 4),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 348.12,
    date: new Date(2021, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
