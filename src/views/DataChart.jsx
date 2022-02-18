import React from 'react';
import {useSelector} from 'react-redux';
import {Col} from 'react-bootstrap';
import {VictoryBar, VictoryChart,
  VictoryStack, VictoryLegend, VictoryAxis, VictoryLabel} from 'victory';

const DataChart = () => {
  const dataComAporte = useSelector((state) => state.apiData.dataComAporte);
  const dataSemAporte = useSelector((state) => state.apiData.dataSemAporte);

  return (
    <Col xs={12} className="mt-auto">
      {
        dataComAporte && (
          <VictoryChart>
            <VictoryAxis style={{
              axis: {stroke: 'transparent'},
              ticks: {stroke: 'transparent'},
              tickLabels: {fill: 'transparent'},
            }} />
            <VictoryStack>
              <VictoryBar
                data={dataSemAporte}
                x="month"
                y="value"
                style={{data: {fill: 'black'}}}
                barWidth={25}
              />
              <VictoryBar
                data={dataComAporte}
                x="month"
                y="value"
                style={{data: {fill: '#ed8f52'}}}
                barWidth={25}
              />
            </VictoryStack>
            <VictoryLegend
              data={[
                {name: 'Tempo (meses)', symbol: {fill: '#ffffff00'}},
              ]}
              orientation="vertical"
              labelComponent={<VictoryLabel/>}
              x={150}
              y={250}
            />
            <VictoryLegend
              data={[
                {name: 'Com Aporte', symbol: {fill: '#ed8f52'}},
                {name: 'Sem Aporte', symbol: {fill: 'black'}},
              ]}
              orientation="horizontal"
              gutter={50}
              x={100}
              y={275}
            />
            <VictoryLegend
              data={[
                {name: 'Valor (R$)'},
              ]}
              orientation="vertical"
              labelComponent={<VictoryLabel angle={-90}/>}
              gutter={50}
              x={-25}
              y={100}
            />
          </VictoryChart>
        )
      }
    </Col>
  );
};

export default DataChart;
