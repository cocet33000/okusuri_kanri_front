import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
    }}
    >
    <BottomNavigationAction label="Hoge" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Fuga" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Piyo" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
