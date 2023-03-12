import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesListDa from "./ExpensesList";
import ExpenseFilterDa from './ExpenseFilter';
import ExpensesChartDa from './ExpensesChart';
import './Expenses.css';

const ExpensesDa = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');

  const FilterClickHandler =(checkedYear) =>{
    console.log(checkedYear);
    setFilteredYear(checkedYear);
  };

  const filteredExpense = props.selavu.filter(filterExpense => {
    return filterExpense.date.getFullYear().toString() === filteredYear;
  });

 /*         <ExpenseItemDa name={props.selavu[0].title} endru={props.selavu[0].date} evalavu={props.selavu[0].amount}></ExpenseItemDa>
        <ExpenseItemDa name={props.selavu[1].title} endru={props.selavu[1].date} evalavu={props.selavu[1].amount}></ExpenseItemDa>
        <ExpenseItemDa name={props.selavu[2].title} endru={props.selavu[2].date} evalavu={props.selavu[2].amount}></ExpenseItemDa>
        <ExpenseItemDa name={props.selavu[3].title} endru={props.selavu[3].date} evalavu={props.selavu[3].amount}></ExpenseItemDa>
*/
return(
         <div className="expenses">
            {
            props.selavu.map(({title,amount,date}) =>{
                 return <ExpenseItemDa name = {title} evalavu = {amount} endru = {date}></ExpenseItemDa>;
            })
            }
        </div>
        <div className="expenses">
          {props.selavu.map(expense => {
              return <ExpenseItemDa name = {expense.title} evalavu = {expense.amount} endru = {expense.date} />;
          })}
        </div>

        const mainDiv = [];

        props.selavu.forEach((element, i) => {
            mainDiv.push(<ExpenseItemDa name={props.selavu[i]} />);
        }
      );


export default ExpensesDa;
