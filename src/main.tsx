import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Template1 } from './pages/template1/';
import { Template2 } from './pages/template2/';
import { Template3 } from './pages/template3';
import { Menu } from './pages/menu';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
  },
  {
    path: "/template1",
    element: <Template1/>,
  },
  {
    path: "/template2",
    element: <Template2/>,
  },
  {
    path: "/template3",
    element: <Template3/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
