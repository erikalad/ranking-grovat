import React from 'react'
import CuentaRegresiva from './CuentaRegresiva'
import Header from './Header'
import MetricasTotalizador from './MetricasTotalizador'
import Tabla from './Tabla'
import Graficosindividuales from './Graficosindividuales'
import Footer from './Footer'
import "./Container.css"

export default function Container() {
  return (
    <div className='container-app'>
      <Header/>
      <CuentaRegresiva/>
      <MetricasTotalizador/>
      <Tabla/>
      <Graficosindividuales/>
      <Footer/>
    </div>
  )
}
