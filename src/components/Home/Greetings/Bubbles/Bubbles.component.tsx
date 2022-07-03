//Types
import { ReactElement } from 'react';
import { DEFAULT_SIZES } from 'constants/types/enum';

//Components
import Bubble from 'components/Defaults/Bubble/Bubble.component';
import TextBubble from 'components/Defaults/TextBubble/TextBubble.component';

import {
  BubblesContainer,
  HorizontalBubbles,
  LastHorizontalBubbles,
} from 'components/Defaults/Container/Container.styles';

export default function Bubbles(): ReactElement {
  return (
    <BubblesContainer>
      <HorizontalBubbles>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            right: 120,
          }}
        >
          <TextBubble
            type={DEFAULT_SIZES.SMALL}
            size={{ width: '18vw', height: '18vw' }}
            text="Choose Your profession, university and programme"
          >
            1
          </TextBubble>
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Bubble
            type={DEFAULT_SIZES.LARGE}
            subtext={'Learn about admission criteria and learning environment'.toUpperCase()}
            size={{ width: '30vw', height: '30vw' }}
          >
            2
          </Bubble>
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            right: 85,
          }}
        >
          <Bubble
            type={DEFAULT_SIZES.MEDIUM}
            subtext={'Prepare the documents and apply'.toUpperCase()}
            size={{ width: '25vw', height: '25vw' }}
          >
            3
          </Bubble>
        </div>
      </HorizontalBubbles>
      <LastHorizontalBubbles>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            bottom: 100,
          }}
        >
          <Bubble
            type={DEFAULT_SIZES.LARGE}
            subtext={'Receive your invitation and get your visa'.toUpperCase()}
            size={{ width: '29vw', height: '29vw' }}
          >
            4
          </Bubble>
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            right: 50,
            top: 40,
          }}
        >
          <TextBubble
            size={{ width: '16vw', height: '16vw' }}
            reverse
            text="Pass the interview"
            type={DEFAULT_SIZES.SMALL}
          >
            5
          </TextBubble>
        </div>
      </LastHorizontalBubbles>
    </BubblesContainer>
  );
}
