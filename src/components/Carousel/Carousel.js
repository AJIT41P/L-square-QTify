import "./Carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Carousel({ data, renderComponent }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={7}
      breakpoints={{
        320: {
          slidesPerView: 2
        },

        480: {
          slidesPerView: 3
        },

        768: {
          slidesPerView: 4
        },

        1024: {
          slidesPerView: 6
        }
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;