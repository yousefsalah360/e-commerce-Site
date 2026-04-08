/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const Currency = "$";

  const DeliveryFee = 10;

  const Value = {
    products,
    Currency,
    DeliveryFee,
  };

  return (
    <ShopContext.Provider value={Value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
