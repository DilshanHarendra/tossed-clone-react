import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
// eslint-disable-next-line
import 'swiper/css/bundle';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_ENV=='dev'?'':'/tossed-clone-react'}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
