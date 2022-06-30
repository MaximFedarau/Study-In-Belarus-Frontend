//Types
import { ReactElement } from 'react';
import { NewsItemInterface } from 'constants/types';
import { DEFAULT_SIZES } from 'constants/enum';

//Constants
import { dateFormatting } from 'utils/dateFormatting';

//Components
import { NewsItemContainer } from 'components/Defaults/Container/Container.styles';
import {
  NewsItemHeader,
  NewsItemDateText,
} from 'components/Defaults/Text/Text.styles';

//Interface for Props
interface NewsItemProps extends NewsItemInterface {
  size?: DEFAULT_SIZES;
}

export default function NewsItem({
  title: children,
  date,
  image,
  size,
}: NewsItemProps): ReactElement {
  return (
    <NewsItemContainer size={size} image={image}>
      {date && <NewsItemDateText>{dateFormatting(date)}</NewsItemDateText>}
      <NewsItemHeader>{children}</NewsItemHeader>
    </NewsItemContainer>
  );
}
