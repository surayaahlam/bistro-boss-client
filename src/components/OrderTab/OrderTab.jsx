import React from "react";
import ItemsCard from "../../pages/Shared/ItemsCard/ItemsCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <ItemsCard
                key={item._id}
                heading={item.name}
                details={item.recipe}
                item = {item}
              ></ItemsCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
