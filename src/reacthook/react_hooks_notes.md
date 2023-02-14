React hooks
===========
1. useState +++
2. useEffect +++
3. useContext ++
4. useReducer +++
5. useCallback +++
6. useMemo ++++
7. useRef +++
8. 

useState:
=========
syntax
1. const [firstName, setFirstNameFunc] = useState("Initial value")
2. const [bigStateObj, setBigStateFunc] = useState({ key1: val1})

setFirstNameFunc((previousValue) => {
    return {
        ...previousValue,
        //new value if any
    }
})


useEffect:
==========


Links:
======
1. Hooks Ref: https://reactjs.org/docs/hooks-reference.html
