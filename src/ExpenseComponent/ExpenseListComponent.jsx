import React, { useState, useEffect } from 'react';
import './ExpenseStyle.css';

export function ExpenseListComponent(props) {
  const [title, setTitle] = useState(props.expenseData.title);

  var removeExpense = function () {
    props.removeExpenseItem(props.id);
  };
  // useEffect(() => {
  //   console.log(', on mount', props);
  //   return () => {
  //     console.log('on unmounting of item ', props);
  //   };
  // });

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {props.expenseData.date.toLocaleDateString()}
      </div>
      <span className="badge bg-primary rounded-pill">
        {props.expenseData.amount}
      </span>
      <span>
        <button className="btn btn-sm btn-info ml" onClick={removeExpense}>
          Delete
        </button>
      </span>
    </li>
  );
}
