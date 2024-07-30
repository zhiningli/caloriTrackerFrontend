import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import themeColor from './components/Theme/theme';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={themeColor}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
