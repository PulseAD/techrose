import PropTypes from "prop-types"
import React, { useState } from "react"
import "./layout.css"
import menuSvg from '../images/menu.svg'
import closeMenuSvg from '../images/close.svg'
import { Link } from "gatsby"

const Header = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const color = props.color ? props.color : '#000';
  const hamburgerMenuColor = props.color == '#fff' ? 'invert(1)' : 'none';
  return (
    <>
      <header className="header">
        <h3 className="header__logo" style={{color: color}}>TechRose</h3>
        <div className="header__menu">
          <img
            src={menuSvg}
            alt="menu hamburger"
            style={{filter: hamburgerMenuColor}}
            onClick={() => setIsMenuShown(true)}
          />
        </div>
      </header>
      {isMenuShown &&
        <nav className="fullscreen-menu">
          <div className="fullscreen-menu__header">
            <h3 className="fullscreen-menu__header__logo">TechRose</h3>
            <div className="fullscreen-menu__header__close">
            <img src={closeMenuSvg} alt="close menu" onClick={() => setIsMenuShown(false)} />
            </div>
          </div>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuShown(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuShown(false)}>Our services</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsMenuShown(false)}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuShown(false)}>Contact</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
