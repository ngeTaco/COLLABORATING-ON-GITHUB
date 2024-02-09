import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import PageOne from './PageOne.jsx';
// import PageTwo from './PageTwo.jsx';
import PageThree from './PageThree.jsx';
import BlackPage from './BlackPage/BlackPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      {/* Homepage */}
      <Route index element={<PageOne />} />


    
      <Route path="page-02" element={<BlackPage />} />
      <Route path="page-03" element={<PageThree />} />


    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
