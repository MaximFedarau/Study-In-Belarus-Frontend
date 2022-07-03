//Types
import { ReactElement } from 'react';
import { DEFAULT_SIZES } from 'constants/enum';

//Components
import {
  BubbleText,
  BubbleContainer,
  BubbleSubtext,
  BubbleWrapper,
} from './Bubble.styles';

//Interface for Props
interface BubbleProps {
  children: number | string;
  isActive?: boolean;
  size?: { width?: string; height?: string };
  subtext?: string;
  type?: DEFAULT_SIZES;
}

export default function Bubble({
  children,
  isActive,
  size,
  subtext,
  type,
}: BubbleProps): ReactElement {
  return (
    <BubbleWrapper {...size} type={type}>
      <BubbleContainer type={type} {...size}>
        <BubbleText type={type} isActive={isActive}>
          {children}
        </BubbleText>
        <BubbleSubtext type={type}>{subtext}</BubbleSubtext>
      </BubbleContainer>
    </BubbleWrapper>
  );
}
