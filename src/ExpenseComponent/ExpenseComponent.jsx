import React, { useState } from 'react';
import { ExpenseListComponent } from './ExpenseListComponent';
import { ExpenseAdderComponent } from './ExpenseAdderComponent';
import { expenses } from '../JsonServer/Expense';
import './ExpenseStyle.css';

export function ExpenseComponent() {
  const [expenseList, setExpense] = useState(expenses);
  let saveExpenseData = function (expenseData) {
    expenseData.date = new Date(expenseData.date);
    const payLoad = {
      ...expenseData,
      id: Math.random().toString(),
    };
    setExpense((prevState) => {
      return [...prevState, payLoad];
    });
  };

  let removeListItem = function (id) {
    setExpense((prevState) => {
      let expenseUpdatedList = prevState.filter(
        (prevItem) => prevItem.id !== id
      );
      return expenseUpdatedList;
    });
  };

  return (
    <div className="card mt">
      <div className="card-body"></div>
      <ExpenseAdderComponent
        onSaveExpenseData={saveExpenseData}
      ></ExpenseAdderComponent>
      {expenseList.map((expense) => {
        return (
          <ExpenseListComponent
            key={expense.id}
            id={expense.id}
            expenseData={expense}
            removeExpenseItem={removeListItem}
          ></ExpenseListComponent>
        );
      })}
    </div>
  );
}
