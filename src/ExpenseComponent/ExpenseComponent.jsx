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
    console.log(payLoad);
    setExpense((prevState) => {
      return [...expenseList, payLoad];
    });
  };

  let removeListItem = function (id) {
    console.log(id);
    let index = expenseList.findIndex(expense => expense.id === id)
    setExpense((prevState)=> {
      expenseList.splice(index,1)
      return expenseList
    })
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
