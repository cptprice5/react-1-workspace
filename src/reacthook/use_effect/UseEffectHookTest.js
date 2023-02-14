import styles from './use_effect_hook_test.module.css';
import React from 'react';

const UseEffectHookTest = function(props) {
    var [dependentValue1, setDependentValue1] = React.useState('some value 1');
    var [dependentValue2, setDependentValue2] = React.useState('some value 2');

    //React hook without any dependency
    React.useEffect(function(){
        console.log("Hook1 without any dependency called")
        return function() {
            console.log('Hook1 destructor function called')
        }
    });
    //React hook without any dependency
    React.useEffect(function(){
        console.log("Hook2 without any dependency called")
        return function() {
            console.log('Hook2 destructor function called')
        }
    });

    //React depending on empty array - runs only one time
    React.useEffect(function(){
        console.log("Hook3 with empty [] array as dependency")
        return function() {
            console.log("Hook3 destructor empty [] array as dependency")
        }
    }, []);

    //React hook using dependency
    React.useEffect(function(){
        console.log("Hook4: [dependentValue1, dependentValue2, localFuncVar1]")
        return function() {
            console.log("Hook4 destructor: [dependentValue1, dependentValue2, localFuncVar1]")
        }
    }, [dependentValue1, dependentValue2]);

    console.log("Setting timeout");
    setTimeout(() => {
        console.log("Set timeout called inside UseEffectHookTest: pos 1");
        setDependentValue1('new value for dependentValue1')
        //localFuncVar1 = 'new localFuncVar1'
        //console.log("Set timeout called inside UseEffectHookTest: pos 2 localFuncVar1:" + localFuncVar1);
    }, 5000)


    console.log("UseEffectHookTest render phase called")
	return (
		<div className={styles.CardContainer} > UseEffectHookTest hook card content </div>
	)
}

export default UseEffectHookTest;