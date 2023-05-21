import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './Routes';
import { RouterProvider } from 'react-router-dom'; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from '@mui/material';
import ETheme from './theme/ETheme';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <ThemeProvider theme={ETheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

