//Pages
import Home from 'pages/Home/Home.page';
import Advantages from 'pages/Advantages/Advantages.page';

//Components
import MainLayout from 'components/MainLayout/MainLayout.component';

//React Router
import { RouteObject } from 'react-router-dom';

export default function MainRoute(): RouteObject {
  const element: RouteObject = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/advantages',
        element: <Advantages />,
      },
    ],
  };
  return element;
}
