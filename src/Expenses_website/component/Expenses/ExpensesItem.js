import React from 'react';
import './ExpenseItem.css';
import ExpenseDateDa from './ExpenseDate';
import Card from '../UI/Card';



const ExpenseItemDa = (props) => {
    return (<li>
        <Card className='expense-item'>
            <ExpenseDateDa dateStamp = {props.endru} />
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className='expense-item__price'>${props.evalavu}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItemDa;