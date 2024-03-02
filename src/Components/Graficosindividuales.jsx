import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import "./Graficosindividuales.css"


export default function Graficosindividuales (){
  const [data, setData] = useState([
    {
      "timePeriod": "2006 Q3",
      "value": 1
    },
    {
      "timePeriod": "2006 Q4",
      "value": 1.08
    },
    {
      "timePeriod": "2007 Q1",
      "value": 1.17
    },
    {
      "timePeriod": "2007 Q2",
      "value": 1.26
    },
    {
      "timePeriod": "2007 Q3",
      "value": 1.34
    },
    {
      "timePeriod": "2007 Q4",
      "value": 1.41
    },
    {
      "timePeriod": "2008 Q1",
      "value": 1.52
    },
    {
      "timePeriod": "2008 Q2",
      "value": 1.67
    },
    {
      "timePeriod": "2008 Q3",
      "value": 1.84
    },
    {
      "timePeriod": "2008 Q4",
      "value": 2.07
    },
    {
      "timePeriod": "2009 Q1",
      "value": 2.39
    },
    {
      "timePeriod": "2009 Q2",
      "value": 2.71
    },
    {
      "timePeriod": "2009 Q3",
      "value": 3.03
    },
    {
      "timePeriod": "2009 Q4",
      "value": 3.33
    },
    {
      "timePeriod": "2010 Q1",
      "value": 3.5
    },
    {
      "timePeriod": "2010 Q2",
      "value": 3.37
    },
    {
      "timePeriod": "2010 Q3",
      "value": 3.15
    },
    {
      "timePeriod": "2010 Q4",
      "value": 3.01
    },
    {
      "timePeriod": "2011 Q1",
      "value": 2.8
    },
    {
      "timePeriod": "2011 Q2",
      "value": 2.8
    },
    {
      "timePeriod": "2011 Q3",
      "value": 2.84
    },
    {
      "timePeriod": "2011 Q4",
      "value": 2.75
    },
    {
      "timePeriod": "2012 Q1",
      "value": 2.64
    },
    {
      "timePeriod": "2012 Q2",
      "value": 2.55
    },
    {
      "timePeriod": "2012 Q3",
      "value": 2.46
    },
    {
      "timePeriod": "2012 Q4",
      "value": 2.45
    },
    {
      "timePeriod": "2013 Q1",
      "value": 2.57
    },
    {
      "timePeriod": "2013 Q2",
      "value": 2.68
    },
    {
      "timePeriod": "2013 Q3",
      "value": 2.8
    },
    {
      "timePeriod": "2013 Q4",
      "value": 2.89
    },
    {
      "timePeriod": "2014 Q1",
      "value": 2.85
    },
    {
      "timePeriod": "2014 Q2",
      "value": 2.73
    },
    {
      "timePeriod": "2014 Q3",
      "value": 2.54
    },
    {
      "timePeriod": "2014 Q4",
      "value": 2.32
    },
    {
      "timePeriod": "2015 Q1",
      "value": 2.25
    },
    {
      "timePeriod": "2015 Q2",
      "value": 2.33
    },
    {
      "timePeriod": "2015 Q3",
      "value": 2.53
    },
    {
      "timePeriod": "2015 Q4",
      "value": 2.74
    },
    {
      "timePeriod": "2016 Q1",
      "value": 2.76
    },
    {
      "timePeriod": "2016 Q2",
      "value": 2.61
    },
    {
      "timePeriod": "2016 Q3",
      "value": 2.35
    },
    {
      "timePeriod": "2016 Q4",
      "value": 2.11
    },
    {
      "timePeriod": "2017 Q1",
      "value": 2.08
    },
    {
      "timePeriod": "2017 Q2",
      "value": 2.2
    },
    {
      "timePeriod": "2017 Q3",
      "value": 2.38
    },
    {
      "timePeriod": "2017 Q4",
      "value": 2.59
    },
    {
      "timePeriod": "2018 Q1",
      "value": 2.63
    },
    {
      "timePeriod": "2018 Q2",
      "value": 2.67
    },
    {
      "timePeriod": "2018 Q3",
      "value": 2.64
    },
    {
      "timePeriod": "2018 Q4",
      "value": 2.5
    },
    {
      "timePeriod": "2019 Q1",
      "value": 2.31
    },
    {
      "timePeriod": "2019 Q2",
      "value": 2.04
    },
    {
      "timePeriod": "2019 Q3",
      "value": 1.83
    },
    {
      "timePeriod": "2019 Q4",
      "value": 1.71
    },
    {
      "timePeriod": "2020 Q1",
      "value": 1.65
    },
    {
      "timePeriod": "2020 Q2",
      "value": 1.59
    },
    {
      "timePeriod": "2020 Q3",
      "value": 1.58
    }
  ]);

  const config = {
    data,
    xField: 'timePeriod',
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
