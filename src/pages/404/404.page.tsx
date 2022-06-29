//Types
import { ReactElement } from 'react';

//Components
import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundHeaderContainer,
  NotFoundInfoContainer,
} from 'components/Defaults/Container/Container.styles';
import {
  NotFoundHeader,
  NotFoundText,
  NotFoundFooter,
} from 'components/Defaults/Text/Text.styles';

//React Helmet
import { Helmet } from 'react-helmet';

export default function Page404(): ReactElement {
  return (
    <NotFoundContainer>
      {/* <Helmet>
        <title>404</title>
      </Helmet> */}
      <NotFoundContentContainer>
        <NotFoundHeaderContainer>
          <NotFoundHeader>Study in Belarus</NotFoundHeader>
        </NotFoundHeaderContainer>
        <NotFoundInfoContainer>
          <NotFoundText>A 404 error has occurred. To continue:</NotFoundText>
          <NotFoundText>Reload current page, or</NotFoundText>
          <NotFoundText>
            Navigate to the home page. Also check your internet connection and
            reload current page.
          </NotFoundText>
          <NotFoundFooter>
            {`© ${new Date().getFullYear()} Study in Belarus. All rights reserved.`}
          </NotFoundFooter>
        </NotFoundInfoContainer>
      </NotFoundContentContainer>
    </NotFoundContainer>
  );
}
