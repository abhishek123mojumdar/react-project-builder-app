import React, { useState } from 'react';
import './ExpenseStyle.css';

export function ExpenseListComponent(props) {
  const [title, setTitle] = useState(props.expenseData.title);

  var updateTitle = function () {
    setTitle('updated ' + title);
  };

  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{title}</div>
        {props.expenseData.date.toLocaleDateString()}
      </div>
      <span class="badge bg-primary rounded-pill">
        {props.expenseData.amount}
      </span>
      <span>
        <button class="btn btn-sm btn-info ml" onClick={updateTitle}>
          {' '}
          Update
        </button>
      </span>
    </li>
  );
}
