import React, { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "../../components/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import ReactHelmet from "../../components/ReactHelmet/ReactHelmet";

const OrderFood = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initalIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initalIndex);
  const [menu] = useMenu();

  //   categories from json file
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <ReactHelmet title={"Order"}></ReactHelmet>
      <Cover
        img={orderCover}
        title={"Order Food"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <Tabs className={"my-20"} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList  className={"w-1/2 m-5 mx-auto text-center"}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
