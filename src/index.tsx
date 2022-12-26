import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import CONSTANTS from './config/constants';
import './index.css';
import App from './App';

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter basename={CONSTANTS.basename}>
    <App />
  </BrowserRouter>
);