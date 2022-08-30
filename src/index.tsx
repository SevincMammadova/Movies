/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App/App';
import { rootStore } from './store/store';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={rootStore}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
