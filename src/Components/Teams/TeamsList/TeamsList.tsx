/* eslint-disable react/display-name */
import React from 'react'
import { Table } from 'antd'

import { ITeamWithImage } from '../../../Interfaces/TeamInterfaces'

interface Props {
  teams: Array<ITeamWithImage>,
  handleClickByTeam: (id: number) => void
}

export default function TeamsList(props: Props) {
  const data = []
  const total = props.teams.length

  for (let i = 0; i < props.teams.length; i++) {
    data.push({
      key: i,
      crestUrl: <img
        src={props.teams[i].crestUrl}
        alt="Logo"
        width={60}
        height={60}
      />,
      id: props.teams[i].id,
      areaName: props.teams[i].area.name,
      name: props.teams[i].name,
      shortName: props.teams[i].shortName,
      founded: props.teams[i].founded,
      venue: props.teams[i].venue,
      tla: props.teams[i].tla
    })
  }

  const columns = [
    {
      title: 'Logo',
      dataIndex: 'crestUrl',
      width: 10,
      fixed: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 20
    },
    {
      title: 'Short Name',
      dataIndex: 'shortName',
      width: 20,
    },
    {
      title: 'TLA',
      dataIndex: 'tla',
      width: 10,
    },
    {
      title: 'Venue',
      dataIndex: 'venue',
      width: 30,
    },
    {
      title: 'founded',
      dataIndex: 'founded',
      width: 10,
    }
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{cursor: 'pointer'}}
      pagination={{
        pageSize: 10,
        total,
        position: ['topRight'],
        showSizeChanger: false,
        size: 'small'
      }}
      bordered
      scroll={{ x: 900 }}
      sticky
      onRow={(record) => {
        return {
          onClick: () => props.handleClickByTeam(record.id)
        }
      }}
    />
  )
}
