
import React from 'react';
import PropTypes from 'prop-types';

export const CheckIcon = ({
  size = 16,
  color = 'white',
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M4 12l6 6L20 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
);

CheckIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
