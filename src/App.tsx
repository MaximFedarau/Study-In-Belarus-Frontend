//Components
import MainRoute from 'components/MainRoute/MainRoute.component';

//React Router
import { useRoutes, RouteObject } from 'react-router-dom';

function App() {
  const array: RouteObject[] = [
    MainRoute(),
    { path: '*', element: <h1>404</h1> },
  ];
  return useRoutes(array);
}

export default App;
