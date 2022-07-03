//Types
import { ReactElement } from 'react';

//Constants
import { LATEST_NEWS } from 'constants/constants/data';

//Components
import Column from '../Column/Column.component';
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
        <Column>{LATEST_NEWS[0]}</Column>
        <Column>{LATEST_NEWS[1]}</Column>
      </LatesNewsContent>
    </LatestNewsContainer>
  );
}
