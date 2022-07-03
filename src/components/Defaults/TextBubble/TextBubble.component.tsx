//Types
import { ReactElement } from 'react';
import { DEFAULT_SIZES } from 'constants/types/enum';

//Components
import Bubble from 'components/Defaults/Bubble/Bubble.component';
import { Wrapper, MainText } from './TextBubble.styles';

//Interface for Props
interface TextBubbleProps {
  children: string;
  text: string;
  reverse?: boolean;
  size?: { width: string; height: string };
  type?: DEFAULT_SIZES;
}

export default function TextBubble({
  children,
  text,
  reverse,
  size,
  type,
}: TextBubbleProps): ReactElement {
  return (
    <Wrapper type={type} {...size}>
      <MainText type={type} reverse={reverse}>
        {text}
      </MainText>
      <Bubble type={type} size={{ ...size }}>
        {children}
      </Bubble>
    </Wrapper>
  );
}
