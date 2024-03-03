import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form, Select, DatePicker, message } from 'antd';
import "./Tabla.css";
import { useDispatch, useSelector } from 'react-redux';
import { postRanking, deleteRanking, getRanking } from './../redux/actions'; // Importa la acción postRanking desde tu archivo de acciones

const { Option } = Select;

export default function Tabla() {
  const dataBase = useSelector(state => state.ranking);
  const loading = useSelector(state=>state.loading)
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch(); // Obtén la función de despacho
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm(); 

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        dispatch(getRanking());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (loading) {
      fetchDataAsync();
    }
  }, [loading, dispatch]);

  const onDelete = async (id) => {
    try {
      dispatch(deleteRanking(id));
      success('Demo eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar la demo:', error);
    }
  };

  const success = (contenido) => {
    messageApi.open({
      type: 'success',
      content: contenido,
    });
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    form.resetFields();
  };

  const onFinish = (values) => {
    // Dispatch de la acción postRanking con los valores del formulario
    dispatch(postRanking(values));
    success("Se cargó con éxito");
    setModalVisible(false); // Cerrar el modal después de enviar el formulario
    form.resetFields();
   
  };

  // Función para convertir y agrupar los datos para la tabla
  const convertDataForTable = (data) => {
    const demosData = {};
  
    data.forEach(item => {
      const setter = item.setter;
      if (!demosData[setter]) {
        demosData[setter] = {
          key: setter,
          setter: setter,
          cantidadDemos: 0,
          demos: [] // Array para almacenar las fechas de las demos
        };
      }
      demosData[setter].cantidadDemos++;
      demosData[setter].demos.push({
        id_demo: item.id_demo,
        fechaDemo: item.fechaDemo
      }); // Agregar el objeto con id_demo y fechaDemo al array de demos
    });
  
    // Convertir el objeto en un array de objetos
    return Object.values(demosData);
  };
  

  // Llamas a la función para convertir los datos
  const formattedData = convertDataForTable(dataBase);
   // Ordena los datos por cantidadDemos de mayor a menor
   formattedData.sort((a, b) => b.cantidadDemos - a.cantidadDemos);

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
    },
  ];

  const expandedRowRender = (record) => {
    return (
      <div>
        {record.demos.map((demo, index) => (
          <p key={index} className='item-table'>
            Demo agendada el día {new Date(demo.fechaDemo).toLocaleDateString('es-ES')}
            <Button type='primary' style={{ marginLeft: '10px' }} onClick={() => onDelete(demo.id_demo)}>Borrar</Button>
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className='container-table'>
      {contextHolder}
      <Button type='primary' onClick={showModal}>Agregar Demo</Button>
      <Modal
        title="Agregar Demo"
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
        form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Setter"
            name="setter"
            rules={[{ required: true, message: 'Por favor ingresa un setter' }]}
          >
            <Select style={{ width: '100%' }}>
              <Option value="Juan">Juan</Option>
              <Option value="Leandro">Leandro</Option>
              <Option value="Lourdes">Lourdes</Option>
              <Option value="Lucas">Lucas</Option>
              <Option value="Sol">Sol</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Fecha que agendaste"
            name="fechaAgenda"
            rules={[{ required: true, message: 'Por favor ingresa la fecha que agendaste' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Fecha de la demo"
            name="fechaDemo"
            rules={[{ required: true, message: 'Por favor ingresa la fecha de la demo' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={formattedData}
        pagination={false}
        bordered
        expandable={{ expandedRowRender }}
      />
   </div>
  );
}
