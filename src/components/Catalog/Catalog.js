'use client';
import React, { useState } from 'react';

import Card from '../Card/Card';
import '../Catalog/Catalog.scss';

import img01 from '@/assets/img/card/fr-1.png';
import img02 from '@/assets/img/card/fr-2.png';
import img03 from '@/assets/img/card/fr-3.png';
import img04 from '@/assets/img/card/fr-4.png';
import img05 from '@/assets/img/card/fr-5.png';
import img06 from '@/assets/img/card/fr-6.png';

const products = [
  {
    src: img01,
    width: 310,
    height: 500,
    name: 'Марсель Руссо',
    title: 'Охота Амура',
    lithography: 'Холст, масло (50х80)',
    price: 14500,
    country: 'Франция',
  },
  {
    src: img02,
    width: 310,
    height: 420,
    name: 'Анри Селин',
    title: 'Дама с собачкой',
    lithography: 'Акрил, бумага (50х80)',
    price: 16500,
    country: 'Франция',
  },
  {
    src: img03,
    width: 310,
    height: 420,
    name: 'Франсуа Дюпон',
    title: 'Процедура',
    lithography: 'Цветная литография (40х60)',
    price: 20000,
    country: 'Франция',
  },
  {
    src: img04,
    width: 310,
    height: 420,
    name: 'Луи Детуш',
    title: 'Роза',
    lithography: 'Бумага, акрил (50х80)',
    price: 12000,
    country: 'Франция',
  },
  {
    src: img05,
    width: 310,
    height: 420,
    name: 'Франсуа Дюпон',
    title: 'Птичья трапеза',
    lithography: 'Цветная литография (40х60)',
    price: 22500,
    country: 'Франция',
  },
  {
    src: img06,
    width: 310,
    height: 420,
    name: 'Пьер Моранж',
    title: 'Пейзаж с рыбой',
    lithography: 'Цветная литография (40х60)',
    price: 20000,
    country: 'Франция',
  },
  // {
  //   imgSrc: img07,
  //   name: 'Курт Вернер',
  //   title: 'Над городом',
  //   lithography: 'Цветная литография (40х60)',
  //   price: 16000,
  //   country: 'Германия',
  // },
  // {
  //   imgSrc: img08,
  //   name: 'Макс Рихтер',
  //   title: 'Птенцы',
  //   lithography: 'Холст, масло (50х80) ',
  //   price: 14500,
  //   country: 'Германия',
  // },
  // {
  //   imgSrc: img09,
  //   name: 'Мартин Майер',
  //   title: 'Среди листьев',
  //   lithography: 'Цветная литография (40х60)',
  //   price: 20000,
  //   country: 'Германия',
  // },
  // {
  //   imgSrc: img10,
  //   name: 'Герман Беккер',
  //   title: 'Яркая птица',
  //   lithography: 'Цветная литография (40х60)',
  //   price: 13000,
  //   country: 'Германия',
  // },
  // {
  //   imgSrc: img11,
  //   name: 'Вульф Бауэр',
  //   title: 'Дятлы',
  //   lithography: 'Бумага, акрил (50х80)',
  //   price: 20000,
  //   country: 'Германия',
  // },
  // {
  //   imgSrc: img12,
  //   name: 'Вальтер Хартманн',
  //   title: 'Большие воды',
  //   lithography: 'Бумага, акрил (50х80)',
  //   price: 23000,
  //   country: 'Германия',
  // },
  // {
  //   imgSrc: img13,
  //   name: 'Пол Смит',
  //   title: 'Дикий зверь',
  //   lithography: 'Цветная литография (40х60)',
  //   price: 17500,
  //   country: 'Англия',
  // },
  // {
  //   imgSrc: img14,
  //   name: 'Джим Уотсон',
  //   title: 'Река и горы',
  //   lithography: 'Акварель, бумага (50х80)',
  //   price: 20500,
  //   country: 'Англия',
  // },
  // {
  //   imgSrc: img15,
  //   name: 'Вальтер Хартманн',
  //   title: 'Большие воды',
  //   lithography: 'Бумага, акрил (50х80)',
  //   price: 23000,
  //   country: 'Англия',
  // },
  // {
  //   imgSrc: img16,
  //   name: 'Юджин Зиллион',
  //   title: 'Белый попугай',
  //   lithography: 'Цветная литография (40х60)',
  //   price: 15500,
  //   country: 'Англия',
  // },
  // {
  //   imgSrc: img17,
  //   name: 'Эрик Гиллман',
  //   title: 'Ночная рыба',
  //   lithography: 'Бумага, акрил (50х80)',
  //   price: 12500,
  //   country: 'Англия',
  // },
  // {
  //   imgSrc: img18,
  //   name: 'Альфред Барр',
  //   title: 'Рыжий кот',
  //   lithography: 'Цветная литография (40х60)',
  //   price: 21000,
  //   country: 'Англия',
  // },
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
          <div className="catalog__wrapper">
            {filteredProducts.map((product, index) => (
              <article className="catalog__product" key={index}>
                <Card
                  src={product.src}
                  width={product.width}
                  height={product.height}
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
    </section>
  );
};

export default Catalog;
