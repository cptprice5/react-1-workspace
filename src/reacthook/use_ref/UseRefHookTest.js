import styles from './use_ref_hook_test.module.css';
import React from 'react';
import { useRef, useEffect, useCallback } from "react";

const UseRefHookTest = function(props) {
    const line1Ref = useRef(null);
    const simpleGlobalRef1 = useRef(null);
    console.log("simpleGlobalRef1.firstTimeValue: " + simpleGlobalRef1.firstTimeValue)
    if (!simpleGlobalRef1.firstTimeValue) {
        console.log("setting simpleGlobalRef1.firstTimeValue:")
        simpleGlobalRef1.firstTimeValue = 'first value for simpleGlobalRef1';
    }
    const callBackRef1 = useCallback(function(domElem) {
        var domRect = domElem.getBoundingClientRect();
        console.log("domRect of callBackRef1: ")
        console.log(domRect)
    });
    var printRefDetails = function(refObj) {
        console.log("printRefDetails function called");
        console.log("refObj")
        console.log(refObj)
        console.log("refObj.current: " + refObj.current)
        var domRect = refObj.current.getBoundingClientRect();
        console.log("domRect: ")
        console.log(domRect)
    }
    useEffect(function(){
        console.log("Use Effect function called");
        printRefDetails(line1Ref);
    })

    return (
        <div className={styles.CardContainer} >
            <div ref={line1Ref}> This is line 1 </div>
            <div ref={callBackRef1}> This is line 2 </div>
            <div> This is line 3 </div>
            <div> This is line 4 </div>
        </div>
    )
}

export default UseRefHookTest;