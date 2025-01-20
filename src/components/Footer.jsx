import React from 'react';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>Телефон: +7 (353) 123-45-67</p>
          <p>Email: info@moscow.ru</p>
        </div>
        <div>
          <nav className="space-x-6">
            <a href="#home" className="text-white">Главная</a>
            <a href="#registration" className="text-white">Регистрация</a>
            <a href="#profile" className="text-white">Личный кабинет</a>
            <a href="#about" className="text-white">О нас</a>
            <a href="#contact" className="text-white">Контакты</a>
            <a href="#excursions" className="text-white">Наши экскурсии</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;