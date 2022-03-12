import './App.css';
import { createContext, useState } from 'react';

import TopBar from './components/TopBar'
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
        <SimpleBottomNavigation />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
