//Types
import { ReactElement } from 'react';

//Components
import { ArticleContainer } from 'components/Defaults/Container/Container.styles';
import Navigation from '../Navigation/Navigation.component';
import ArticleContent from '../ArticleContent/ArticleContent.component';

export default function Article(): ReactElement {
  return (
    <ArticleContainer>
      <ArticleContent />
      <Navigation />
    </ArticleContainer>
  );
}
