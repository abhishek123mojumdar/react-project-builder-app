import React from 'react';
import './ExpenseStyle.css';

export function ExpenseAdderComponent() {
  return (
    <div class="card-body">
      <div className="row">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Title" />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Amount" />
        </div>
      </div>
      <br />
      <div className="row mt">
        <div className="col-md-12">
          <input type="date" className="form-control" placeholder="Date" />
        </div>
      </div>
      <br />
      <div className="row mt">
        <div className="col-md-6">
          <button className="btn btn-primary btn-sm"> Add expense</button>
        </div>
      </div>
    </div>
  );
}
