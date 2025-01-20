import React from "react";
import { Link as LinkScroll } from "react-scroll";
import logo from "/header/Logo.svg";
const Header = () => {
  return (
    <header className="bg-white top-0 p-4 shadow-md sticky z-[999999]">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Московские экскурсии" className="w-32" />
        <nav
          aria-label="Основная навигация"
          className="flex justify-center items-center gap-5"
        >
          <ul className="flex items-center space-x-6 text-purple-600">
            <li>
              <LinkScroll
                to="about"
                smooth={true}
                duration={300}
                className="cursor-pointer underline-offset-4 text-purple-500"
              >
                О нас
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="contacts"
                smooth={true}
                duration={300}
                className="cursor-pointer underline-offset-4 text-purple-500"
              >
                Контакты
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="reviews"
                smooth={true}
                duration={300}
                className="cursor-pointer underline-offset-4 text-purple-500"
              >
                Наши экскурсии
              </LinkScroll>
            </li>
            <li className="cursor-pointer">
              <form action="#" method="get">
                <input
                  type="text"
                  placeholder="Поиск"
                  className="px-4 py-2 border-2 border-purple-300 outline-2 outline-purple-500 text-purple-500  rounded-full"
                  aria-label="Поиск по сайту"
                />
              </form>
            </li>
          </ul>
          <ul className="flex justify-between items-center font-bold gap-3">
            <li className="cursor-pointer text-lg text-purple-500  border-4 hover:border-purple-500 border-white px-2 py-1 rounded-xl">
              <a>Вход</a>
            </li>
            <li className="cursor-pointer text-lg text-white px-2 py-1 border-4 border-purple-500 bg-purple-500 rounded-xl hover:text-purple-500 hover:bg-opacity-0 underline-offset-4">
              <a>Регистрация</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
