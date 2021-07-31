import React, { useState } from 'react';
import { Divider, Drawer } from 'antd';

import './hamburgerMenu.scss'
import useHistoryPush from '../../../Hooks/useHistory';

export default function HamburgerMenu() {
  const [visible, setVisible] = useState(false);

  const history = useHistoryPush()

  const showDrawer = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  }

  return (
    <div
      className='hamburger-menu'
      onClick={() => setVisible(!visible)}
    >
      <Drawer
        title="Soccer Stat"
        placement="right"
        closable={true}
        onClose={showDrawer}
        visible={visible}
      >
        <p onClick={() => {
          history('/leagues')
          onClose()
        }}>
          Leagues
        </p>

        <Divider />

        <p onClick={() => {
          history('/matches')
          onClose()
        }}>
          Matches
        </p>

        <Divider />
      </Drawer>

      <span className='hamburger-menu__line'></span>
      <span className='hamburger-menu__line'></span>
      <span className='hamburger-menu__line'></span>
    </div>
  )
}
