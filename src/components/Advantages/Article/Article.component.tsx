//Types
import { ReactElement } from 'react';

//Components
import {
  ArticleContainer,
  ArrowContainer,
} from 'components/Defaults/Container/Container.styles';
import Navigation from '../Navigation/Navigation.component';
import ArticleContent from '../ArticleContent/ArticleContent.component';

import IconBubble from 'components/Defaults/IconBubble/IconBubble.component';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Article(): ReactElement {
  return (
    <ArticleContainer>
      <ArrowContainer>
        <IconBubble size={{ width: '36px', height: '36px' }}>
          <KeyboardArrowUpIcon />
        </IconBubble>
      </ArrowContainer>
      <ArticleContent />
      <Navigation />
    </ArticleContainer>
  );
}
