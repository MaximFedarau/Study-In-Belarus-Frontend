//Types
import { ReactElement } from 'react';

//Components
import NavigationBar from '../Navigation/NavigationBar/NavigationBar.component';
import Footer from '../Footer/MainComponent/Footer.component';

//React Router
import { Outlet } from 'react-router-dom';

export default function MainLayout(): ReactElement {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}
