import React from 'react';
import './ExpensesList.css';
import ExpenseItemDa from './ExpenseItem';

const ExpensesListDa = (props) =>{

  if(props.expenseFiltererData.length === 0){
  return (<h2 className='expenses-list__fallback'>Found no expenses</h2>);
  }

  return(<ul className='expenses-list'>
    {props.expenseFiltererData.map(expenseData => (
      <ExpenseItemDa key = {expenseData.id}
       name = {expenseData.title}
        endru ={expenseData.date}
         evalavu ={expenseData.amount} /> ))}
  </ul>);
};

export default ExpensesListDa;