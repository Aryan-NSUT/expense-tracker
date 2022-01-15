import React, { useState } from "react";
import Form from "../../UI/Form/Form";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddingNewExpense, setisAddingNewExpense] = useState(false);
  const saveExpenseDataHandler = (inputExpenceData) => {
    const expenseData = {
      ...inputExpenceData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisAddingNewExpense(false);
  };

  const startAddingHandler = () => {
    setisAddingNewExpense(true);
  };

  const stopEditingHandler = () =>{
    setisAddingNewExpense(false);
  }
  return (
    <div className="new-expense">
      {!isAddingNewExpense && (
        <button onClick={startAddingHandler}>Add new Expense</button>
      )}
      {isAddingNewExpense && (
        <Form onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
      )}
    </div>
  );
};
export default NewExpense;
