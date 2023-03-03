const impl = function(state = null, action) {
    console.log("user reducer func1 called with action.type: " + action.type);
    if (action.type == 'SET_USER_NAME') {
        return {
            ...state,
            username: action.newUserName
        }
    }
    return state;
}

export default impl;