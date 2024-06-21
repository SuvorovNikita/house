'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../Header/Header.scss';

import logo from '@/assets/img/logo.svg';
import cart from '@/assets/img/cart.svg';
import menu from '@/assets/img/menu.svg';
import close from '@/assets/img/close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <Image src={logo} alt="Логотип" className="logo" />
          </div>
          <div className="header__right">
            <nav className="nav">
              <ul className="list-reset nav__list">
                <li className="nav__item">
                  <Link href="#catalog" className="nav__link">
                    Репродукции
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="#newbies" className="nav__link">
                    Новинки
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="#about" className="nav__link">
                    О нас
                  </Link>
                </li>
              </ul>
            </nav>
            <Link href="#" className="cart" aria-label="Переход в корзину">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3:994)">
                  <path
                    d="M9.25001 21.1667C9.75627 21.1667 10.1667 20.7563 10.1667 20.25C10.1667 19.7438 9.75627 19.3334 9.25001 19.3334C8.74375 19.3334 8.33334 19.7438 8.33334 20.25C8.33334 20.7563 8.74375 21.1667 9.25001 21.1667Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M19.3333 21.1667C19.8396 21.1667 20.25 20.7563 20.25 20.25C20.25 19.7438 19.8396 19.3334 19.3333 19.3334C18.8271 19.3334 18.4167 19.7438 18.4167 20.25C18.4167 20.7563 18.8271 21.1667 19.3333 21.1667Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M1.91666 1.91663H5.58332L8.03999 14.1908C8.12381 14.6128 8.35341 14.9919 8.68857 15.2617C9.02374 15.5315 9.44313 15.6749 9.87332 15.6666H18.7833C19.2135 15.6749 19.6329 15.5315 19.9681 15.2617C20.3032 14.9919 20.5328 14.6128 20.6167 14.1908L22.0833 6.49996H6.49999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3:994">
                    <rect width="22" height="22" fill="white" transform="translate(1 1)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          <nav className="mobile-menu">
            <div className="mobile-menu__inner">
              <div className="header-menu__left">
                <Link className="mobile-menu__button" href="#" onClick={handleMenuClick}>
                  <Image src={menu} alt="menu" />
                </Link>
                {isMenuOpen && (
                  <div
                    className={`mobile-menu__content ${
                      isMenuOpen ? 'mobile-menu__content--visible' : ''
                    }`}
                  >
                    <ul className="mobile-menu__list">
                      <li className="mobile-menu__item">
                        <Link className="mobile-menu__link" href="#" onClick={handleMenuClose}>
                          <Image src={close} alt="Закрыть меню" />
                        </Link>
                      </li>
                      <li className="mobile-menu__item">
                        <Link className="mobile-menu__link" href="#catalog">
                          Репродукции
                        </Link>
                      </li>
                      <li className="mobile-menu__item">
                        <Link className="mobile-menu__link" href="#newbies">
                          Новинки
                        </Link>
                      </li>
                      <li className="mobile-menu__item">
                        <Link className="mobile-menu__link" href="#about">
                          О Нас
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="header-menu__right">
                <Link className="mobile-menu__button" href="#" aria-label="Переход в корзину">
                  <Image src={cart} alt="cart" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
