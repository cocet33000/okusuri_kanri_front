import * as React from 'react';
import SelectBox from './SelectBox'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FrequencyPicker from './FrequencyPicker'

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
        <Divider light />
        <ListItem button divider>
            <ListItemText primary="種類" />
        </ListItem>
        <Divider light />
        <ListItem button>
            <FrequencyPicker />
        </ListItem>
        </List>
    );
}
