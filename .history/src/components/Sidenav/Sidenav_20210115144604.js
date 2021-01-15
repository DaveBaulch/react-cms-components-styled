import React from 'react';
import { Link } from 'react-router-dom';
import SidenavCloseButton from './SidenavCloseButton';
import { useContext } from 'react';
import NavigationContext from '../../contexts/NavigationContext.tsx';
import FocusTrap from 'focus-trap-react';
import './Sidenav.scss';

const Sidenav = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext);

  return (
    <div className="sidenav-container" aria-hidden={!isActive}>
      <FocusTrap active={isActive}>
        <div>
          <div
            className="sidenav-backdrop"
            onClick={() => onActiveChange()}
          ></div>

          <div className="sidenav-wrapper">
            <SidenavCloseButton
              onClick={() => onActiveChange()}
              hidden={!isActive}
            />

            <div className="sidenav" onClick={() => onActiveChange()}>
              <h2>Components</h2>
              <ul className="sidenav-list">
                <li className="sidenav-list__item">
                  <Link
                    to="/hero"
                    className="sidenav-list__link"
                    hidden={!isActive}
                  >
                    Hero
                  </Link>
                </li>
                <li className="sidenav-list__item">
                  <Link
                    to="/carousel"
                    className="sidenav-list__link"
                    hidden={!isActive}
                  >
                    Carousel
                  </Link>
                </li>
                <li className="sidenav-list__item">
                  <Link
                    to="/cards"
                    className="sidenav-list__link"
                    hidden={!isActive}
                  >
                    Cards
                  </Link>
                </li>
                <li className="sidenav-list__item">
                  <Link
                    to="/sectors"
                    className="sidenav-list__link"
                    hidden={!isActive}
                  >
                    Sectors
                  </Link>
                </li>
                <li className="sidenav-list__item">
                  <Link
                    to="/cta"
                    className="sidenav-list__link"
                    hidden={!isActive}
                  >
                    CTA
                  </Link>
                </li>
                <li className="sidenav-list__item">
                  <Link
                    to="/quote"
                    className="sidenav-list__link"
                    hidden={!isActive}
                  >
                    Quote
                  </Link>
                </li>
                <li className="sidenav-list__item">
                  <Link
                    to="/text"
                    className="sidenav-list__link"
                    hidden={!isActive}
                  >
                    Text
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
};

export default Sidenav;
