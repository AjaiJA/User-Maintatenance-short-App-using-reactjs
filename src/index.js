import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Products from './Components/Views/Products'
import Settings from './Components/Views/Settings'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />}>
            <Route index element={<Products />} />
            <Route path="products" element={<Products />} />
            <Route path="settings" element={<Settings />} /> 
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
