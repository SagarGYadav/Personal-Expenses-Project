import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started! </h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
