import React from 'react'
import { lazy } from 'react'
const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));

function CookiePolicy() {
  return (
    <div>
      <Header/>
      <section className='px-4 py-12 flex flex-col gap-6'>
        <h2>Cookie Policy</h2>
        <p className='text-lg'>Offside we uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content.</p>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            1. What Are Cookies?
            <li className='list-disc'>
              <p>Cookies are small text files stored on your device when you visit a website. They help us recognize your browser and capture specific information about your interactions.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            2. Types of Cookies We Use
            <li className='list-disc'>
              <p>Essential Cookies: Necessary for the website to function properly. These are required for basic features like site navigation and access to secure areas.</p>
            </li>
            <li>
              <p>Performance Cookies: Help us understand how visitors interact with our website by collecting anonymous data about page visits and load times.</p>
            </li>
            <li>
              <p>Functional Cookies: Enable enhanced functionality like remembering your preferences and providing personalized features.</p>
            </li>
            <li>
              <p>Advertising Cookies: Used to deliver more relevant advertisements and measure the effectiveness of our marketing campaigns.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            3. How to Manage Cookies
            <li className='list-disc'>
              <p>You can control and manage cookies through your browser settings. Most browsers allow you to block, delete, or disable cookies.</p>
            </li>
            <li>
              <p>Please note that blocking cookies may impact the functionality of our website and limit your user experience.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            4. Third-Party Cookies
            <li className='list-disc'>
              <p>We may allow third-party services like Google Analytics to place cookies on our website to help us analyze site traffic and user behavior.</p>
            </li>
            <li>
              <p>These third-party services may also use cookies to serve personalized advertisements.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            5. Cookie Consent
            <li className='list-disc'>
              <p>By continuing to use our website, you consent to our use of cookies as described in this policy.</p>
            </li>
            <li>
              <p>You can withdraw your consent at any time by adjusting your browser settings or using our cookie consent management tool.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            6. Updates to Cookie Policy
            <p>We may update this Cookie Policy from time to time. We encourage you to review this policy periodically to stay informed about our cookie practices.</p>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            7. Contact Us
            <p>If you have any questions about our Cookie Policy, please contact us at Offside@contact.com</p>
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default CookiePolicy