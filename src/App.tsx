//Types
import { ReactElement } from 'react';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<h1>Main Page</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
