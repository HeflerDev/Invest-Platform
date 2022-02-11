import React from 'react'
import PropTypes from 'prop-types'

export const Buttons = ({ text, icon = false }) => (
  <button>
  {
    icon && icon
  }
  <span>{text}</span>
  </button>
)

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string
}
