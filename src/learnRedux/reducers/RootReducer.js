import { combineReducers } from 'redux';
import cartReducer from './cartdata/CartReducer';
import userReducer from './userdata/UserReducer';
import InitialAppState from '../InitialState';

const learnReduxReducer = function(state = InitialAppState, action) {
    console.log("learnReduxReducer called with action.type: " + action.type);
    console.log("learnReduxReducer called with state: ", state);
    if (action.type == 'INCREMENT_COUNTER1') {
        return {
            ...state,
            commonCounter1: state.commonCounter1 + 1
        }
    }
    return state;
}

const rootReducer = combineReducers ({
   learnRedux: learnReduxReducer,
   cart: cartReducer,
   user: userReducer,
});

export default rootReducer;