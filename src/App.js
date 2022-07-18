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

// This is like the main.ts in angular
//There is no concept of modules in React , it is a library (like jquery) rather than a framework like angular
