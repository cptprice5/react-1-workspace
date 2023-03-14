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

return(
    <div>
        <Card className="expenses">
            <ExpenseFilterDa onInitialSetter = {filteredYear} onSelectedHandler = {FilterClickHandler} />
            <ExpensesChartDa selavus ={filteredExpense} />
            <ExpensesListDa expenseFiltererData = {filteredExpense} />
        </Card>
    </div>
      );


export default ExpensesDa;
