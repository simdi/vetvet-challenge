import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search';

export const AppContext = React.createContext();

function App() {
  const practices = useSelector((state) => state.practices);

  return (
    <div className="App">
      <AppContext.Provider value={
        practices
      }>
        <Navbar />
        <Search />
      </AppContext.Provider>
    </div>
  );
}

export default App;
