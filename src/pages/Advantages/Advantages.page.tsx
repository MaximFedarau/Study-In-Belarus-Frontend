//Types
import React, { ReactElement } from 'react';
import { PAGES_TITLES } from 'types/enum';

//Components
import {
  AdvantagesContainer,
  AdvantagesHeaderContainer,
} from 'components/Defaults/Container/Container.styles';
import Content from 'components/Advantages/Content/Content.component';

//Icons
import students from 'assets/images/advantages/students.jpg';

export default function Advantages(): ReactElement {
  React.useEffect(() => {
    document.title = PAGES_TITLES.ADVANTAGES_OF_STUDYING_IN_BELARUS;
  }, []);
  return (
    <AdvantagesContainer>
      <AdvantagesHeaderContainer>
        {/* div is for Safari */}
        <img src={students} loading="lazy" width="100%" height="100%" />
      </AdvantagesHeaderContainer>
      <Content />
    </AdvantagesContainer>
  );
}
