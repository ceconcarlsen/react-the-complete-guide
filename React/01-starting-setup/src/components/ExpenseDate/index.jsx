import React from "react";
import "./style.css";

function ExpenseDate({date}) {

    const day = date.toLocaleString("pt-br", { day: "2-digit" });
    const month = date.toLocaleString("pt-br", { month: "long" });
    const year = date.getFullYear();
  
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
