import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import AuthForm from "./components/AuthForm";
import About from "./components/About";
import ExcursionsList from "./components/ExcursionsList";
import SearchBar from "./components/SearchBar";
import Reviews from "./components/Reviews";
import SubscriptionForm from "./components/SubscriptionForm";
import Footer from "./components/Footer";

const excursions = [
  {
    title: "Экскурсия по Красной площади",
    image:
      "https://www.advantour.com/russia/images/moscow/moscow_red-square1.jpg",

    shortDescription:
      "Погрузитесь в историю России и узнайте больше о главной площади Москвы.",
    rating: 4.8,
    duration: 2,
  },
  {
    title: "Тур по Кремлю",
    image:
      "https://mosartcentre.ru/wp-content/uploads/2023/04/ekskursionnyy-dvukhetazhnyy-avtobus.jpg",
    shortDescription:
      "Узнайте секреты Московского Кремля и его историческое значение.",
    rating: 4.9,
    duration: 3,
  },
  {
    title: "Московский метро-тур",
    image:
      "https://moscowexcursion.com/wp-content/uploads/2017/03/ekskursii-v-moskovskom-metro.jpg",
    shortDescription:
      "Откройте для себя уникальные станции московского метро, которые являются произведениями искусства.",
    rating: 4.7,
    duration: 1.5,
  },
  {
    title: "Прогулка по ВДНХ",
    image:
      "https://vdnh.ru/upload/resize_cache/iblock/159/1000_1000_1/159894d1bbc7003d96daedaf0886d1dc.jpg",
    shortDescription:
      "Исследуйте историю ВДНХ и её архитектуру. Увидьте павильоны и памятники, уникальные для Москвы.",
    rating: 4.6,
    duration: 2.5,
  },
  {
    title: "Тур по Третьяковской галерее",
    image:
      "https://img.magput.ru/pics/large/284a13f2-1ed1-4803-a600-acbefb87c472.jpg",
    shortDescription:
      "Погрузитесь в мир искусства и откройте для себя лучшие произведения русской живописи.",
    rating: 4.8,
    duration: 2,
  },
  {
    title: "Поездка по Золотому кольцу",
    image:
      "https://sobor.spb.ru/wp-content/uploads/2019/07/11-1.jpg",
    shortDescription:
      "Отправьтесь в увлекательный тур по старинным городам России, часть Золотого кольца.",
    rating: 4.7,
    duration: 7,
  },
];
const reviews = [
  {
    authorName: "Иван Иванов",
    authorImage: "https://images.unsplash.com/photo-1572406940535-05adf6a92425",
    text: "Экскурсия по Кремлю была потрясающей! Очень понравился гид и сам маршрут. История Москвы ожила перед нами.",
    date: "2024-09-15",
  },
  {
    authorName: "Анна Смирнова",
    authorImage: "https://images.unsplash.com/photo-1521747116042-5e14e8e0b6c4",
    text: "Тур по Третьяковской галерее оставил невероятные впечатления. Все картины и экспонаты показаны с интересными фактами.",
    date: "2024-08-22",
  },
  {
    authorName: "Мария Петрова",
    authorImage: "https://images.unsplash.com/photo-1521131414287-3b5f760ac98e",
    text: "Метро-тур в Москве оказался настоящим открытием. Я даже не знала, что в метро могут быть такие красоты!",
    date: "2024-07-30",
  },
  {
    authorName: "Алексей Борисов",
    authorImage: "https://images.unsplash.com/photo-1601758123927-2ad7d7d39ed0",
    text: "Прогулка по ВДНХ была очень познавательной и интересной. Весь день пролетел как один миг!",
    date: "2024-06-10",
  },
  {
    authorName: "Дмитрий Михайлов",
    authorImage: "https://images.unsplash.com/photo-1563225701-30a99d94809b",
    text: "Очень крутой тур по ночной Москве! Гид рассказывал много интересных историй, и виды на город в темное время суток просто завораживают.",
    date: "2024-05-05",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Slider excursions={excursions} />
      <About />
      <ExcursionsList excursions={excursions} />
      {/* <SearchBar /> */}
      {/* <Reviews reviews={reviews} /> */}
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default App;
