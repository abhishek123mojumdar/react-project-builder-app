import React from 'react';
import { ExpenseListComponent } from './ExpenseListComponent';
import { ExpenseAdderComponent } from './ExpenseAdderComponent';
import { expenses } from '../JsonServer/Expense';
import './ExpenseStyle.css';

export function ExpenseComponent() {
  let saveExpenseData = function (expenseData) {
    const payLoad = {
      ...expenseData,
      id: Math.random().toString(),
    };
  };

  return (
    <div className="card mt">
      <div className="card-body"></div>
      <ExpenseAdderComponent
        onSaveExpenseData={saveExpenseData}
      ></ExpenseAdderComponent>
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
