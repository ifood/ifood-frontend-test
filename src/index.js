import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { RecoilRoot } from 'recoil';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
