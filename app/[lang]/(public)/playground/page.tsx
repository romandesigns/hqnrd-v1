'use client';

import React from 'react';
import { Table,Button } from 'antd';
import type { TableColumnsType } from 'antd';


interface DataType {
  key: React.Key;
  author: string;
  assignee: string;
  title: string;
  issueType: string;
  description: string;
  priority: string;
  remainingTime: string;
  status: React.ReactNode;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    responsive: ['sm'],
  },
  {
    title: 'Assignee',
    dataIndex: 'assignee',
    key: 'assignee',
    responsive: ['md'],
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Issue Type',
    dataIndex: 'issueType',
    key: 'issueType',
    responsive: ['md'],
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    key: 'priority',
  },
  {
    title: 'due by',
    dataIndex: 'remainingTime',
    key: 'remainingTime',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
    render: (text) => <Button onClick={() => alert('Full Detail')}>View</Button>,
  }
];

const data: DataType[] = [
  {
    key: '1',
    author: "John Doe",
    assignee: "Roman Feliz",
    title: "Fix the bug on the homepage",
    issueType: "Bug",
    description: 'The homepage is not loading properly',
    priority: 'High',
    remainingTime: '2d:4h:30m:10s',
    status: 'In Progress',
    
  },
];

const Page: React.FC = () => <main className='min-h-full flex items-center justify-center row-span-2'>
    <div className='min-h-full flex items-center justify-stretch w-full'><Table columns={columns} dataSource={data} /></div>
</main>;

export default Page;