import React, { useEffect } from 'react';
import './App.css';
import Container from './Components/Container';
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';
import { useDispatch } from 'react-redux';
import { getRanking } from './redux/actions'; // Asegúrate de importar las acciones correctamente

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRanking());
  }, [dispatch]);

  return (
    <ConfigProvider locale={esES}>
      <div className="App">
        <Container />
      </div>
    </ConfigProvider>
  );
}

export default App;
