import React,{ useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart'
const Expenses = (props)=> {
  const [filteredYear, setFilterYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
 
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() ===filteredYear
  });

  let expensesContent = <p>No Expenses Found,</p>;

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter 
    selected={filteredYear}
     onChangeFilter={filterChangeHandler}
    />
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
  
    </Card>
    </div>
  );
};
export default Expenses;
