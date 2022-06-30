//Types
import { ReactElement } from 'react';

//Constants
import { LATEST_NEWS } from 'constants/constants';

//Components
import LatestNewsColumn from '../LatestNewsColumn/LatestNewsColumn.component';
import {
  LatestNewsContainer,
  LatestNewsHeader,
  LatesNewsContent,
} from 'components/Defaults/Container/Container.styles';
import {
  LatestNewsHeaderSubText,
  LatestNewsHeaderText,
} from 'components/Defaults/Text/Text.styles';

export default function LatestNews(): ReactElement {
  return (
    <LatestNewsContainer>
      <LatestNewsHeader>
        <LatestNewsHeaderText>Latest News</LatestNewsHeaderText>
        <LatestNewsHeaderSubText>All News</LatestNewsHeaderSubText>
      </LatestNewsHeader>
      <LatesNewsContent>
        <LatestNewsColumn>{LATEST_NEWS[0]}</LatestNewsColumn>
        <LatestNewsColumn>{LATEST_NEWS[1]}</LatestNewsColumn>
      </LatesNewsContent>
    </LatestNewsContainer>
  );
}
