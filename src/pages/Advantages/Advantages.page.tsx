//Types
import React, { ReactElement } from 'react';

//Constants
import { ADVANTAGES_IMAGE_SIZES } from 'constants/constants';

//Components
import { AdvantagesContainer } from 'components/Defaults/Container/Container.styles';
import Content from 'components/Advantages/Content/Content.component';

//Icons
import { ReactComponent as StudentsSVG } from 'assets/images/advantages/students.svg';

export default function Advantages(): ReactElement {
  React.useEffect(() => {
    document.title = 'Advantages of Studying in Belarus';
  }, []);
  return (
    <AdvantagesContainer>
      <div>
        {/* div is for Safari */}
        <StudentsSVG {...ADVANTAGES_IMAGE_SIZES} />
      </div>
      <Content />
    </AdvantagesContainer>
  );
}
