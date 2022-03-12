import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Icon from '@mdi/react'
import {
    mdiCalendarCheck,
    mdiChartBar,
    mdiPill
} from '@mdi/js';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
    }}
    >
    <BottomNavigationAction label="今日" icon={<Icon path={mdiCalendarCheck}/>} />
    <BottomNavigationAction label="進行状況" icon={<Icon path={mdiChartBar}/>} />
    <BottomNavigationAction label="タスク" icon={<Icon path={mdiPill}/>} />
    </BottomNavigation>
    </Paper>
  );
}
