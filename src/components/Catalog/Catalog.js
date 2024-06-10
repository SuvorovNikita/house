import Card from '../Card/Card';
import '../Catalog/Catalog.scss';

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__top">
            <h2 className="catalog__title">Репродукции</h2>
            <ul className="catalog__menu">
              <div className="catalog__item">
                <button className="button-tabs button-tabs--active">Франция</button>
              </div>
              <div className="catalog__item">
                <button className="button-tabs">Германия</button>
              </div>
              <div className="catalog__item">
                <button className="button-tabs">Англия</button>
              </div>
            </ul>
          </div>
          <div className="catalog__list">
            <div className="catalog__wrapper">
              <article className="catalog__product">
                <Card />
              </article>
            </div>
            <div className="catalog__wrapper">
              <article className="catalog__product">
                <Card />
              </article>
            </div>
            <div className="catalog__wrapper">
              <article className="catalog__product">
                <Card />
              </article>
            </div>
            <div className="catalog__wrapper">
              <article className="catalog__product">
                <Card />
              </article>
            </div>
            <div className="catalog__wrapper">
              <article className="catalog__product">
                <Card />
              </article>
            </div>
            <div className="catalog__wrapper">
              <article className="catalog__product">
                <Card />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
