import React from 'react';
import {Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Heading = ({headingTagSize, text}) => (
  <Col>
    {
    headingTagSize === 1 ?
      (
      <h1>{text}</h1>
        ) :
      (
      <h2>{text}</h2>
        )
    }
  </Col>
);

Heading.propTypes = {
  headingTagSize: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
