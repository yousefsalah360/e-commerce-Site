/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const Currency = "$";

  const DeliveryFee = 10;

  const [search, setSearch] = useState("");
  
  const [showSearch , setShowSearch] = useState(false);

  const Value = {
    products,
    Currency,
    DeliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={Value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
