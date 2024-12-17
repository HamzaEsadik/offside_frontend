import React from 'react'
import { lazy } from 'react'
const Header = lazy(() => import('../layouts/Header'));
const Footer = lazy(() => import('../layouts/Footer'));

function PrivacyPolicy() {
  return (
    <div>
      <Header/>
      <section className='px-4 py-12 flex flex-col gap-6'>
        <h2>Privacy Policy</h2>
        <p className='text-lg'>Offside we values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or use our website, [Your Website URL], and its services. By accessing our website, you agree to the practices outlined in this policy.</p>
        <div className='pl-4'>
          <ul className='text-lg'>
            1. Information We Collect:
            <li className='list-disc'>
              <p>Personal Information: When you sign up for our services, subscribe to our newsletter, or contact us, we may collect your name, email address, and other details you provide.</p>
            </li>
            <li>
              <p>Non-Personal Information: We automatically collect data like your IP address, browser type, device information, and browsing behavior to enhance your user experience.</p>
            </li>
            <li>
              <p>Cookies and Tracking Technologies: We use cookies and similar tools to improve functionality, analyze traffic, and personalize content. You can manage your cookie preferences through your browser settings.</p>
            </li>
          </ul>
        </div>
        <div className='pl-4'>
          <ul className='text-lg'>
            2. How We Use Your Information
            <li className='list-disc'>
              <p>Provide and improve our website and services.</p>
            </li>
            <li><p>Send you updates, newsletters, and promotional content (only if you’ve opted in).</p></li>
            <li><p>Analyze user behavior to enhance our offerings.</p></li>
            <li><p>Respond to your inquiries or customer service requests.</p></li>
          </ul>
          <p>We will never sell, rent, or share your personal information with third parties for their direct marketing purposes.</p>
        </div>
        <div className='pl-4'>
          <ul className='text-lg'>
          3. Sharing Your Information
            <li className='list-disc'>
              <p>Service Providers: Trusted partners who assist us in website hosting, analytics, and email delivery.</p>
            </li>
            <li>
              <p>Legal Obligations: If required by law or to protect our legal rights, we may disclose your information.</p>
            </li>
            <li>
              <p>Business Transfers: In case of a merger, sale, or transfer of assets, your information may be part of the transferred assets.</p>
            </li>
          </ul>
        </div>
        <div className='pl-4'>
          <ul className='text-lg'>
          4. Data Security
            <p>We implement robust security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.</p>
          </ul>
        </div>
        <div className='pl-4'>
          <ul className='text-lg'>
          4. Data Security
            <p>We implement robust security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.</p>
          </ul>
        </div>
        <div className='pl-4'>
          <ul className='text-lg'>
          5. Third-Party Links
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Please review their privacy policies before providing any information.</p>
          </ul>
        </div>
        <div className='pl-4'>
          <ul className='text-lg'>
          6. Changes to This Policy
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review the policy periodically to stay informed.</p>
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy