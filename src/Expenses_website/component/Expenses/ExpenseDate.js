import React from 'react';
import './ExpenseDate.css';

function ExpenseDateDa (props){
    const month = props.dateStamp.toLocaleString('en-US', { month: 'long'});
    const year = props.dateStamp.getFullYear();
    const day = props.dateStamp.toLocaleString('en-US', { day: '2-digit'});
    return (
        <div className ="expense-date">
            <div className = "expense-date__month">{month}</div>
            <div className = "expense-date__year">{year}</div>
            <div className = "expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDateDa;