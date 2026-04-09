import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useState } from "react";
import { useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";

function Product() {
  const { productId } = useParams();
  const { products, Currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity duration-500 ease-in opacity-100">
      {/*product data*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*product images*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal">
            {productData.image.map((item, index) => {
              return (
                <img
                  onClick={() => {
                    setImage(item);
                  }}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  key={index}
                  src={item}
                  alt=""
                />
              );
            })}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/*product info*/}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="text-3xl font-medium mt-5">
            {Currency}
            {productData.price}
          </p>
          <p className="text-gray-500 mt-5 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>SELECT SIZE</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}
                    onClick={() => {
                      setSize(item);
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-full active:bg-gray-700">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
