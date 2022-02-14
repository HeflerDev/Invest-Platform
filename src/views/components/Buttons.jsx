import React from 'react'
import PropTypes from 'prop-types'

export const Buttons = ({ active = false, className = '', onClick = null, text, icon = false }) => (
  <button className={active ? `${className} active` : className} onClick={onClick}>
  {
    icon && active && icon
  }
  <div>{text}</div>
  </button>
)

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool
}
