'use client';
import React, { useState } from 'react';

import Card from '../Card/Card';
import '../Catalog/Catalog.scss';

import img01 from '../../assets/img/card/fr-mobile2.png';
import img02 from '../../assets/img/card/fr-mobile1.png';
import img03 from '../../assets/img/card/fr-mobile3.png';
import img04 from '../../assets/img/card/fr-mobile4.png';
import img05 from '../../assets/img/card/fr-mobile5.png';
import img06 from '../../assets/img/card/fr-mobile6.png';
import img07 from '../../assets/img/card/gr-mobile1.png';
import img08 from '../../assets/img/card/gr-mobile2.png';
import img09 from '../../assets/img/card/gr-mobile3.png';
import img10 from '../../assets/img/card/gr-mobile4.png';
import img11 from '../../assets/img/card/gr-mobile5.png';
import img12 from '../../assets/img/card/gr-mobile6.png';
import img13 from '../../assets/img/card/en-mobile1.png';
import img14 from '../../assets/img/card/en-mobile2.png';
import img15 from '../../assets/img/card/en-mobile3.png';
import img16 from '../../assets/img/card/en-mobile4.png';
import img17 from '../../assets/img/card/en-mobile5.png';
import img18 from '../../assets/img/card/en-mobile6.png';

const products = [
  {
    imgSrc: img01,
    name: 'Марсель Руссо',
    title: 'Охота Амура',
    lithography: 'Холст, масло (50х80)',
    price: 14500,
    country: 'Франция',
  },
  {
    imgSrc: img02,
    name: 'Анри Селин',
    title: 'Дама с собачкой',
    lithography: 'Акрил, бумага (50х80)',
    price: 16500,
    country: 'Франция',
  },
  {
    imgSrc: img03,
    name: 'Франсуа Дюпон',
    title: 'Процедура',
    lithography: 'Цветная литография (40х60)',
    price: 20000,
    country: 'Франция',
  },
  {
    imgSrc: img04,
    name: 'Луи Детуш',
    title: 'Роза',
    lithography: 'Бумага, акрил (50х80)',
    price: 12000,
    country: 'Франция',
  },
  {
    imgSrc: img05,
    name: 'Франсуа Дюпон',
    title: 'Птичья трапеза',
    lithography: 'Цветная литография (40х60)',
    price: 22500,
    country: 'Франция',
  },
  {
    imgSrc: img06,
    name: 'Пьер Моранж',
    title: 'Пейзаж с рыбой',
    lithography: 'Цветная литография (40х60)',
    price: 20000,
    country: 'Франция',
  },
  {
    imgSrc: img07,
    name: 'Курт Вернер',
    title: 'Над городом',
    lithography: 'Цветная литография (40х60)',
    price: 16000,
    country: 'Германия',
  },
  {
    imgSrc: img08,
    name: 'Макс Рихтер',
    title: 'Птенцы',
    lithography: 'Холст, масло (50х80) ',
    price: 14500,
    country: 'Германия',
  },
  {
    imgSrc: img09,
    name: 'Мартин Майер',
    title: 'Среди листьев',
    lithography: 'Цветная литография (40х60)',
    price: 20000,
    country: 'Германия',
  },
  {
    imgSrc: img10,
    name: 'Герман Беккер',
    title: 'Яркая птица',
    lithography: 'Цветная литография (40х60)',
    price: 13000,
    country: 'Германия',
  },
  {
    imgSrc: img11,
    name: 'Вульф Бауэр',
    title: 'Дятлы',
    lithography: 'Бумага, акрил (50х80)',
    price: 20000,
    country: 'Германия',
  },
  {
    imgSrc: img12,
    name: 'Вальтер Хартманн',
    title: 'Большие воды',
    lithography: 'Бумага, акрил (50х80)',
    price: 23000,
    country: 'Германия',
  },
  {
    imgSrc: img13,
    name: 'Пол Смит',
    title: 'Дикий зверь',
    lithography: 'Цветная литография (40х60)',
    price: 17500,
    country: 'Англия',
  },
  {
    imgSrc: img14,
    name: 'Джим Уотсон',
    title: 'Река и горы',
    lithography: 'Акварель, бумага (50х80)',
    price: 20500,
    country: 'Англия',
  },
  {
    imgSrc: img15,
    name: 'Вальтер Хартманн',
    title: 'Большие воды',
    lithography: 'Бумага, акрил (50х80)',
    price: 23000,
    country: 'Англия',
  },
  {
    imgSrc: img16,
    name: 'Юджин Зиллион',
    title: 'Белый попугай',
    lithography: 'Цветная литография (40х60)',
    price: 15500,
    country: 'Англия',
  },
  {
    imgSrc: img17,
    name: 'Эрик Гиллман',
    title: 'Ночная рыба',
    lithography: 'Бумага, акрил (50х80)',
    price: 12500,
    country: 'Англия',
  },
  {
    imgSrc: img18,
    name: 'Альфред Барр',
    title: 'Рыжий кот',
    lithography: 'Цветная литография (40х60)',
    price: 21000,
    country: 'Англия',
  },
];

const Catalog = () => {
  const [country, setCountry] = useState('Франция');

  const handleCountryClick = (newCountry) => {
    setCountry(newCountry);
  };

  const filteredProducts = products.filter((product) => product.country === country);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__top">
            <h2 className="catalog__title">Репродукции</h2>
            <ul className="catalog__menu">
              <li className="catalog__item">
                <button
                  className={`button-tabs ${country === 'Франция' ? 'button-tabs--active' : ''}`}
                  onClick={() => handleCountryClick('Франция')}
                >
                  Франция
                </button>
              </li>
              <li className="catalog__item">
                <button
                  className={`button-tabs ${country === 'Германия' ? 'button-tabs--active' : ''}`}
                  onClick={() => handleCountryClick('Германия')}
                >
                  Германия
                </button>
              </li>
              <li className="catalog__item">
                <button
                  className={`button-tabs ${country === 'Англия' ? 'button-tabs--active' : ''}`}
                  onClick={() => handleCountryClick('Англия')}
                >
                  Англия
                </button>
              </li>
            </ul>
          </div>
          <div className="catalog__list">
            <div className="catalog__wrapper">
              {filteredProducts.map((product, index) => (
                <article className="catalog__product" key={index}>
                  <Card
                    imgSrc={product.imgSrc}
                    name={product.name}
                    title={product.title}
                    lithography={product.lithography}
                    price={product.price}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
