//Types
import React, { ReactElement } from 'react';

//Constants
import { ERROR_MESSAGES } from 'constants/constants';

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
          {ERROR_MESSAGES.map((message) => (
            <NotFoundText key={message}>{message}</NotFoundText>
          ))}
        </NotFoundInfoContainer>
        <NotFoundFooter>
          {`© ${new Date().getFullYear()} Study in Belarus. All rights reserved.`}
        </NotFoundFooter>
      </NotFoundContentContainer>
    </NotFoundContainer>
  );
}
