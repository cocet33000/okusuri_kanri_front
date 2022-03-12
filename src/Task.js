import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TaskCard from './components/TaskCard';
import Modal from '@mui/material/Modal';
import AddTask from './components/AddTask';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 12,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Task() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} fullWidth='true' variant="contained">追加</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <AddTask/>
          <Grid container spacing={2}>
          <Grid item xs={8} >
          <Button onClick={handleClose}>キャンセル</Button>
          </Grid>
          <Grid item xs={4}>
          <Button >追加</Button>
          </Grid>
          </Grid>
        </Box>
      </Modal>
      <TaskCard name={'おくすりA'} frequency={'毎日10時'}/>
      <TaskCard name={'おくすりB'} frequency={'週１'}/>
    </div>
  );
}
