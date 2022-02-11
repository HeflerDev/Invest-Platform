import React from "react";
import './App.scss'

import {
  Container,
  Row,
  Col
} from "react-bootstrap"

import {
  Heading
} from './components'

import Form from './Form'

const App = () => (
  <div>
    <Heading headingTagSize={1} text={"Simulador de Investimentos"} />
    <Container>
      <Row>
        <Col xs={12}>
          <Form />
        </Col>
      </Row>
    </Container>
  </div>
)

export default App
