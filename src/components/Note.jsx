import React from 'react'
import '../css/main.css'
import PropTypes from 'prop-types';

export default function Note({note}) {
  return (
  <div className='note'>{note}</div>
  )
}

Note.propTypes = {
  note: PropTypes.String
}