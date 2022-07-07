//Types
import { ReactElement } from 'react';
import { NewsItemInterface } from 'types/types';
import { DEFAULT_SIZES } from 'types/enum';

//Components
import {
  LatestNewsColumnContainer,
  LatestNewsColumnSubcontainer,
} from 'components/Defaults/Section/Section.styles';
import NewsItem from 'components/Home/LatestNews/NewsItem/NewsItem.component';

//Interface for Props
interface LatestNewsColumnProps {
  children: NewsItemInterface[];
}

export default function Column({
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
