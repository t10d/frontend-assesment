import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './styles/provider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
