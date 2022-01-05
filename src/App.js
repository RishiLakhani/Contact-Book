import './style-sheet.css';
import ContextProvider from './context/ContextProvider';
import Header from './Components/Header';
import React from 'react'

const App = () => {
  return (
    <div className="Wrapper">
      <Header />
      <ContextProvider />
    </div>
  );
}

export default App;
