import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux"
import { BrowserRouter, HashRouter } from 'react-router-dom';
import setupStore from './redux/redux-store';
import React from 'react';

const store = setupStore()

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
         <BrowserRouter>
            <Provider store={store}>
               <App />
            </Provider>
         </BrowserRouter>
   )
}
else {
   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <HashRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </HashRouter>
   )
}

postMessage({ payload: 'removeLoading' }, '*')