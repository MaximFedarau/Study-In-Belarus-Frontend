//Types
import { ReactElement } from 'react';

//Components
import NavigationBar from '../Navigation/NavigationBar/NavigationBar.component';
import Footer from '../Footer/MainComponent/Footer.component';
import { OutletContainer } from 'components/Defaults/Container/Container.styles';

//React Router
import { Outlet } from 'react-router-dom';

export default function MainLayout(): ReactElement {
  return (
    <>
      <NavigationBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </>
  );
}
