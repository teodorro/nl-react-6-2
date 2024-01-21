import React from 'react'
import '../css/main.css';

export default function Header() {
  return (
    <div className='header__container'>
      <div className="header__title">Note</div>
      <button className="header__button-update material-icons">sync</button>
    </div>
  )
}
