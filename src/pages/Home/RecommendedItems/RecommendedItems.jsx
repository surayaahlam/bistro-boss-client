import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemsCard from "../../Shared/ItemsCard/ItemsCard";

const RecommendedItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recommendedItems = data.filter((item) => item.price === 12.9);
        setItems(recommendedItems);
      });
  }, []);

  return (
    <div className="my-20 w-11/12 lg:w-4/5 mx-auto">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="md:grid grid-cols-2 items-center justify-items-center gap-4">
        {
            items.map(item => <ItemsCard key={item._id} heading={item.name} details={item.recipe} image={item.image} item={item}></ItemsCard>)
        }
      </div>
    </div>
  );
};

export default RecommendedItems;
