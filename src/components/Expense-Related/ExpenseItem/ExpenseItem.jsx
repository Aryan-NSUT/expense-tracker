import React from "react";
import "./ExpenseItem.css";
import Card from "../../UI/Card/Card";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
const ExpenseItem = (props) => {
  const eDate = props.val.date;
  const eAmount = props.val.amount;
  const eTitle = props.val.title;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate eDate={eDate} />
        <div className="expense-item__description">
          <h2>{eTitle}</h2>
          <div className="expense-item__price"> ${eAmount} </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
