import React, { useState } from 'react';
import './ExpenseStyle.css';

export function ExpenseAdderComponent(props) {
  const [formState, setFormState] = useState({
    title: '',
    amount: '',
    date: new Date(),
  });

  let getTitle = function (e) {
    setFormState(() => {
      return {
        ...formState,
        title: e.target.value,
      };
    });
  };
  let getAmount = function (e) {
    setFormState(() => {
      return {
        ...formState,
        amount: e.target.value,
      };
    });
  };
  let getDate = function (e) {
    setFormState(() => {
      return {
        ...formState,
        date:e.target.value,
      };
    });
  };
  var addExpense = function () {
    console.log(formState);
    props.onSaveExpenseData(formState);
    setFormState(() => {
      return {
        ...formState,
        title: '',
        amount: '',
        date: '',
      };
    });
  };

  return (
    <div class="card-body">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={getTitle}
            value={formState.title}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Amount"
            onChange={getAmount}
            value={formState.amount}
          />
        </div>
      </div>
      <br />
      <div className="row mt">
        <div className="col-md-12">
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            onChange={getDate}
            value={formState.date}
          />
        </div>
      </div>
      <br />
      <div className="row mt">
        <div className="col-md-6">
          <button className="btn btn-primary btn-sm" onClick={addExpense}>
            Add expense
          </button>
        </div>
      </div>
    </div>
  );
}
