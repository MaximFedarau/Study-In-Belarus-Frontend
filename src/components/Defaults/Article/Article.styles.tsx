//Types
import { DEFAULT_SIZES } from 'constants/types/enum';

//MUI
import { styled } from '@mui/material';

//Constants
import { NEWS_ITEM_STYLING } from 'constants/constants/styles';

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
  '@media screen and (max-width: 1170px)': {
    display: 'none',
  },
});

export const CarouselStudentInfo = styled(Article)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 30,
  '@media screen and (max-width: 910px)': {
    flexDirection: 'column',
    gap: 0,
  },
});

export const NewsItemContainer = styled(Article)(
  ({ image, size }: { image: string; size?: DEFAULT_SIZES }) => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    boxShadow: '0 0 0 1600px rgba(0,0,0,0.5) inset',
    padding: '0 0 3% 3%',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '0 0 0 1600px rgba(255, 255, 255, 0.5) inset',
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
  '@media screen and (max-width: 800px)': {
    alignItems: 'center',
    order: 1,
    marginTop: 13,
  },
});
