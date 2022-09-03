import React from "react";
import { useState } from "react";
import FilterBtn from "./FilterBtn";
import FoodData from "./FoodData";
import MenuItems from "./MenuItems";

const allcateval = [...new Set(FoodData.map((cVal) => cVal.category)), "all"];

const Gallery = () => {
  const [item, setItem] = useState(FoodData);
  const [catebtn,setCatbtn] =useState(allcateval)

  const filterItem = (cateItem) => {

    if (cateItem === 'all'){
        setItem(FoodData);
        return;
    }

    const updateItem = FoodData.filter((curval) => {
      return curval.category === cateItem;
    });
    setItem(updateItem);
  };

  return (
    <>
      <h1 className="mt-1 text-center main-heading ">
        Order your favourite Dish
      </h1>
      <hr />
      {/* menu btn display here */}
      <FilterBtn filterItem={filterItem} catebtn={catebtn}/>
      {/* Menu items dispkay here */}
      <MenuItems items={item} />
    </>
  );
};

export default Gallery;
