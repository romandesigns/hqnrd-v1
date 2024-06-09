'use client'
import { Locale } from '@/i18n-config';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';


interface DataType {
    key: string;
    author: string;
    assignee: string;
    title: string; 
    issueType: string;
    description: string;
    priority: string; 
    timeLeft: string;
    status: string; 
  }

export const TableComponent = ({lang}:{lang:Locale}) => {
const dataSource:DataType[] = [
    {
        key: '1',
        author: 'Eduard',
        assignee: 'Roman',
        title: 'Fix Navigation Bar',
        issueType: 'Developement' ,
        description: 'The navigation bar is not working properly',
        priority: 'High',
        timeLeft: '2 days',
        status: 'Open',
    }
    ];
    
    const columns:TableColumnsType<DataType> = [
    {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
    },
    // {
    //     title: 'Assignee',
    //     dataIndex: 'assignee',
    //     key: 'assignee',
    // },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        responsive: ['lg'],
    },
    {
        title: 'Issue Type',
        dataIndex: 'issueType',
        key: 'issueType',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        responsive: ['lg'],
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
    },
    {
        title: 'Time Left',
        dataIndex: 'timeLeft',
        key: 'timeLeft',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    ];
  return (
    <div className='w-full [&_table_.ant-table-row-expand-icon-cell]:lg:hidden'>
    <Table 
    className='w-full'
    dataSource={dataSource} 
    columns={columns}
    expandable={{
        expandedRowRender: (record) => (
            <table className='w-content'>
                <thead>
                    <tr>
                        <th className='text-left'>Title:</th>
                        <th className='text-left'>Description:</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{record.title}</td>
                    <td>{record.description}</td>
                </tr>
                </tbody>
            </table>
        ),
        rowExpandable: (record) => record.description !== 'Not Expandable',
      }}
    />
    </div>
  )
}
