//Types
import { ReactElement } from 'react';

//Components
import { NavigationItemContainer } from 'components/Defaults/Container/Container.styles';
import { ArticleText } from 'components/Defaults/Text/Text.styles';
import Bubble from 'components/Defaults/Bubble/Bubble.component';

//React Router
import { useLocation, Link } from 'react-router-dom';

//Interface for Props
interface NavigationItemProps {
  children: string;
  index: number;
  link: string;
}

export default function NavigationItem({
  children,
  index,
  link,
}: NavigationItemProps): ReactElement {
  const location = useLocation();
  return (
    <Link to={link}>
      <NavigationItemContainer>
        <Bubble
          size={{ width: '56px', height: '56px' }}
          isActive={link === location.pathname}
        >
          {index}
        </Bubble>
        <>
          <ArticleText isActive={link === location.pathname}>
            {children}
          </ArticleText>
        </>
      </NavigationItemContainer>
    </Link>
  );
}
