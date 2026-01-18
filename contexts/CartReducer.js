const CartReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CART':
            return action.payload;
        
        case 'ADD_TO_CART':
            const existingItem = state.find(item => item.id === action.payload.id);

            if(existingItem) {
                return state.map(item=> item.id === existingItem.id ? {...item, qty: item.qty + 1} : item);
            }
            
            // action.payload.qty = 1;
            // return [...state, action.payload];
            return [...state, { ...action.payload, qty: 1 }];
        
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        
        case 'CLEAR_CART':
            return [];
        
        case 'INCREMENT_QUANTITY':
            return state.map(item => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item);
        
        case 'DECREMENT_QUANTITY':
            return state
                .map(item => item.id === action.payload ? { ...item, qty: item.qty - 1 } : item)
                .filter(item => item.qty > 0);
        
        default:
            return state;
    }
};

export default CartReducer;