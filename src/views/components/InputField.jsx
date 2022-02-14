import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

export const InputField = ({error = null, label, name, onChange, value}) => (
  <Col xs={12} className="input-field">
    <label
      htmlFor={name}
      className={error ? 'error input-label' : 'input-label'}>
      {label}
    </label>
    <input
      className={error ? 'error-input' : ''}
      type="text"
      name={name}
      onChange={onChange}
      value={value}
    />
    {
      error && <p className="error">{error}</p>
    }
  </Col>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
};

InputField.defaultProps = {
  name: '',
  onChange: null,
  value: '',
};
