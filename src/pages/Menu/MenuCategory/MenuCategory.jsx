import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({ items, heading, subTitle, coverImg }) => {
  return (
    <div className="mb-10">
      {heading && <Cover
        img={coverImg}
        title={heading}
        description={subTitle}
      ></Cover>}
      <div className="grid md:grid-cols-2 gap-8 mt-16 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
