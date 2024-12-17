import React from 'react'
import { lazy } from 'react'
import { Link } from 'react-router-dom'

const Header = lazy(() => import('../layouts/Header'));

function Error404() {
  return (
    <>
    <Header/>
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-primary mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for seems to have gone offside.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/" 
              className="bg-primary text-card px-6 py-3 rounded-lg hover:bg-card hover:text-text transition duration-300"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      
    </div>
    </>
    
  )
}

export default Error404