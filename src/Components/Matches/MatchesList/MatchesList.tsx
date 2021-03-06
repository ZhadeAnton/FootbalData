/* eslint-disable react/display-name */
import React from 'react'
import { Table } from 'antd'

import './matchesList.scss'
import { IMatch } from '../../../Interfaces/MatchIntarfaces'
import MatchStatus from '../MatchStatus/MatchStatus'
import MatchDate from '../MatchDate/MatchDate'
import { getWinner } from '../../../Utils/MatchUtils'

interface Props {
  matches: Array<IMatch>,
  handleClickByMatch: (id: number) => void
}

export default function MatchesList(props: Props) {
  const data = []
  const total = props.matches.length

  for (let i = 0; i < props.matches.length; i++) {
    const winner = getWinner(
        props.matches[i].score.winner,
        props.matches[i].awayTeam.name,
        props.matches[i].homeTeam.name)

    data.push({
      key: i,
      id: props.matches[i].id,
      homeTeamScore: props.matches[i].score.fullTime.homeTeam,
      awayTeamScore: props.matches[i].score.fullTime.awayTeam,
      winner,
      utcDate: props.matches[i].utcDate,
      status: props.matches[i].status,
      homeTeam: props.matches[i].homeTeam.name,
      awayTeam: props.matches[i].awayTeam.name
    })
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'utcDate',
      width: 70,
      render: (date: IMatch['utcDate']) => <MatchDate entryDate={date} parseBy='Date' />
    },
    {
      title: 'Time',
      dataIndex: 'utcDate',
      width: 60,
      render: (date: IMatch['utcDate']) => <MatchDate entryDate={date} parseBy='Time' />
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 70,
      render: (item: IMatch['status']) => <MatchStatus status={item}/>,
    },
    {
      title: 'Match',
      children: [
        {
          title: 'Home Team',
          dataIndex: 'homeTeam',
          width: 250,
        },
        {
          title: 'Away Team',
          dataIndex: 'awayTeam',
          width: 250
        }
      ]
    },
    {
      title: 'Score',
      children: [
        {
          title: 'Home Team',
          dataIndex: 'homeTeamScore',
          width: 50
        },
        {
          title: 'Away Team',
          dataIndex: 'awayTeamScore',
          width: 50
        }
      ]
    },
    {
      title: 'Winner',
      dataIndex: 'winner',
      width: 200
    }
  ];

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
      scroll={{ x: 800 }}
      onRow={(record) => {
        return {
          onClick: () => props.handleClickByMatch(record.id)
        }
      }}
    />
  )
}
