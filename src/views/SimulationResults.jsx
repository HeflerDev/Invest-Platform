import React from 'react';
import {useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import { DisplayBox } from './components';

const SimulationResults = () => {
  const apiData = useSelector((state) => state.apiData.data);


  console.log(apiData);
  return (
    <Row>
      {
        apiData && (
          <Col xs={12}>
            {
              Object.entries(apiData).map(([k, value]) => (
                <DisplayBox key={value[0]} k={value[0]} value={value[1]} />
              ))
            }
          </Col>
        )
      }
    </Row>
  );
};

export default SimulationResults;
