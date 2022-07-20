import React, { useState } from 'react';
import './ExpenseStyle.css';

export function ExpenseAdderComponent(props) {
  const [formState, setFormState] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const [error, setError] = useState(false);

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
        date: e.target.value,
      };
    });
  };
  var addExpense = function () {
    if (
      !formState.title.trim() ||
      !formState.amount.trim() ||
      !formState.date.trim()
    ) {
      alert('Empty form item not allowed');
      setError(true);
      return;
    } else {
      setError(false);
    }
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
            style={{ borderColor: error ? 'red' : '' }}
          />
          {error ? (
            <p style={{ borderColor: error ? 'red' : '', color: 'red' }}>
              Empty form items not allowed
            </p>
          ) : (
            ``
          )}
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Amount"
            onChange={getAmount}
            value={formState.amount}
            style={{ borderColor: error ? 'red' : '' }}
          />
          {error ? (
            <p style={{ borderColor: error ? 'red' : '', color: 'red' }}>
              Empty form items not allowed
            </p>
          ) : (
            ``
          )}
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
            style={{ borderColor: error ? 'red' : '' }}
          />
          {error ? (
            <p style={{ borderColor: error ? 'red' : '', color: 'red' }}>
              Empty form items not allowed
            </p>
          ) : (
            ``
          )}
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

//Props are more like @input in angular they help in passing data form one componeent to another component
