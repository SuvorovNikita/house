import '@/components/About/About.scss';
import Image from 'next/legacy/image';
import img from '@/assets/img/about.png';
import avatar1 from '@/assets/img/avatar1.png';
import avatar2 from '@/assets/img/avatar2.png';
import avatar3 from '@/assets/img/avatar3.png';

const About = () => {
  return (
    <section className="about" name="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__image">
            <Image src={img} alt="" priority />
          </div>
          <div className="about__content">
            <h2 className="about__title">Наша Команда</h2>
            <p className="about__desc">
              Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет
              оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы
              вынуждены отталкиваться от того, что консультация с широким активом.
            </p>
            <div className="about__team">
              <div className="about__item">
                <Image src={avatar1} alt="Член команды" />
              </div>
              <div className="about__item">
                <Image src={avatar2} alt="Член команды" />
              </div>
              <div className="about__item">
                <Image src={avatar3} alt="Член команды" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
