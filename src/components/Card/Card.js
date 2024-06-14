import Image from 'next/image';

const Card = ({ src, name, title, lithography, price }) => {
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__content">
          <div className="card__image">
            <Image
              src={src}
              alt={name}
              style={{ width: '310px', height: 'auto' }}
              layout="responsive"
            />
          </div>
          <p className="card__name">{name}</p>
          <h3 className="card__title">{title}</h3>
          <p className="card__lithography">{lithography}</p>
          <p className="card__price">{price.toLocaleString('ru-RU')} руб</p>
          <button className="card__button">В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
