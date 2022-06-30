//Types
import { ReactElement } from 'react';

//Components
import { BubbleText, BubbleContainer } from './Bubble.styles';

//Interface for Props
interface BubbleProps {
  children: number | string;
  isActive?: boolean;
  size?: { width?: string; height?: string };
}

export default function Bubble({
  children,
  isActive,
  size,
}: BubbleProps): ReactElement {
  return (
    <BubbleContainer {...size}>
      <BubbleText isActive={isActive}>{children}</BubbleText>
    </BubbleContainer>
  );
}
