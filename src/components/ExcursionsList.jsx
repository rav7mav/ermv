import React from "react";

const ExcursionsList = ({ excursions }) => {
  return (
    <section id="excursions" className="py-16 bg-white rounded-b-[100px]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {excursions.map((excursion, index) => (
          <div
            key={index}
            className="group bg-blue-50 border border-gray-300 p-6 rounded-lg cursor-pointer duration-150 ease-in-out hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={excursion.image}
                alt={excursion.title}
                className="w-full h-40 object-cover mb-4 rounded-lg group-hover:scale-125 duration-150 ease-in-out"
              />
            </div>
            <h3 className="font-bold text-xl">{excursion.title}</h3>
            <p>{excursion.shortDescription}</p>
            <p>Продолжительность: {excursion.duration} ч</p>
            <p>Рейтинг: {excursion.rating} ★</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Забронировать
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExcursionsList;
