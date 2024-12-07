import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const League = lazy(() => import('../pages/League'));
const Match = lazy(() => import('../pages/Match'));

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
]);

export default router