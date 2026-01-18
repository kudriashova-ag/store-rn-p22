import { createContext, useReducer } from "react";
import CartReducer from "../contexts/CartReducer";
import useStorage from "../hooks/useStorage";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(CartReducer, []);

  useStorage("cart", items, dispatch, "SET_CART");

  const totalCount = items.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const isInCart = (id) => items.some((item) => item.id === id);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const RemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const IncrementCount = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const DecrementCount = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
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
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;




