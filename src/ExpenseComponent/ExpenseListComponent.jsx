import React from 'react';

export function ExpenseListComponent(props) {
  return (
    <div className="card">
      <li className="list-group-item">
        <span className="badge bg-secondary ml">
          {props.expenseData.date.toLocaleDateString()}
        </span>
        <span className="badge bg-primary ml">{props.expenseData.title}</span>
        <span className="badge bg-success ml">{props.expenseData.amount}</span>
        <span className="ml">
          <button className="btn btn-info btn-sm">Action</button>
        </span>
      </li>
    </div>
  );
}
