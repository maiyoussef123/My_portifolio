import React from 'react'
import Layout from './componnents/Layout/Layout.jsx';
import Movies from './componnents/Movies/Movies.jsx';
import Tv from './componnents/Tv/Tv.jsx';
import Error from './componnents/Erorr/Erorr.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";

export default function App() {
  let Routing = createBrowserRouter([{
    path: '/',element: <Layout/>, children: [
      {path: '/', element: <Movies/>},
      {path: '/movies', element: <Movies/>},
      {path: '/tv', element: <Tv/>},
      {path: '*', element: <Error/>}
      
    ]
      
   }])
  return <>
   <RouterProvider router={Routing} />
   <div>
    <Online>Only shown when you're online <i class="fa-solid fa-wifi"></i></Online>
    <Offline>Only shown offline (surprise!)</Offline>
  </div>
  </>
}