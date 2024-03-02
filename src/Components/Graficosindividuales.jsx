import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import "./Graficosindividuales.css"


export default function Graficosindividuales (){
  const [data, setData] = useState([
    {
      "fecha": "1/3",
      "value": 1
    },
    {
      "fecha": "2/3",
      "value": 1.08
    },
    {
      "fecha": "3/3",
      "value": 1.17
    },
    {
      "fecha": "4/3",
      "value": 1.26
    },
    {
      "fecha": "5/3",
      "value": 1.34
    },
    {
      "fecha": "6/3",
      "value": 1.41
    },
    {
      "fecha": "7/3",
      "value": 1.52
    },
    {
      "fecha": "8/3",
      "value": 1.67
    },
    {
      "fecha": "9/3",
      "value": 1.84
    },
    {
      "fecha": "10/3",
      "value": 2.07
    },
    {
      "fecha": "11/3",
      "value": 2.39
    },
    {
      "fecha": "12/3",
      "value": 2.71
    },
    {
      "fecha": "13/3",
      "value": 3.03
    },
    {
      "fecha": "14/3",
      "value": 3.33
    },
    {
      "fecha": "15/3",
      "value": 3.5
    },
    {
      "fecha": "16/3",
      "value": 3.37
    },
    {
      "fecha": "17/3",
      "value": 3.15
    },
    {
      "fecha": "18/3",
      "value": 3.01
    },
    {
      "fecha": "19/3",
      "value": 2.8
    },
    {
      "fecha": "20/3",
      "value": 2.8
    },
    {
      "fecha": "21/3",
      "value": 2.84
    },
    {
      "fecha": "22/3",
      "value": 2.75
    },
    {
      "fecha": "23/3",
      "value": 2.64
    },
    {
      "fecha": "24/3",
      "value": 2.55
    },
    {
      "fecha": "25/3",
      "value": 2.46
    },
    {
      "fecha": "26/3",
      "value": 2.45
    },
    {
      "fecha": "27/3",
      "value": 2.57
    },
    {
      "fecha": "28/3",
      "value": 2.68
    },
    {
      "fecha": "29/3",
      "value": 2.8
    },
    {
      "fecha": "30/3",
      "value": 2.89
    },
    {
      "fecha": "31/3",
      "value": 2.85
    },
  ]);

  const config = {
    data,
    xField: 'fecha',
    yField: 'value',
    xAxis: {
      // Oculta las líneas y ticks del eje X
      line: null, // o `line: { style: { display: 'none' } }` para solo la línea
      tickLine: null,
      label: {
        style: {
          fill: '#aaa', // Cambia esto según tus necesidades de estilo
        },
      },
    },
    yAxis: {
      // Oculta las líneas y ticks del eje Y
      line: null, // o `line: { style: { display: 'none' } }` para solo la línea
      tickLine: null,
      label: {
        style: {
          fill: '#aaa', // Cambia esto según tus necesidades de estilo
        },
      },
    },
    smooth: true, // Si quieres que la línea sea suave
  };


  return(
    <div className='container-graficosindividuales'>
      <div className='grafico-individual'>
      <div>Lourdes</div>
     <Area {...config} />
     </div>
     <div className='grafico-individual'>
     <div>Lucas</div>
     <Area {...config} />
     </div>
     <div className='grafico-individual'>
     <div>Sol</div>
     <Area {...config} />
     </div>
     <div className='grafico-individual'>
     <div>Juan</div>
     <Area {...config} />
     </div>
     <div className='grafico-individual'>
     <div>Leandro</div>
     <Area {...config} />
     </div>
     </div>
  )
    
};
