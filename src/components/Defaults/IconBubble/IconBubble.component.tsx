//Types
import { ReactElement } from 'react';

//Components
import { IconBubbleContainer } from './IconBubble.styles';

//Interfaces for Props
interface IconBubbleProps {
  children: ReactElement;
  size?: { width?: string; height?: string };
  onClick?: () => void;
}

export default function IconBubble({
  children,
  size,
  onClick,
}: IconBubbleProps): ReactElement {
  return (
    <IconBubbleContainer onClick={onClick} {...size}>
      {children}
    </IconBubbleContainer>
  );
}
