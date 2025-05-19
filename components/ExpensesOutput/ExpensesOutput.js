import { FlatList, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-12-19")
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 59.99,
    date: new Date("2024-04-19")
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 59.99,
    date: new Date("2024-12-19")
  },
  {
    id: "e4",
    description: "a book",
    amount: 59.99,
    date: new Date("2025-03-20")
  },
  {
    id: "e5",
    description: "Anoter book",
    amount: 18.59,
    date: new Date("2025-04-20")
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
