import React from 'react';
import { Table } from 'antd';
import "./Tabla.css";

export default function Tabla() {
  // Datos de ejemplo con valores aleatorios para cantidad de demos
  const data = [
    { key: '1', setter: 'Lourdes', cantidadDemos: Math.floor(Math.random() * 9) },
    { key: '2', setter: 'Lucas', cantidadDemos: Math.floor(Math.random() * 9) },
    { key: '3', setter: 'Juan', cantidadDemos: Math.floor(Math.random() * 9) },
    { key: '4', setter: 'Sol', cantidadDemos: Math.floor(Math.random() * 9) },
    { key: '5', setter: 'Leandro', cantidadDemos: Math.floor(Math.random() * 9) },
  ];

  // Ordena los datos por cantidadDemos de mayor a menor
  data.sort((a, b) => b.cantidadDemos - a.cantidadDemos);

  // Definición de columnas para la tabla de Ant Design
  const columns = [
    {
      title: 'Setter',
      dataIndex: 'setter',
      key: 'setter',
      width: '500px'
    },
    {
      title: 'Cantidad Demos',
      dataIndex: 'cantidadDemos',
      key: 'cantidadDemos',
      width: '500px'
      // Opcional: Agregar renderizado personalizado o configuración adicional
    },
  ];

  return (
    <div className='container-table'>
      <Table columns={columns} dataSource={data} pagination={false} bordered width={"500px"}/>
    </div>
  );
}
