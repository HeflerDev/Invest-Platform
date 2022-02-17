import React from 'react';
import './App.scss';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import {
  Heading,
} from './components';

import Form from './Form.jsx';
import SimulationResults from './SimulationResults.jsx'

const App = () => (
  <section>
    <Heading headingTagSize={1} text={'Simulador de Investimentos'} />
    <Container>
      <Row>
        <Col xs={12}>
          <SimulationResults />
          <Form />
        </Col>
      </Row>
    </Container>
  </section>
);

export default App;
