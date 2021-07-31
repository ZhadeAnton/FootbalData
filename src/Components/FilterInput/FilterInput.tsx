import React from 'react'
import { Input } from 'antd';

import useFilterList from '../../Hooks/useFilterList';

export default function FilterInput() {
  const filterHook = useFilterList()

  return (
    <Input
      value={filterHook.seatchTerm}
      allowClear
      onChange={(event) => filterHook.handleChange(event.target.value)}
    />
  )
}
