import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import ButtonWithBottomBorder from "../../../components/ButtonWithBottomBorder/ButtonWithBottomBorder";
import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex justify-center text-center md:text-start items-center pb-20 pt-12 px-10 md:px-36">
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-3 mt-10 md:mt-0">
            <p>Dec 20, 2024</p>
            <p className="uppercase">Where Can I Get Some</p>
            <p>Welcome to a world where flavors come alive, and every dish tells a story. Our chefs combine the freshest ingredients with timeless recipes to create culinary masterpieces that delight your senses. From the first bite to the last, experience a journey of taste, texture, and aroma in a warm, inviting ambiance. Whether you're here for a casual meal or a special celebration, we're dedicated to making every moment unforgettable. Sit back, relax, and let us serve you the finest flavors crafted with passion and care</p>
            <ButtonWithBottomBorder content={"Order Now"} item={"salad"}></ButtonWithBottomBorder>
        </div>
      </div>
    </div>
  );
};

export default Featured;
