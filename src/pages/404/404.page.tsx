//Types
import React, { ReactElement } from 'react';

//Components
import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundInfoContainer,
} from 'components/Defaults/Container/Container.styles';
import {
  NotFoundHeader,
  NotFoundText,
  NotFoundFooter,
} from 'components/Defaults/Text/Text.styles';

export default function Page404(): ReactElement {
  React.useEffect(() => {
    document.title = '404';
  }, []);
  return (
    <NotFoundContainer>
      <NotFoundContentContainer>
        <NotFoundHeader>Study in Belarus</NotFoundHeader>
        <NotFoundInfoContainer>
          <NotFoundText>A 404 error has occurred. To continue:</NotFoundText>
          <NotFoundText>Reload current page, or</NotFoundText>
          <NotFoundText>
            Navigate to the home page. Also check your internet connection and
            reload current page.
          </NotFoundText>
        </NotFoundInfoContainer>
        <NotFoundFooter>
          {`© ${new Date().getFullYear()} Study in Belarus. All rights reserved.`}
        </NotFoundFooter>
      </NotFoundContentContainer>
    </NotFoundContainer>
  );
}
