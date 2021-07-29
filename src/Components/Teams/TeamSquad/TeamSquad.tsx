import React from 'react'
import { Table } from 'antd'
import moment from 'moment'

import { ITeamById } from '../../../Interfaces/TeamsInterfaces'

interface Props {
  squad: ITeamById['squad']
}

export default function TeamSquad(props: Props) {
  const data = []
  const total = props.squad.length

  for (let i = 0; i < props.squad.length; i++) {
    data.push({
      key: i,
      name: props.squad[i].name,
      position: props.squad[i].position,
      dateOfBirth: moment(props.squad[i].dateOfBirth).format('MM/DD/YY'),
      countryOfBirth: props.squad[i].countryOfBirth,
      nationality: props.squad[i].nationality,
      role: props.squad[i].role,
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 70,
      fixed: true
    },
    {
      title: 'Position',
      dataIndex: 'position',
      width: 70
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: 70
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      width: 70
    },
    {
      title: 'dateOfBirth',
      dataIndex: 'dateOfBirth',
      width: 70
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 10,
        total,
        position: ['topRight'],
        showSizeChanger: false,
        size: 'small'
      }}
      bordered
      scroll={{ x: 800 }}
    />
  )
}
