import React from 'react'
import Navbar from './componnents/Navbar/Navbar'
import Footer from './componnents/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componnents/Home/Home'
import Contact from './componnents/Contact/Contact'
import Error from './componnents/Error/Error'
import About from './componnents/About/About';
import Projects from './componnents/Projects/Projects';
import Layout from './componnents/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
export default function App() {
let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path:'projects',element:<Projects/>},
        
        { path: '*', element: <Error /> }
       

      ]
    }
  ]);

  return <RouterProvider router={router} />;
}