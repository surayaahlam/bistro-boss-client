import React from "react";
import "./BistroSection.css";

const BistroSection = () => {
  return (
    <div className="bistro-section bg-fixed p-12 md:p-36">
      <div className=" bg-white space-y-3 p-6 md:p-28 text-black rounded-lg">
        <h1 className="font-bold text-3xl md:text-5xl text-center">
          Bistro Boss
        </h1>
        <p className="text-center">
          Welcome to Bistro Boss, where culinary artistry meets exceptional
          flavors! Our passion for food drives us to craft dishes that delight
          your senses and create memorable dining experiences. Whether you're
          stopping by for a quick bite or a leisurely meal, Bistro Boss is your
          destination for fresh ingredients, warm ambiance, and unforgettable
          taste. Come and experience the boss of all bistros!
        </p>
      </div>
    </div>
  );
};

export default BistroSection;
