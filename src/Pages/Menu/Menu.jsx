import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
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

      {/* <Cover items={desserts} title="Desserts" img={dessertImg} /> */}
      <MenuCategory
        items={desserts}
        title="Desserts"
        img={dessertImg}
      ></MenuCategory>

      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
      {/* <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory> */}

      {/* <SectionTitle subHeading="Don't miss" heading="Todays Offer" />
      <PopularMenu /> */}
    </div>
  );
};

export default Menu;
