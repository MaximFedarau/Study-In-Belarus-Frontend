//Types
import React, { ReactElement } from 'react';
import { PAGES_TITLES } from 'types/enum';

//Constants
import { ERROR_MESSAGES } from 'constants/data';

//Components
import {
  NotFoundContainer,
  NotFoundContentContainer,
} from 'components/Defaults/Container/Container.styles';
import { NotFoundInfoContainer } from 'components/Defaults/Section/Section.styles';
import {
  NotFoundHeader,
  NotFoundText,
  NotFoundFooter,
} from 'components/Defaults/Text/Text.styles';

export default function Page404(): ReactElement {
  React.useEffect(() => {
    document.title = PAGES_TITLES.NOT_FOUND;
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
