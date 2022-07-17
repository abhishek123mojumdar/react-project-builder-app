import React from 'react';
import './style.css';
import { ExpenseComponent } from './ExpenseComponent/ExpenseComponent';
export default function App() {
  return (
    <div class="container">
      <div className="heading">
        <h1>Expense Manager</h1>
      </div>
      <ExpenseComponent></ExpenseComponent>
    </div>
  );
}
