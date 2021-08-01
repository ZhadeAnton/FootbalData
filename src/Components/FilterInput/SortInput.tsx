import React from 'react'
import { Input } from 'antd';

import useFilterList from '../../Hooks/useFilterList';

export default function SortInput() {
  const filterHook = useFilterList()

  return (
    <Input
      value={filterHook.seatchTerm}
      allowClear
      placeholder='Sort by'
      onChange={(event) => filterHook.handleChange(event.target.value)}
      style={{
        width: 90 + '%',
        maxWidth: 23 + 'rem',
      }}
    />
  )
}
