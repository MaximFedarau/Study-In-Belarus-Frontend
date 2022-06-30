//Types
import React, { ReactElement } from 'react';
import { NewsItemInterface } from 'constants/types';
import { DEFAULT_SIZES } from 'constants/enum';

//Components
import {
  LatestNewsColumnContainer,
  LatestNewsColumnSubcontainer,
} from 'components/Defaults/Container/Container.styles';
import NewsItem from 'components/Home/NewsItem/NewsItem.component';

//Interface for Props
interface LatestNewsColumnProps {
  children: NewsItemInterface[];
}

export default function LatestNewsColumn({
  children,
}: LatestNewsColumnProps): ReactElement {
  const mainNews = children[0];
  return (
    <LatestNewsColumnContainer>
      <NewsItem {...mainNews} size={DEFAULT_SIZES.LARGE} />
      <LatestNewsColumnSubcontainer>
        {children.slice(1).map((newsItem, index) => (
          <NewsItem key={index} {...newsItem} size={DEFAULT_SIZES.SMALL} />
        ))}
      </LatestNewsColumnSubcontainer>
    </LatestNewsColumnContainer>
  );
}
