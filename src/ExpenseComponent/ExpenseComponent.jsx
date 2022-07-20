import React, { useState, useEffect } from 'react';
import { ExpenseListComponent } from './ExpenseListComponent';
import { ExpenseAdderComponent } from './ExpenseAdderComponent';
import { expenses } from '../JsonServer/Expense';
import './ExpenseStyle.css';
const filter = (arr, year) =>
  arr.filter((expense) => year === expense.date.getFullYear().toString());
export function ExpenseComponent() {
  const [expenseList, setExpense] = useState(expenses);
  const [year, setYear] = useState('2020');

  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    setFilterList(filter(expenseList, year));
  }, [expenseList, year]);
  const [selectedYear, setSelectedYear] = useState('2020');
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

  const removeListItem = (id) =>
    setExpense((prevState) =>
      prevState.filter((prevItem) => prevItem.id !== id)
    );

  const filterListWrtYear = (e) => setYear(e.target.value);
  return (
    <div className="card mt">
      <div className="card-body"></div>
      <ExpenseAdderComponent
        onSaveExpenseData={saveExpenseData}
      ></ExpenseAdderComponent>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={filterListWrtYear}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      <br />
      {filterList.length > 0 ? (
        filterList.map((expense) => {
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
        <div
          className="card-body"
          style={{ textAlign: 'center', fontWeight: '900', color: 'teal' }}
        >
          No expenses found
        </div>
      )}
    </div>
  );
}

/* ExpenseAdderComponent,ExpenseListComponent  this is similar to component in angular ; Here the things are not segregated as HTML and JS . We write html code in js files ; more commonly known as JSX. If you have worked on jqeury or plain vanilla js more often , you will relate to this pattern  */

// removeListItem , saveExpenseData is more that @Output in angular

// properties like id={expense.id} expenseData={expense} are like [id] [expenseData] in angular in which we send data from one component to another component by @input
