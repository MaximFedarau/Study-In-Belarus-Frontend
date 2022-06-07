//Types
import { ReactElement } from 'react';

//React Router
import { Outlet } from 'react-router-dom';

export default function NavigationBar(): ReactElement {
  return (
    <div>
      Navigation
      <Outlet />
    </div>
  );
}
