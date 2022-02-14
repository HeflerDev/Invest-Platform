import React from 'react'
import PropTypes from 'prop-types'
import { Label } from './Label'
import { Col } from 'react-bootstrap'

export const InputField = ({ label, name, onChange, value }) => (
  <Col xs={12} className="input-field">
    <label htmlFor={name} className="input-label">{label}</label>
    <input type="text" name={name} onChange={onChange} value={value}/>
  </Col>
)

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

InputField.defaultProps = {
  name: '',
  onChange: null,
  value: ''
}
