import ExpenseList from "../ExpenseList/ExpenseList";
import Card from "../../UI/Card/Card";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseChart from "../ExpenseChart";
export const Expenses = (props) => {
  const [InputYear, setInputYear] = useState("2020");

  const yearFilterHandler = (selectedYear) => {
    setInputYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return InputYear === expense.date.getFullYear().toString();
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearSelect={yearFilterHandler}
          selectedYear={InputYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};
