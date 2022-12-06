import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Football",
      amount: 24.12,
      date: new Date(2020, 8, 4),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 794.92,
      date: new Date(2020, 8, 12),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 348.12,
      date: new Date(2020, 10, 20),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
