import "./ExpenseDate.css";
export const ExpenseDate = (props) => {
  const day = props.eDate.toLocaleDateString("en-US", { day: "2-digit" });
  const month = props.eDate.toLocaleDateString("en-US", { month: "long" });
  const year = props.eDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
