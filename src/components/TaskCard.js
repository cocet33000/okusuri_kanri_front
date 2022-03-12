import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import {CircleNotificationsRounded} from '@mui/icons-material'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TaskCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            お薬A
            </Typography>
        </Grid>
        <Grid item xs={8} >
        </Grid>
        <Grid item xs={4}>
            <Typography variant="body2">
            毎日10時
            </Typography>
        </Grid>
        <Grid item xs={8} >
        </Grid>
        <Grid item xs={10} >
        </Grid>
        <Grid item xs={2}>
          <Icon color='primary' component={CircleNotificationsRounded}/>
        </Grid>
      </Grid>
    </CardContent>
    </Card>
  );
}
