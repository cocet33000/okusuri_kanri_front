import * as React from 'react';
import Button from '@mui/material/Button';
import TaskCard from './components/TaskCard'

export default function Task() {
  return (
    <div>
      <Button fullWidth='true' variant="contained">追加</Button>
      <TaskCard />
      <TaskCard />
    </div>
  );
}
