import styles from './use_memo_hook_test.module.css';
import React from 'react';
import { useState, useMemo } from "react";


const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemoHookTest = function(props) {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo( function() {
    expensiveCalculation(count);
  }, [count]);

  const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div className={styles.CardContainer} > UseMemoHookTest hook card content
        <div>
              <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                  return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
              </div>
              <hr />
              <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
              </div>
            </div>
        </div>
    )
}

export default UseMemoHookTest;