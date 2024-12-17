import React from 'react'
import { lazy } from 'react'
const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));

function TermsAndConditions() {
  return (
    <div>
      <Header/>
      <section className='px-4 py-12 flex flex-col gap-6'>
        <h2>Terms and Conditions</h2>
        <p className='text-lg'>Welcome to Offside we. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions.</p>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            1. Use of Website
            <li className='list-disc'>
              <p>You agree to use our website solely for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
            </li>
            <li>
              <p>You must be at least 13 years old to use our services. By using our website, you represent that you meet this age requirement.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            2. Content and Intellectual Property
            <li className='list-disc'>
              <p>All content on this website, including text, graphics, logos, images, and software, is the property of Offside or its content suppliers and is protected by copyright and intellectual property laws.</p>
            </li>
            <li>
              <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without prior written consent.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            3. User Accounts and Conduct
            <li className='list-disc'>
              <p>When creating an account, you must provide accurate and complete information and keep your account details current.</p>
            </li>
            <li>
              <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
            </li>
            <li>
              <p>Prohibited activities include: harassing or causing distress to other users, posting offensive content, attempting to gain unauthorized access to the website or other users' accounts.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            4. Disclaimer of Warranties
            <li className='list-disc'>
              <p>Our website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied.</p>
            </li>
            <li>
              <p>We do not guarantee the accuracy, completeness, or reliability of any information, content, or results obtained through our website.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            5. Limitation of Liability
            <li className='list-disc'>
              <p>We will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, or use of, the website.</p>
            </li>
            <li>
              <p>In no event shall our total liability to you exceed the amount you have paid us in the past six months, or $50, whichever is less.</p>
            </li>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            6. Modifications to Terms
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of the site constitutes acceptance of the updated terms.</p>
          </ul>
        </div>
        
        <div className='pl-4'>
          <ul className='text-lg'>
            7. Governing Law
            <p>These Terms and Conditions are governed by and construed in accordance with the laws. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts.</p>
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default TermsAndConditions