import React from "react";
import { Element } from "react-scroll";
const Reviews = ({ reviews }) => {
  return (
    <Element name="reviews">
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Отзывы клиентов
          </h2>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {reviews.map((review, index) => (
                <div key={index} className="swiper-slide text-center">
                  <img
                    src={review.authorImage}
                    alt={review.authorName}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <p>{review.text}</p>
                  <p className="font-bold">{review.authorName}</p>
                  <p>{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>{" "}
    </Element>
  );
};

export default Reviews;
