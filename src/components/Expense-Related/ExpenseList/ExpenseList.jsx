import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
const ExpenseList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expense-list">
      {props.filteredExpenses.map((val) => {
        return <ExpenseItem val={val} key={val.id} />;
      })}
    </ul>
  );
};

export default ExpenseList;
