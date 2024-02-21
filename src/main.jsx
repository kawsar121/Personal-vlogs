import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Main/Home/Home.jsx';
import TravelVlogs from './Main/TravelVlogs/TravelVlogs.jsx';
import AboutMe from './Main/AboutMe/AboutMe.jsx';
import Root from './Root/Root.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/blogs",
        element: <TravelVlogs></TravelVlogs>
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
