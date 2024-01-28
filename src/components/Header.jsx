import React from 'react'
import '../css/main.css';
import PropTypes from "prop-types";

export default function Header({update}) {
  return (
    <div className='header__container'>
      <div className="header__title">Note</div>
      <button className="header__button-update material-icons"
      onClick={update}>sync</button>
    </div>
  )
}

Header.propTypes = {
  update: PropTypes.func,
};
