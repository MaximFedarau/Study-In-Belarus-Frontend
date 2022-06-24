//Types
import React, { ReactElement } from 'react';

export default function Advantages(): ReactElement {
  React.useEffect(() => {
    document.title = 'Advantages';
  }, []);
  return <div style={{ minHeight: '100vh' }}>Advantages</div>;
}
