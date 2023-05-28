import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      <PopularMenu />

      <Cover img={menuImg} title="our menu" />
      <PopularMenu />

      <Cover img={menuImg} title="our menu" />
      <PopularMenu />
    </div>
  );
};

export default Menu;
