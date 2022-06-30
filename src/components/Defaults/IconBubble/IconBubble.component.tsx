//Types
import { ReactElement } from 'react';

//Components
import { IconBubbleContainer } from './IconBubble.styles';

//Interfaces for Props
interface IconBubbleProps {
  children: ReactElement;
  size?: { width?: string; height?: string };
}

export default function IconBubble({
  children,
  size,
}: IconBubbleProps): ReactElement {
  return <IconBubbleContainer {...size}>{children}</IconBubbleContainer>;
}
