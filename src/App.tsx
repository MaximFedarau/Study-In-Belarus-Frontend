//Types
import { ReactElement } from 'react';

//Pages
import Home from './pages/Home/Home.page';

//Components
import MainLayout from './components/MainLayout/MainLayout.component';

//React Router
import { Routes, Route } from 'react-router-dom';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
