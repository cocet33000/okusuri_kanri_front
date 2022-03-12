import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TaskItem from './TaskItem'

export default function TaskItemList(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <TaskItem name={'おくすりA'} frequency={'毎日10時'}/>
      </ListItem>
      <ListItem>
        <TaskItem name={'おくすりB'} frequency={'週1'}/>
      </ListItem>
    </List>
  );
}
