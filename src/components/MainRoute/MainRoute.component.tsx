//Pages
import Home from 'pages/Home/Home.page';

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
        element: <div style={{ minHeight: '100vh' }}>Advantages</div>,
      },
    ],
  };
  return element;
}
