//Types
import { ReactElement } from 'react';

//Constants
import { POINTS_OF_STUDYING } from 'constants/ui';

//Components
import PointItem from '../PointItem/PointItem.component';

import { PointsSection } from 'components/Defaults/Section/Section.styles';

export default function Points(): ReactElement {
  return (
    <PointsSection>
      {POINTS_OF_STUDYING.map((point) => {
        const { icon: Icon, text } = point;
        return (
          <PointItem key={text} Icon={Icon}>
            {text}
          </PointItem>
        );
      })}
    </PointsSection>
  );
}
