import React, {lazy} from 'react';
import {useRoutes} from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
function Router(){
    return useRoutes([
        {
            path:'/',
            element:<DefaultLayout/>,
            children : [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: 'about',
                    element: <AboutPage />,
                }
            ]
        }
    ]);
}export default Router;
