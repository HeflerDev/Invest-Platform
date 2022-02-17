import React from 'react';
import {useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import { DisplayBox } from './components';

const SimulationResults = () => {
  const apiData = useSelector((state) => state.apiData.data);


  console.log(apiData);
  return (
    <Col xs={12}>
      {
        apiData && (
          <>
          <h2>Resultado da Simulação</h2>
          <Row>
            {
              Object.entries(apiData).map(([k, value]) => (
                <Col xs={12} md={6} lg={4} key={value[0]}>
                  <DisplayBox k={value[0]} value={value[1]} />
                </Col>
              ))
            }
          </Row>
          </>
        )
      }
    </Col>
  );
};

export default SimulationResults;
