import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseFormDa =(props) =>{
    //Multi state approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
   //Single state approach
    // const [userInput,setUserInput] =useState({
    //     enteredTitle :'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleEventHandler = (event) =>{
       // Single state BEst approach
        // setUserInput((prevState)=>{
        //     return({
        //         ...prevState,
        //         enteredTitle:event.target.value
        //     });
        // });

    // SIngle basic approach  setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    //   });
      setEnteredTitle(event.target.value);
    };
    const amountEventHandler = (event) =>{
       //SIngle state Best Approach
        // setUserInput((prevState)=>{
        //     return({
        //         ...prevState,
        //         enteredAmount:event.target.value
        //     });
        // });

    //    setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    //    });
         setEnteredAmount(event.target.value);
    };
    const dateEventHandler = (event) =>{
        //Single state BEST Approach
        // setUserInput((prevState)=>{
        //     return({
        //         ...prevState,
        //         enteredDate:event.target.value
        //     });
        // });

        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        //    });
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate),
        };
        props.onNewExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                     <label>Title</label>
                     <input type='text' value={enteredTitle} onChange={titleEventHandler} />
                </div>
                <div className="new-expense__control">
                     <label>Amount</label>
                     <input type='number' min= '0.01' step= '0.01' value={enteredAmount} onChange={amountEventHandler} />
                </div>
                <div className="new-expense__control">
                     <label>Date</label>
                     <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateEventHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.resetEvent}>Cancel</button>
                <button type='submit' >Add Expense</button>
             </div>

        </form>

    );

};

export default ExpenseFormDa;