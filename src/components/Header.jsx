import React from 'react'
import '../css/main.css';
import noteService from '../service/note-service';
import { useState} from 'react';

export default function Header({update}) {
  return (
    <div className='header__container'>
      <div className="header__title">Note</div>
      <button className="header__button-update material-icons"
      onClick={update}>sync</button>
    </div>
  )
}
