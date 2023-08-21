import React from 'react';
import './App.css';
import { GlobalStyle } from './components/__styles/global.style';
import logo from '../src/assets/images/logo.svg';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store';
import { StyledFlex } from './components/__styles/ui-block.style';
import { styled } from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingLogo />} persistor={persistor}>
        <GlobalStyle />
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;

const StyledLoader = styled(StyledFlex)`
  height: 100vh;
  img {
    opacity: 0.3;
    animation: loading 0.85s ease-in-out infinite alternate;
  }
  @keyframes loading {
    to {
      opacity: 1;
    }
  }
`;

const LoadingLogo = () => (
  <StyledLoader $align="center" $justify="center">
    <img src={logo} alt="Logo" />
  </StyledLoader>
);
