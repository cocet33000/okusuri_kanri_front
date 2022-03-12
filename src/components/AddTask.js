import * as React from 'react';
import SelectBox from './SelectBox'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    maxWidth: 400,
    bgcolor: 'background.paper',
  };


export default function AddTask() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
            <SelectBox />
        </ListItem>
        <Divider />
        <ListItem button divider>
            <ListItemText primary="種類" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="頻度" />
        </ListItem>
        <Divider light />
        </List>
    );
}
