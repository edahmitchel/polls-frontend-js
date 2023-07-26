import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { ChakraProvider} from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';

import { ApiProvider } from '@reduxjs/toolkit/query/react/';
import { apiSlice } from './assets/app/api/apiSlice.js';
import { MoreInfo } from './pages/signup2.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { AddElectoralDetails } from './pages/AddElectoralDetails';

const pollsRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn></SignIn>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
   
  },
  
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/registerDetails/:userinfo",
        element: <MoreInfo></MoreInfo>
      },
      {
        path: "/dashboard/addElectoralDetails",
        element: <AddElectoralDetails></AddElectoralDetails> 
      }
    ]
   
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ApiProvider api={apiSlice}>
        <RouterProvider router={pollsRouter}></RouterProvider>
      </ApiProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
