/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const Currency = "$";

  const DeliveryFee = 10;

  const [search, setSearch] = useState("");
  
  const [showSearch, setShowSearch] = useState(false);
  
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {

    if (!size) {
      toast.error("Please select a size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }else{
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  }
  
  const getCartCount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += cartItems[items][item];
          }
        }
        catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  }

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  }

  const Value = {
    products,
    Currency,
    DeliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity,
    getTotalCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={Value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
