//Types
import React, { ReactElement } from 'react';
import { PAGES_TITLES } from 'constants/types/enum';

//Constants
import { ADVANTAGES_IMAGE_SIZES } from 'constants/constants/styles';

//Components
import {
  AdvantagesContainer,
  AdvantagesHeaderContainer,
} from 'components/Defaults/Container/Container.styles';
import Content from 'components/Advantages/Content/Content.component';

//Icons
import { ReactComponent as StudentsSVG } from 'assets/images/advantages/students.svg';

export default function Advantages(): ReactElement {
  React.useEffect(() => {
    document.title = PAGES_TITLES.ADVANTAGES_OF_STUDYING_IN_BELARUS;
  }, []);
  return (
    <AdvantagesContainer>
      <AdvantagesHeaderContainer>
        {/* div is for Safari */}
        <StudentsSVG {...ADVANTAGES_IMAGE_SIZES} />
      </AdvantagesHeaderContainer>
      <Content />
    </AdvantagesContainer>
  );
}
