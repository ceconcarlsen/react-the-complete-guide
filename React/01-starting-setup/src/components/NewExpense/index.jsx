import React from "react";
import "./style.css";

import ExpenseForm from "../ExpenseForm";

function NewExpense(props) {

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
      props.onAddExpense(expenseData); //bottom-up
  }

  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
