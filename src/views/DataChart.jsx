import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Col} from 'react-bootstrap';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack } from 'victory';

const DataChart = () => {
  const dataComAporte = useSelector((state) => state.apiData.dataComAporte);
  const dataSemAporte = useSelector((state) => state.apiData.dataSemAporte)

  return (
    <Col>
      {
        dataComAporte && (
            <VictoryStack>
              <VictoryBar
                data={dataSemAporte}
                x="month"
                y="value"
                style={{ data: { fill: 'black' } }}
                barWidth={25}
              />
              <VictoryBar
                data={dataComAporte}
                x="month"
                y="value"
                style={{ data: { fill: '#ed8f52' } }}
                barWidth={25}
              />
            </VictoryStack>
        )
      }
    </Col>
  );
};

export default DataChart;
