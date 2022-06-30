//Types
import React, { ReactElement } from 'react';

//Components
import LatestNews from 'components/Home/LatesNews/LatestNews.component';

import { HomeContainer } from 'components/Defaults/Container/Container.styles';

export default function Home(): ReactElement {
  React.useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <HomeContainer>
      <div>{/* Part with waves */}</div>
      <div>{/* Part with carousel */}</div>
      <LatestNews />
    </HomeContainer>
  );
}
