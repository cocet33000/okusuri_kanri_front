import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBox() {
  const [taskType, setTaskType] = React.useState('服薬');

  const handleChange = (event) => {
    setTaskType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">タイプ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={taskType}
          label="タイプ"
          onChange={handleChange}
        >
          <MenuItem value={10}>服薬</MenuItem>
          <MenuItem value={20}>症状チェック</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
