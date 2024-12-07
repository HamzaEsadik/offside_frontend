import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react';
import router from './services/routes'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
       <RouterProvider router={router} />
     </Suspense>
  </StrictMode>,
);
