import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import "./Graficosindividuales.css"
import { useSelector } from 'react-redux';

const setters = ['Leandro', 'Sol', 'Lourdes', 'Lucas', 'Juan'];

export default function Graficosindividuales() {
  const dataBase = useSelector(state => state.ranking);
  const [chartsData, setChartsData] = useState({});

  useEffect(() => {
    const newData = {};
    setters.forEach(setter => {
      const setterData = dataBase.filter(item => item.setter === setter).sort((a, b) => new Date(a.fechaAgenda) - new Date(b.fechaAgenda));
      const dataByDate = {};
      let acumulado = 0; // Inicializamos un acumulador para las citas por fecha
      setterData.forEach(item => {
        const fecha = new Date(item.fechaAgenda).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        acumulado += 1; // Incrementamos el acumulador por cada cita
        dataByDate[fecha] = acumulado; // Asignamos el valor acumulado a la fecha actual
      });
      newData[setter] = Object.entries(dataByDate).map(([fecha, value]) => ({ fecha, value }));
    });
    setChartsData(newData);
  }, [dataBase]);
  

  const renderCharts = () => {
    return setters.map(setter => {
      const data = chartsData[setter] || [];
      const config = {
        data,
        xField: 'fecha',
        yField: 'value',
        xAxis: {
          line: null,
          tickLine: null,
          label: {
            style: { fill: '#aaa' }
          }
        },
        yAxis: {
          line: null,
          tickLine: null,
          label: {
            style: { fill: '#aaa' }
          }
        },
        smooth: true,
        meta: {
          value: {
            alias: `Totalizador de ${setter} por día`
          }
        }
      };

      return (
        <div className='grafico-individual' key={setter}>
          <div>{setter}</div>
          <Area {...config} />
        </div>
      );
    });
  };

  return (
    <div className='container-graficosindividuales'>
      {renderCharts()}
    </div>
  );
}
