import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>

      <Cover img={menuImg} title="our menu" />
      <MenuCategory items={offered}></MenuCategory>

      {/* <SectionTitle subHeading="Don't miss" heading="Todays Offer" />
      <PopularMenu /> */}
    </div>
  );
};

export default Menu;
