import React, { useState } from "react";
import './AddExpenses.css';
import ExpenseFormDa from "./ExpenseForm";

const AddExpensesDa = (props) =>{
   const[formTransition,setFormTransition]=useState(false);
   const newExpenseHandler =(enteredNewExpense) => {
      const newExpenseData ={
         ...enteredNewExpense,
         id: Math.random().toString(),
      };
      props.onAddData(newExpenseData);
      setFormTransition(false);
   };

  const transitionHandler = () => {
    setFormTransition(true);
  };
 const resetterHandler = () => {
   setFormTransition(false);
 };
 return (
    <div className ="add-expense">
      {!formTransition && (<button onClick={transitionHandler}>Add New Expenses</button>)}
      {formTransition && (<ExpenseFormDa onNewExpense ={newExpenseHandler} resetEvent={resetterHandler} />)}
    </div>
 );
};

export default AddExpensesDa;