import React from 'react';
import { ExpenseListComponent } from './ExpenseListComponent';
import { ExpenseAdderComponent } from './ExpenseAdderComponent';
import { expenses } from '../JsonServer/Expense';
import './ExpenseStyle.css';

export function ExpenseComponent() {
  return (
    <div className="card mt">
      <div className="card-body"></div>
      <ExpenseAdderComponent></ExpenseAdderComponent>
      {expenses.map((expense) => {
        return (
          <ExpenseListComponent
            key={expense.id}
            expenseData={expense}
          ></ExpenseListComponent>
        );
      })}
    </div>
  );
}
