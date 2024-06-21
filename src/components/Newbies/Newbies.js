import '@/components/Newbies/Newbies.scss';
import Image from 'next/image';
import star from '@/assets/img/star.svg';

const Newbies = () => {
  return (
    <section className="newbies" id="newbies">
      <div className="newbies__bg">
        <div className="container">
          <div className="newbies__inner">
            <div className="newbies__star">
              <Image src={star} alt="star" className="newbies__star" />
            </div>
            <h2 className="newbies__title">Новая коллекция французских авторов</h2>
          </div>

          <div className="newbies__content">
            <p className="newbies__desc newbies__desc--top">
              Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям,
              которые, в свою очередь, должны быть заблокированы в рамках своих собственных
              рациональных ограничений.
            </p>
            <p className="newbies__desc">
              Принимая во внимание показатели успешности, граница обучения кадров предопределяет
              высокую востребованность направлений прогрессивного развития.
            </p>
          </div>
          <a className="button button--yellow">Ознакомиться</a>
        </div>
      </div>
    </section>
  );
};

export default Newbies;
