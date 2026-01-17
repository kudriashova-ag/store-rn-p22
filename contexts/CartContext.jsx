import { createContext, useReducer } from "react";
import CartReducer from "../contexts/CartReducer";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(CartReducer, []);

  const totalCount = items.reduce((total, item) => {
    return total + item.count;
  }, 0);

  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const RemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const IncrementCount = (id) => {
    dispatch({ type: "INCREMENT_COUNT", payload: id });
  };

  const DecrementCount = (id) => {
    dispatch({ type: "DECREMENT_COUNT", payload: id });
  };

  const ClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalCount,
        totalPrice,
        addToCart,
        RemoveFromCart,
        IncrementCount,
        DecrementCount,
        ClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
