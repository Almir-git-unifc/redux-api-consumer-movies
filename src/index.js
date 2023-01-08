import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
