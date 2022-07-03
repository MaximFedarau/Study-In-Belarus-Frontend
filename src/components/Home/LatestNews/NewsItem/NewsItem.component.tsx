//Types
import { ReactElement } from 'react';
import { NewsItemInterface } from 'constants/types/types';
import { DEFAULT_SIZES } from 'constants/types/enum';

//Constants
import { dateFormatting } from 'utils/dateFormatting';

//Components
import { NewsItemContainer } from 'components/Defaults/Article/Article.styles';
import {
  NewsItemHeader,
  NewsItemDateText,
} from 'components/Defaults/Text/Text.styles';

//Interface for Props
interface NewsItemProps extends NewsItemInterface {
  size?: DEFAULT_SIZES;
}

export default function NewsItem({
  title,
  date,
  image,
  size,
}: NewsItemProps): ReactElement {
  return (
    <NewsItemContainer size={size} image={image}>
      {date && <NewsItemDateText>{dateFormatting(date)}</NewsItemDateText>}
      <NewsItemHeader>{title}</NewsItemHeader>
    </NewsItemContainer>
  );
}
