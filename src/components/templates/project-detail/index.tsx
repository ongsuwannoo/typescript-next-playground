'use client';
import '@ant-design/v5-patch-for-react-19';

import type { TableProps } from 'antd';
import { Button, Modal, Space, Tag } from 'antd';
import { useState } from 'react';

import { IDataPerson } from '@/types/person';
import Table from '@/components/organisms/table/table-antd';

export default function ProjectDetail({ projectId }: { projectId: string }) {
  const [visible, setVisible] = useState(false);
  const columns: TableProps<IDataPerson>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: IDataPerson[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen text-3xl">
      <Modal
        centered
        open={visible}
        title="Basic Modal Feature 2"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div className="text-primary">Some contents...</div>
      </Modal>
      <Space
        direction="vertical"
        className="flex justify-center items-center"
        size="large"
      >
        <Button
          size="large"
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Project Detail {projectId} Feature 1
        </Button>
        <Table<IDataPerson> columns={columns} data={data} />
      </Space>
    </div>
  );
}
