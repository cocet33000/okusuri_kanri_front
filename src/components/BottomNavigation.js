import * as React from 'react';
import { useState, useContext } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Icon from '@mdi/react'
import {
    mdiCalendarCheck,
    mdiChartBar,
    mdiPill
} from '@mdi/js';

import { MenuContext } from "../App";

export default function SimpleBottomNavigation() {
    const { menu, setMenu } = useContext(MenuContext);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
    showLabels
    value={menu}
    onChange={(event, newValue) => {
        setMenu(newValue);
    }}
    >
    <BottomNavigationAction label="今日" icon={<Icon path={mdiCalendarCheck}/>} value='今日' />
    <BottomNavigationAction label="進行状況" icon={<Icon path={mdiChartBar}/>} value='進行状況' />
    <BottomNavigationAction label="タスク" icon={<Icon path={mdiPill}/>} value='タスク' />
    </BottomNavigation>
    </Paper>
  );
}
