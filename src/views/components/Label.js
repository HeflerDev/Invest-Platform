import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from 'prop-types'

export const Label = ({text, icon}) => (
  <Col>
    <label>
      {text}
    </label>
    {
      icon ? icon : null
    }
  </Col>
)

Label.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element
}
