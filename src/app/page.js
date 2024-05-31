import Image from 'next/image';
import img03 from '@/assets/img/03.png';

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container">
          <div className="card">
            <div className="card__body">
              <div className="card__content">
                <Image src={img03} alt="03" className="card__image" />
                <p className="card__name">Франсуа Дюпон</p>
                <h3 className="card__title">Процедура</h3>
                <p className="card__lithography">Цветная литография (40х60) </p>
                <p className="card__price">20 000 руб</p>
                <button className="card__button">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
