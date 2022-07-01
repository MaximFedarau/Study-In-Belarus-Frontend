//Types
import React, { ReactElement } from 'react';
import { PAGES_TITLES } from 'constants/enum';

//Components
import Carousel from 'components/Home/Carousel/Carousel/Carousel.component';
import LatestNews from 'components/Home/LatestNews/LatestNews/LatestNews.component';

import { HomeContainer } from 'components/Defaults/Container/Container.styles';

export default function Home(): ReactElement {
  React.useEffect(() => {
    document.title = PAGES_TITLES.HOME;
  }, []);
  return (
    <HomeContainer>
      <section>{/* Part with waves */}</section>
      <Carousel />
      <LatestNews />
    </HomeContainer>
  );
}
