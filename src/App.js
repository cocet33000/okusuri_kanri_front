import './App.css';
import { createContext, useState } from 'react';

import TopBar from './components/TopBar'
import Container from '@mui/material/Container';
import Task from './Task'
import Today from './Today'
import SimpleBottomNavigation from './components/BottomNavigation';

export const MenuContext = createContext();

function App() {
  const [menu, setMenu] = useState('今日');
  const MenuState = {
    menu,
    setMenu,
  };

  return (
    <div className="App">
      <MenuContext.Provider value={MenuState}>
        <TopBar />
        <Container maxWidth="sm" sx={{marginTop:'10px'}}>
          {menu=='今日' && <Today /> }
          {menu=='タスク' && <Task /> }
        </Container>
        <SimpleBottomNavigation />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
