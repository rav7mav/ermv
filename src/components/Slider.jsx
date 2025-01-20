// src/components/Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Импорт стилей Swiper

const Slider = ({ excursions }) => {
  return (
    <div className="w-full mt-4 h-full bg-[#f3f3f3] mx-auto container max-w-[1440px]">
      <Swiper
        spaceBetween={30} // Расстояние между слайдами
        slidesPerView={1} // Количество слайдов, видимых одновременно
        navigation // Кнопки навигации (вперед/назад)
        pagination={{ clickable: true }} // Пагинация с кликабельными точками
        loop // Зацикливание слайдов
        className="bg-[#f3f3f3]"
      >
        {excursions.map((excursion, index) => (
          <SwiperSlide key={index}>
            <img
              src={excursion.image}
              alt={excursion.title}
              className="w-full h-[300px] md:h-[600px] object-cover rounded-t-[30px]"
            />
            <div className="p-4 bg-white rounded-b-[30px]">
              <h3 className="font-bold text-xl">{excursion.title}</h3>
              <p>{excursion.shortDescription}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★ {excursion.rating}</span>
                <button className="ml-4 bg-blue-500 text-white py-1 px-4 rounded">
                  Далее
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
