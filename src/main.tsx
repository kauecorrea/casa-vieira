import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './styles/globals.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
], {
  basename: import.meta.env.MODE === 'production' ? '/casa-vieira' : '/',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
