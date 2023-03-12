import React from "react";
import './ExpenseFilter.css';

const ExpenseFilterDa =(props) => {
    const ValueClickhandler = (event) =>{
        const valueClicked = event.target.value;
      //  console.log(valueClicked + 'this is before Lifting the state');
        props.onSelectedHandler(valueClicked);

    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select value={props.onInitialSetter} onChange={ValueClickhandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );

};

export default ExpenseFilterDa;