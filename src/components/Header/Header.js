import Link from 'next/link';
import Image from 'next/image';
import '../Header/Header.scss';

import logo from '@/assets/img/logo.svg';
import cart from '@/assets/img/cart.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Image className="header__logo" src={logo} alt="logo" />
          <nav className="header__navigation">
            <div className="header__item">
              <Link className="header__link" href="#">
                Репродукции
              </Link>
            </div>
            <div className="header__item">
              <Link className="header__link" href="#">
                Новинки
              </Link>
            </div>
            <div className="header__item">
              <Link className="header__link" href="#">
                О нас
              </Link>
            </div>
            <div className="header__item">
              <Link className="header__link-cart" href="#">
                <Image src={cart} alt="cart" className="header__link-icon"></Image>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
