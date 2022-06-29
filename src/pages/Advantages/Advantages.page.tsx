//Types
import { ReactElement } from 'react';

//Constants
import { ADVANTAGES_IMAGE_SIZES } from 'constants/constants';

//Components
import {
  AdvantagesContainer,
  AdvantagesHeaderContainer,
} from 'components/Defaults/Container/Container.styles';
import Content from 'components/Advantages/Content/Content.component';

//Icons
import { ReactComponent as StudentsSVG } from 'assets/images/advantages/students.svg';

//React Helmet
import { Helmet } from 'react-helmet';

export default function Advantages(): ReactElement {
  return (
    <AdvantagesContainer>
      {/* <Helmet>
        <title>Advantages of Studying in Belarus</title>
      </Helmet> */}
      <AdvantagesHeaderContainer>
        {/* div is for Safari */}
        <StudentsSVG {...ADVANTAGES_IMAGE_SIZES} />
      </AdvantagesHeaderContainer>
      <Content />
    </AdvantagesContainer>
  );
}
