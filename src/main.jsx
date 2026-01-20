import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import BMIAppWithGauge from './BMIAppWithGauge.jsx';
import Root from './Root.jsx';
import BMIApp from './BMIApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:BMIApp,
      },
      {
        path:'version-2',
        Component:BMIAppWithGauge,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
