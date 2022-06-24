//Types
import React, { ReactElement } from 'react';

//Components
import { ReactComponent } from 'assets/images/advantages/advantages_students.svg';

export default function Advantages(): ReactElement {
  React.useEffect(() => {
    document.title = 'Advantages';
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <ReactComponent />
    </div>
  );
}
