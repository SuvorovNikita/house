'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';

import Image from 'next/image';
import '../Header/Header.scss';

import logo from '@/assets/img/logo.svg';
import cartIcon from '@/assets/img/cart.svg';
import menu from '@/assets/img/menu.svg';
import close from '@/assets/img/close.svg';

const Header = ({ cart }) => {
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
                  <Link to="catalog" className="nav__link" spy={true} smooth={true} duration={500}>
                    Репродукции
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="newbies" className="nav__link" spy={true} smooth={true} duration={500}>
                    Новинки
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="about" className="nav__link" spy={true} smooth={true} duration={500}>
                    О нас
                  </Link>
                </li>
              </ul>
            </nav>
            <Link to="#" className="cart" aria-label="Переход в корзину">
              <Image src={cartIcon} alt="cart" />
              {cart.length > 0 && <span className="cart__count">{cart.length}</span>}
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
                        <Link className="mobile-menu__link" to="#" onClick={handleMenuClose}>
                          <Image src={close} alt="Закрыть меню" />
                        </Link>
                      </li>
                      <li className="mobile-menu__item">
                        <Link
                          className="mobile-menu__link"
                          to="catalog"
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={handleMenuClose}
                        >
                          Репродукции
                        </Link>
                      </li>
                      <li className="mobile-menu__item">
                        <Link
                          className="mobile-menu__link"
                          to="newbies"
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={handleMenuClose}
                        >
                          Новинки
                        </Link>
                      </li>
                      <li className="mobile-menu__item">
                        <Link
                          className="mobile-menu__link"
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={handleMenuClose}
                        >
                          О Нас
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="header-menu__right">
                <Link className="mobile-menu__button" href="#" aria-label="Переход в корзину">
                  <Image src={cartIcon} alt="cart" />
                  {cart.length > 0 && <span className="mobile-menu__count">{cart.length}</span>}
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
