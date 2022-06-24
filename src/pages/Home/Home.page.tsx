//Types
import React, { ReactElement } from 'react';

export default function Home(): ReactElement {
  React.useEffect(() => {
    document.title = 'Home';
  }, []);
  return <div style={{ minHeight: '100vh' }}>Home</div>;
}
