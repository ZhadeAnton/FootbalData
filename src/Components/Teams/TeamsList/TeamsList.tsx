import React from 'react'
import { Table } from 'antd'

import { ITeam } from '../../../Interfaces/TeamsInterfaces'

interface Props {
  teams: Array<ITeam>
}

export default function TeamsList(props: Props) {
  const data = []
  const total = props.teams.length

  for (let i = 0; i < props.teams.length; i++) {
    data.push({
      key: i,
      id: props.teams[i].id,
      areaName: props.teams[i].area.name,
      name: props.teams[i].name,
      shortName: props.teams[i].shortName,
      addres: props.teams[i].address,
      phone: props.teams[i].phone,
      founded: props.teams[i].founded,
      website: props.teams[i].website,
      email: props.teams[i].email,
      tla: props.teams[i].tla
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
      key: 'name',
      fixed: true,
    },
    {
      title: 'Shot Name',
      dataIndex: 'shortName',
      key: 'shortName',
      width: 100,
    },
    {
      title: 'Founded',
      dataIndex: 'founded',
      key: 'founded',
      width: 70,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: 70,
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
      width: 100,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 100,
    },
    {
      title: 'TLA',
      dataIndex: 'tla',
      width: 70,
      key: 'tla',
      fixed: true
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
      scroll={{ x: 1100 }}
      sticky
    />
  )
}
