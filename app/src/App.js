import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/globals';
import Routes from './routes/index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose />
    </BrowserRouter>
  );
}
