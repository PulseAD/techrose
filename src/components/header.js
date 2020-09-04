import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import menuSvg from '../images/menu.svg'

const Header = (props) => {
  const color = props.color ? props.color : '#000';
  const hamburgerMenuColor = props.color == '#fff' ? 'invert(1)' : 'none';
  return (
    <header class="header">
      <h3 class="header__logo" style={{color: color}}>TechRose</h3>
      <div class="header__menu">
        <img src={menuSvg} alt="menu hamburger" style={{filter: hamburgerMenuColor}}/>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
