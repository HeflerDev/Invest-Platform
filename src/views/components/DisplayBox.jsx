import React from 'react'
import { Col } from 'react-bootstrap'

export const DisplayBox = ({ k, value }) => (
  <Col xs={12}>
    <h3>{k}</h3>
    <div>{value}</div>
  </Col>
)
