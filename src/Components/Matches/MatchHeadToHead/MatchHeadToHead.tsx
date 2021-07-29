import React from 'react'
import { Table } from 'antd';

import { IMatchInDetails } from '../../../Interfaces/MatchIntarfaces';

interface Props {
  head2head: IMatchInDetails['head2head']
}

export default function MatchHeadToHead(props: Props) {
  const awayTeam = props.head2head.awayTeam
  const homeTeam = props.head2head.homeTeam

  const data = [awayTeam, homeTeam]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
      fixed: true
    },
    {
      title: 'Wins',
      dataIndex: 'wins',
      width: 100,
    },
    {
      title: 'Draws',
      dataIndex: 'draws',
      width: 100,
    },
    {
      title: 'Losses',
      dataIndex: 'losses',
      width: 100,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ x: 350 }}
    />
  )
}
