import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PatientsProvider } from './context/PatientsContext';

ReactDOM.render(
  <React.StrictMode>
    <PatientsProvider>
      <App />
    </PatientsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
