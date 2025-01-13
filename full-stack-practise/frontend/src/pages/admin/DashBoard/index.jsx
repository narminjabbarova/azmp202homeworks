import React, { useState, useEffect } from 'react';
import { Space, Table } from 'antd';
import getAllData from '../../../utils/script';
import { endpoints } from '../../../utils/constants';

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
          <a>Edit</a>
          <a>Delete</a>
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default Dashboard;
