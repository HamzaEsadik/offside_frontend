import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const League = lazy(() => import('../pages/League'));
const Match = lazy(() => import('../pages/Match'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../pages/TermsAndConditions'));
const CookiePolicy = lazy(() => import('../pages/CookiePolicy'));
const Error404 = lazy(() => import('../pages/Error404'));



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/League/:leagueId',
    element: <League/>,
  },
  {
    path: '/Match/:matchId',
    element: <Match/>,
  },
  {
    path: '/About-us',
    element: <AboutUs/>,
  },
  {
    path: '/About-us',
    element: <AboutUs/>,
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy/>,
  },
  {
    path: '/terms',
    element: <TermsAndConditions/>,
  },
  {
    path: '/cookie',
    element: <CookiePolicy/>,
  },
  {
    path: '*',
    element: <Error404/>,
  },
]);

export default router