import React from "react";

const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img className="w-[80px] rounded-full rounded-tl-none" src={image} alt={`${name} image`} />
      <div>
        <h3 className="uppercase">{name} ---------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
