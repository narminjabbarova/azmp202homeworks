import React, { useState, useEffect } from 'react';
import { Space, Table, message } from 'antd';
import getAllData from '../../../utils/script';
import { endpoints } from '../../../utils/constants';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => deleteProduct(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  const fetchProducts = async () => {
    try {
      const products = await getAllData(endpoints.products);
      setData(products.map(product => ({ ...product, key: product.id })));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${endpoints.products}/${id}`);
      message.success('Product deleted successfully');
      setData(data.filter(product => product.id !== id));
    } catch (error) {
      message.error('Failed to delete product');
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default Dashboard;
