import React from 'react'
import PropTypes from 'prop-types'
import { Label } from './Label'
import { Col } from 'react-bootstrap'

export const InputField = ({ label }) => (
  <Col xs={12}>
    <Label text={label}/>
    <input type="text" />
  </Col>
)

InputField.propTypes = {
  label: PropTypes.string.isRequired
}
