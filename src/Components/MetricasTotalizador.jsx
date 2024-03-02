import React, { useState, useEffect } from 'react';
import { Mix } from '@ant-design/plots';
import { Liquid } from '@ant-design/plots';
import "./MetricasTotalizador.css"


export default function MetricasTotalizador () {
  const [dataReal, setData] = useState({});

  const data = {
    "bar": [
      {
        "area": "Lourdes",
        "cat": "家具",
        "count": 1
      },

      {
        "area": "Lucas",
        "cat": "家具",
        "count": 2
      },

      {
        "area": "Juan",
        "cat": "家具",
        "count": 2
      },

      {
        "area": "Sol",
        "cat": "家具",
        "count": 2
      },

      {
        "area": "Leandro",
        "cat": "家具",
        "count": 4
      },

    ],
    "pie": [
      {
        "area": "Lourdes",
        "name": "洪光",
        "bill": 3,
      },
      {
        "area": "Lucas",
        "name": "范彩",
        "bill": 2,
      },
      {
        "area": "Juan",
        "name": "楚杰",
        "bill": 4,
      },
      {
        "area": "Sol",
        "name": "殷莲",
        "bill": 5,
      },
      {
        "area": "Leandro",
        "name": "白德伟",
        "bill": 2,
      }
    ],
    "line": [
      {
        "time": "1/03",
        "area": "Lourdes",
        "value": 1
      },
      {
        "time": "1/03",
        "area": "Lucas",
        "value": 2
      },
      {
        "time": "1/03",
        "area": "Juan",
        "value": 1
      },
      {
        "time": "1/03",
        "area": "Sol",
        "value": 1
      },
      {
        "time": "1/03",
        "area": "Leandro",
        "value": 0
      },
      {
        "time": "2/03",
        "area": "Juan",
        "value": 2
      },
      {
        "time": "2/03",
        "area": "Sol",
        "value": 1
      },
      {
        "time": "2/03",
        "area": "Lourdes",
        "value": 0
      },
      {
        "time": "2/03",
        "area": "Lucas",
        "value": 0
      },
      {
        "time": "2/03",
        "area": "Leandro",
        "value": 0
      },
      {
        "time": "3/03",
        "area": "Juan",
        "value": 1
      },
      {
        "time": "3/03",
        "area": "Sol",
        "value": 0
      },
      {
        "time": "3/03",
        "area": "Lourdes",
        "value": 1
      },
      {
        "time": "3/03",
        "area": "Lucas",
        "value": 2
      },
      {
        "time": "3/03",
        "area": "Leandro",
        "value": 4
      },
      {
        "time": "4/03",
        "area": "Juan",
        "value": 5
      },
      {
        "time": "4/03",
        "area": "Sol",
        "value": 3
      },
      {
        "time": "4/03",
        "area": "Lourdes",
        "value": 0
      },
      {
        "time": "4/03",
        "area": "Lucas",
        "value": 0
      },
      {
        "time": "4/03",
        "area": "Leandro",
        "value": 0
      },
      {
        "time": "5/03",
        "area": "Juan",
        "value": 0
      },
      {
        "time": "5/03",
        "area": "Sol",
        "value": 1
      },
      {
        "time": "5/03",
        "area": "Lourdes",
        "value": 1
      },
      {
        "time": "5/03",
        "area": "Lucas",
        "value": 2
      },
      {
        "time": "5/03",
        "area": "Leandro",
        "value": 3
      },
      {
        "time": "6/03",
        "area": "Juan",
        "value": 1
      },
      {
        "time": "6/03",
        "area": "Sol",
        "value": 1
      },
      {
        "time": "6/03",
        "area": "Lourdes",
        "value": 1
      },
      {
        "time": "6/03",
        "area": "Lucas",
        "value": 2
      },
      {
        "time": "6/03",
        "area": "Leandro",
        "value": 0
      },
      {
        "time": "7/03",
        "area": "Juan",
        "value": 0
      },
      {
        "time": "7/03",
        "area": "Sol",
        "value": 0
      },
      {
        "time": "7/03",
        "area": "Lourdes",
        "value": 0
      },
      {
        "time": "7/03",
        "area": "Lucas",
        "value": 0
      },
      {
        "time": "7/03",
        "area": "Leandro",
        "value": 0
      },
      {
        "time": "8/03",
        "area": "Juan",
        "value": 1
      },
      {
        "time": "8/03",
        "area": "Sol",
        "value": 2
      },
      {
        "time": "8/03",
        "area": "Lourdes",
        "value": 1
      },
      {
        "time": "8/03",
        "area": "Lucas",
        "value": 3
      },
      {
        "time": "8/03",
        "area": "Leandro",
        "value": 1
      },
      {
        "time": "9/03",
        "area": "Juan",
        "value": 1
      },
      {
        "time": "9/03",
        "area": "Sol",
        "value": 1
      },
      {
        "time": "9/03",
        "area": "Lourdes",
        "value": 1
      },
      {
        "time": "9/03",
        "area": "Lucas",
        "value": 0
      },
      {
        "time": "9/03",
        "area": "Leandro",
        "value": 0
      },
      {
        "time": "10/03",
        "area": "Juan",
        "value": 0
      },
      {
        "time": "10/03",
        "area": "Sol",
        "value": 0
      },
      {
        "time": "10/03",
        "area": "Lourdes",
        "value": 0
      },
      {
        "time": "10/03",
        "area": "Lucas",
        "value": 0
      },
      {
        "time": "10/03",
        "area": "Leandro",
        "value": 0
      },
      {
        "time": "11/03",
        "area": "Juan",
        "value": 0
      },
      {
        "time": "11/03",
        "area": "Sol",
        "value": 0
      },
      {
        "time": "11/03",
        "area": "Lourdes",
        "value": 0
      },
      {
        "time": "11/03",
        "area": "Lucas",
        "value": 0
      },
      {
        "time": "11/03",
        "area": "Leandro",
        "value": 0
      }
    ]
  }

  const config = {
    tooltip: false,
    plots: [
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
          seriesField: 'cat',
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
            // 后续开放
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
            time: {
              range: [0, 1],
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

  const configLiquid = {
    percent: 0.25,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4,
    },
    wave: {
      length: 128,
    },
  };

  return(
    <div className='container-metrics'>
    <Mix {...config} style={{width:"50%", height:"400px"}}/>;
    <Liquid {...configLiquid} />
    </div>
  )
};



