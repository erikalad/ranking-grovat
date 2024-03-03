import React, { useState, useEffect } from 'react';
import { Mix } from '@ant-design/plots';
import { Liquid } from '@ant-design/plots';
import "./MetricasTotalizador.css"
import { useSelector } from 'react-redux';
import { Card, Statistic } from 'antd';

export default function MetricasTotalizador() {
  const [data, setData] = useState({
    "bar": [],
    "pie": [],
    "line": []
  });
  const dataBase = useSelector(state => state.ranking);
  console.log(dataBase);

  const completedAgendas = dataBase.length; // Cantidad de agendas completadas

  const setters = ["Lourdes", "Lucas", "Juan", "Sol", "Leandro"];

  useEffect(() => {
    // Inicializar los valores de bar y pie
    const barData = setters.map(setter => ({ area: setter, count: 0 }));
    const pieData = setters.map(setter => ({ area: setter, bill: 0 }));
  
    // Contar las ocurrencias de cada setter por fecha
    const countersByDate = {};
    dataBase.forEach(entry => {
      const fechaAgenda = new Date(entry.fechaAgenda);
      const day = fechaAgenda.getDate();
      const month = fechaAgenda.getMonth() + 1;
      const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}`;
      const setter = entry.setter;
  
      if (!countersByDate[formattedDate]) {
        countersByDate[formattedDate] = {};
      }
      if (!countersByDate[formattedDate][setter]) {
        countersByDate[formattedDate][setter] = 0;
      }
  
      countersByDate[formattedDate][setter]++;
    });
  
  // Llenar data.line con los valores correspondientes de dataBase y ordenar por fecha
  const lineData = [];
  Object.keys(countersByDate)
    .sort((a, b) => new Date(a) - new Date(b)) // Ordenar las fechas de menor a mayor
    .forEach(date => {
      setters.forEach(setter => {
        const value = countersByDate[date][setter] || 0;
        lineData.push({ time: date, area: setter, value: value });
      });
    });
  
    // Actualizar bar y pie con la cantidad total de objetos por setter
    dataBase.forEach(entry => {
      const barIndex = barData.findIndex(item => item.area === entry.setter);
      if (barIndex !== -1) {
        barData[barIndex].count++;
      }
  
      const pieIndex = pieData.findIndex(item => item.area === entry.setter);
      if (pieIndex !== -1) {
        pieData[pieIndex].bill++;
      }
    });
  
    // Actualizar el estado con los nuevos datos
    setData({
      ...data,
      bar: barData,
      pie: pieData,
      line: lineData
    });
  }, [dataBase]);
  
  
  
  // Opciones de configuración de los gráficos
  const config = {
    tooltip: false,
    plots: [
      // Configuración del gráfico de barras
      {
        type: 'bar',
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.45,
            y: 0.45,
          },
        },
        options: {
          data: data.bar,
          xField: 'count',
          yField: 'area',
          seriesField: 'area',
          isStack: true,
          tooltip: {
            shared: true,
            showCrosshairs: false,
            showMarkers: false,
          },
          label: {},
          interactions: [
            {
              type: 'active-region',
            },
          ],
        },
      },
      // Configuración del gráfico de pastel
      {
        type: 'pie',
        region: {
          start: {
            x: 0.5,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.45,
          },
        },
        options: {
          data: data.pie,
          angleField: 'bill',
          colorField: 'area',
          tooltip: {
            showMarkers: false,
          },
          radius: 0.85,
          label: {
            type: 'inner',
            formatter: '{name}',
            offset: '-15%',
          },
          interactions: [
            {
              type: 'element-active',
            },
            {
              type: 'association-tooltip',
              cfg: {
                start: [
                  {
                    trigger: 'element:mousemove',
                    action: 'association:showTooltip',
                    arg: {
                      dim: 'x',
                      linkField: 'area',
                    },
                  },
                ],
              },
            },
            {
              type: 'association-highlight',
              cfg: {
                start: [
                  {
                    trigger: 'element:mousemove',
                    action: 'association:highlight',
                    arg: {
                      linkField: 'area',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      // Configuración del gráfico de líneas
      {
        type: 'line',
        region: {
          start: {
            x: 0,
            y: 0.5,
          },
          end: {
            x: 1,
            y: 0.95,
          },
        },
        options: {
          data: data.line,
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          line: {},
          point: {
            style: {
              r: 2.5,
            },
          },
          meta: {
            value: {
              min: 0,
              nice: true,
            },
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true,
          },
        },
      },
    ],
  };

  console.log(data)
  const configLiquid = {
    percent: dataBase.length / 40,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4
    },
    wave: {
      length: 128
    }
  };

  return (
    <div className='container-metrics'>
      <Mix {...config} className='mix' />
      <div className="card-liquid">
      <Card><div className='totalizador'>{`${completedAgendas}/40`}</div></Card>
      <Liquid {...configLiquid} className="liquid" />
      </div>
    </div>
  );
}
