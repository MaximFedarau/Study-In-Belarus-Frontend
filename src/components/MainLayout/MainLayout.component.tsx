//Types
import { ReactElement } from 'react';

//Components
import NavigationBar from 'components/Navigation/NavigationBar/NavigationBar.component';

//React Router
import { Outlet } from 'react-router-dom';

export default function MainLayout(): ReactElement {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
