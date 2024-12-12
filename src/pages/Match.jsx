import React from 'react'
import { lazy } from 'react'


const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));


function Match() {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

export default Match