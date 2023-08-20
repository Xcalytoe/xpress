import React from 'react';
import './App.css';
import { GlobalStyle } from './components/__styles/global.style';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
