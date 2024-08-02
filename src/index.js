import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import themeColor from './components/Theme/theme';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Log the theme object to ensure it's defined
console.log('Theme Object:', themeColor);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeColor}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
