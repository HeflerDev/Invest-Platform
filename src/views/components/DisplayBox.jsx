import React from 'react';
import {Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const DisplayBox = ({k, value}) => (
  <Col xs={12} className="display-box">
    <h6>{k}</h6>
    {
    /Líquido/g.test(k) ? (
      <div className="green">{value}</div>
    ) : (
      <div>{value}</div>
    )
    }
  </Col>
);

DisplayBox.propTypes = {
  k: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
