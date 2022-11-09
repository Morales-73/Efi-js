import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/index.css'
import { LangProvider } from './context/langContext';
import { ThemeProvider } from './context/themeContext';

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <LangProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </LangProvider>
  </ThemeProvider>
);