import React, { CSSProperties } from 'react'
import { BackTop } from 'antd';

export default function BackTopButton() {
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  } as CSSProperties

  return (
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  )
}
