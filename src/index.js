import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/GlobalStyles';
import { theme } from 'theme';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/big-on-bygg-ab">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
