//Components
import MainRoute from 'components/MainRoute/MainRoute.component';
import Page404 from 'pages/404/404.page';

//React Router
import { useRoutes, RouteObject } from 'react-router-dom';

function App() {
  const array: RouteObject[] = [
    MainRoute(),
    { path: '*', element: <Page404 /> },
  ];
  return useRoutes(array);
}

export default App;
