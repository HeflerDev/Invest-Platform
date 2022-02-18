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
import SimulationResults from './SimulationResults.jsx';
import DataChart from './DataChart.jsx';

const App = () => (
  <section>
    <Heading headingTagSize={1} text={'Simulador de Investimentos'} />
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <Form />
        </Col>
        <Col xs={12} lg={6} className="d-flex flex-column">
          <SimulationResults />
          <DataChart />
        </Col>
      </Row>
    </Container>
  </section>
);

export default App;
