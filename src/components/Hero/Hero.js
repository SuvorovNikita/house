import Link from 'next/link';
import Image from 'next/image';

import '../Hero/Hero.scss';
import '../Button/Button.scss';

import smallImage from '../../assets/img/small-image.png';
import tableImage from '../../assets/img/mid-image.png';
import lgImage from '../../assets/img/lg-image.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__image">
            <Image className="image__small-image" src={smallImage} alt="" />
            <Image className="image__mid-image" src={tableImage} alt="" />
            <Image className="image__lg-image" src={lgImage} alt="" />
          </div>
          <div className="hero__content">
            <h1 className="hero__title">
              Реплики картин от <span>Ink. House</span>
            </h1>
            <p className="hero__desc">
              Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения,
              доступные цены.
            </p>
            <Link className="button" href="#">
              Продукция
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
