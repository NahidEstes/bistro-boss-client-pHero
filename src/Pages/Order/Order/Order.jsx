import React, { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import FoodCard from "../../../Component/SectionTitle/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  console.log("initial Index", initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log("menu:", menu);
  console.log(category);
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  //   const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Cover img={orderCover} title="Order Food" />
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="mt-8"
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>

        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>

      {/* <div className="tabs">
        <a className="tab tab-lifted">Tab 1</a>
        <a className="tab tab-lifted tab-active">Tab 2</a>
        <a className="tab tab-lifted">Tab 3</a>
      </div> */}
    </div>
  );
};

export default Order;
