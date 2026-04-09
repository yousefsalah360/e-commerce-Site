/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useContext, useState, useEffect } from "react";
import ProductItem from "../components/productItem";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/title";

function Collection() {
  const { products , search , showSearch} = useContext(ShopContext);

  const [filter, setFilter] = useState(false);

  const [collection, setCollection] = useState([]);

  const [category, setCategory] = useState([]);

  const [type, setType] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleType = (e) => {
    if (type.includes(e.target.value)) {
      setType((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setType((prev) => [...prev, e.target.value]);
    }
  };

  const filterProducts = () => {
    let filteredProducts = products.slice();

    if(showSearch && search){
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        category.includes(item.category),
      );
    }

    if (type.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        type.includes(item.subCategory),
      );
    }

    setCollection(filteredProducts);
  };

  const sortProducts = (e) => {
    let sortedProducts = [...collection];

    if (e.target.value === "low - high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "high - low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setCollection(sortedProducts);
  };

  useEffect(() => {
    setCollection(products);
  }, []);

  useEffect(() => {
    filterProducts();
  }, [category, type , search , showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*filter*/}
      <div className="min-w-60">
        <p
          onClick={() => setFilter(!filter)}
          className="my-2 text-xl flex items-center gap-2 cursor-pointer"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${filter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/*category filters*/}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${filter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/*TYPE*/}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${filter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleType}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleType}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleType}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/*product display*/}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTION" />

          {/*product sort*/}

          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={sortProducts}
          >
            <option value="relevant">sort by: relevant</option>
            <option value="low - high">sort by: low - high</option>
            <option value="high - low">sort by: high - low</option>
          </select>
        </div>

        {/*products map*/}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-6">
          {collection.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
