import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        className="w-[100px]"
        alt=""
      />
      <div>
        <h3>{name}</h3>
        <p>{recipe}</p>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
