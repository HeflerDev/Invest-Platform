import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from 'prop-types'

export const Label = ({text, icon}) => (
  <Col xs={12} className="input-label d-flex justify-content-between">
    <label>
      {text}
    </label>
    {
      icon && icon
    }
  </Col>
)

Label.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element
}
