import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import App from './App.tsx';
import './index.scss';
import UseMemo from './UseMemo.tsx';
import UseCallback from './UseCallback/UseCallback.tsx';
import UseContext from './UseContext/UseContext.tsx';
import UseDebounce from './UseDebounce/UseDebounce.tsx';
import UseEffect from './UseEffect/UseEffect.tsx';
import UseRef from './UseRef/UseRef.tsx';
import UseReducer from './useReducer/UseReducer.tsx';
import Redux from './Redux/Redux.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/use-memo',
        element: <UseMemo />,
      },
      {
        path: '/use-callback',
        element: <UseCallback />,
      },
      {
        path: '/use-effect',
        element: <UseEffect />,
      },
      {
        path: '/use-reducer',
        element: <UseReducer />,
      },
      {
        path: '/use-context',
        element: <UseContext />,
      },
      {
        path: '/use-ref',
        element: <UseRef />,
      },
      {
        path: '/use-debounce',
        element: <UseDebounce />,
      },
      {
        path: '/redux',
        element: <Redux />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
