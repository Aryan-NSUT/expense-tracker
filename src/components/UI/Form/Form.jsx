import "./Form.css";
import React, { useState } from "react";
const Form = (props) => {
  const [inputTitle, setinputTitle] = useState("");
  const [inputAmount, setinputAmount] = useState("");
  const [inputDate, setinputDate] = useState("");

  const titleChangeHandler = (events) => {
    setinputTitle(events.target.value);
  };

  const amountChangeHandler = (events) => {
    setinputAmount(events.target.value);
  };

  const dateChangeHandler = (events) => {
    setinputDate(events.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveExpenseData(expenseData);
    setinputTitle("");
    setinputAmount("");
    setinputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default Form;