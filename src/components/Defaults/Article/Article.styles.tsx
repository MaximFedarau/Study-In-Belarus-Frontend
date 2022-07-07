//Types
import { DEFAULT_SIZES } from 'types/enum';

//MUI
import { styled } from '@mui/material';

//Constants
import { NEWS_ITEM_STYLING } from 'constants/styles';

import { largeMobileCSS } from 'utils/styles/largeMobileCSS';
import { largeTabletCSS } from 'utils/styles/largeTabletCSS';
import { smallTabletCSS } from 'utils/styles/smallTabletCSS';

// * Defaults
export const Article = styled('article')(
  ({ width, height }: { width?: string; height?: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    width,
    height,
  }),
);

// * Home Page

export const GreetingsWelcomePart = styled(Article)({
  overflow: 'hidden',
  ...largeTabletCSS({ display: 'none' }),
});

export const CarouselStudentInfo = styled(Article)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 30,
  ...smallTabletCSS({
    flexDirection: 'column',
    gap: 0,
  }),
});

export const NewsItemContainer = styled(Article)(
  ({ image, size }: { image: string; size?: DEFAULT_SIZES }) => ({
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0 0 3% 3%',
    cursor: 'pointer',
    ':hover': {
      backgroundImage: `linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(${image})`,
      '*': {
        color: 'black',
      },
    },
    ...NEWS_ITEM_STYLING[size!],
  }),
);

// * Advantages Page
export const ArticleTextContainer = styled(Article)({
  gap: 15,
  alignItems: 'unset',
  ...largeMobileCSS({
    alignItems: 'center',
    order: 1,
    marginTop: 13,
  }),
});
