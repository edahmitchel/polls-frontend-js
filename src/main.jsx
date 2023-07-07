import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider} from "@chakra-ui/react";

import { ApiProvider } from '@reduxjs/toolkit/query/react/';
import { apiSlice } from './assets/api/apiSlice.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
