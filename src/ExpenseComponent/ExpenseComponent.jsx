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
      {expenseList.length > 0 ? (
        expenseList.map((expense) => {
          return (
            <ExpenseListComponent
              key={expense.id}
              id={expense.id}
              expenseData={expense}
              removeExpenseItem={removeListItem}
            ></ExpenseListComponent>
          );
        })
      ) : (
        <div className="card-body">No expenses found</div>
      )}
    </div>
  );
}

/* ExpenseAdderComponent,ExpenseListComponent  this is similar to component in angular ; Here the things are not segregated as HTML and JS . We write html code in js files ; more commonly known as JSX. If you have worked on jqeury or plain vanilla js more often , you will relate to this pattern  */

// removeListItem , saveExpenseData is more that @Output in angular

// properties like id={expense.id} expenseData={expense} are like [id] [expenseData] in angular in which we send data from one component to another component by @input
