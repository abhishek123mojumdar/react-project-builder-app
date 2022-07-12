import React from 'react';

export function ExpenseListComponent(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.expenseData.title}</div>
        {props.expenseData.date.toLocaleDateString()}
      </div>
      <span class="badge bg-primary rounded-pill">
        {props.expenseData.amount}
      </span>
    </li>
  );
}
