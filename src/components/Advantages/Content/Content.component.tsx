//Types
import { ReactElement } from 'react';

//Components
import { AdvantagesContentContainer } from 'components/Defaults/Container/Container.styles';
import { ArticlePathText } from 'components/Defaults/Text/Text.styles';
import Article from '../Article/Article.component';

export default function Content(): ReactElement {
  return (
    <AdvantagesContentContainer>
      <ArticlePathText>
        {'Main > Why Belarus > Advantages of Studying in Belarus'}
      </ArticlePathText>
      <Article />
    </AdvantagesContentContainer>
  );
}
