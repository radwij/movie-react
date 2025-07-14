import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from "react-router-dom";
import './css/index.css'
import App from './App.jsx'
import router from './router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)