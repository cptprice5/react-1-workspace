const impl = function(state = null, action) {
    console.log("cart reducer func1 called with action.type: " + action.type);
    if (action.type == 'ADD_ITEM_TO_CART') {
        return {
            ...state,
            cartItems: state.cartItems.concat(action.newItem)
        }
    }
    return state;
}

export default impl;