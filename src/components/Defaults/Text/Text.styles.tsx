//MUI
import { styled, Typography } from '@mui/material';

//Constants
import { TRUE_BLUE, SUVA_GREY, WINDOWS_GRAY } from '../../../constants/colors';

// * Default

export const DefaultText = styled(Typography)({
  color: 'black',
  fontSize: '14px',
});

// * Navigation

export const SectionText = styled(DefaultText)(
  ({ isSelected }: { isSelected?: boolean }) => ({
    fontFamily: 'Cera Pro Bold',
    fontSize: '18px',
    userSelect: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: isSelected ? TRUE_BLUE : 'black',
  }),
);

export const SubsectionText = styled(DefaultText)({
  userSelect: 'none',
  fontFamily: 'Cera Pro Light',
  fontSize: '18px',
  lineHeight: '23px',
  maxWidth: '266px',
});

// * Footer

export const BottomLink = styled(DefaultText)({
  userSelect: 'none',
  fontFamily: 'Cera Pro Bold',
  fontSize: '18px',
  lineHeight: '21px',
  cursor: 'pointer',
  textTransform: 'uppercase',
  textAlign: 'center',
});

export const ContactsText = styled(DefaultText)({
  fontFamily: 'Cera Pro Light',
  fontSize: '18px',
  lineHeight: '21px',
  maxWidth: '250px',
  '@media screen and (max-width: 1180px)': {
    textAlign: 'center',
  },
});

// * 404
export const NotFoundHeader = styled('header')({
  color: '#0000a3',
  fontFamily: 'Windows Regular',
  fontSize: 18,
  fontWeight: 'bold',
  background: WINDOWS_GRAY,
  padding: '1px 12px 1px 12px',
});

export const NotFoundText = styled(DefaultText)({
  color: 'white',
  fontFamily: 'Windows Regular',
  fontWeight: 'bold',
  fontSize: 20,
});

export const NotFoundFooter = styled('footer')({
  color: 'white',
  fontFamily: 'Windows Regular',
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
});

// *

export const CarouselStudentHeader = styled('h1')({
  textTransform: 'capitalize',
  '@media screen and (max-width: 910px)': {
    textAlign: 'center',
  },
});

export const CarouselStudentText = styled('p')({
  textTransform: 'capitalize',
  maxWidth: 480,
  '@media screen and (max-width: 910px)': {
    textAlign: 'center',
  },
});

export const CarouselStudentAdditionalText = styled('em')({
  textTransform: 'capitalize',
  '@media screen and (max-width: 910px)': {
    textAlign: 'center',
  },
});

export const LatestNewsHeaderText = styled(DefaultText)({
  color: 'white',
  fontWeight: 700,
  fontSize: 96,
  lineHeight: 1,
  '@media screen and (max-width: 800px)': {
    fontSize: '5rem',
    textAlign: 'center',
    lineHeight: '5rem',
  },
});

export const NewsItemHeader = styled('header')({
  color: 'white',
  fontSize: '1em',
  fontWeight: 700,
  maxWidth: '99%',
  '@media screen and (max-width: 820px)': {
    WebkitLineClamp: '2',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
});

export const NewsItemDateText = styled(DefaultText)({
  color: 'white',
  fontSize: '.8em',
  fontWeight: 400,
});

export const LatestNewsHeaderSubText = styled(DefaultText)({
  color: 'white',
  fontSize: 18,
  lineHeight: 2.6,
  cursor: 'pointer',
  '@media screen and (max-width: 800px)': {
    textAlign: 'center',
  },
});

// * Advantages
export const ArticlePathText = styled('nav')({
  color: SUVA_GREY,
  fontSize: '18px',
  fontFamily: 'Roboto Regular',
  fontWeight: 500,
  marginLeft: 90,
  lineHeight: 1.5,
  letterSpacing: '0.00938em',
  '@media screen and (max-width: 800px)': {
    textAlign: 'center',
    marginLeft: 0,
  },
});

export const ArticleHeaderText = styled(DefaultText)({
  fontFamily: 'Roboto Regular',
  fontWeight: 700,
  fontSize: '36px',
  textTransform: 'capitalize',
  lineHeight: '42px',
  '@media screen and (max-width: 800px)': {
    textAlign: 'center',
  },
});

export const SubarticleText = styled(DefaultText)({
  fontFamily: 'Roboto Regular',
  fontWeight: 400,
  fontSize: '20px',
  color: TRUE_BLUE,
});

export const ArticleText = styled(DefaultText)(
  ({ isActive }: { isActive?: boolean }) => ({
    fontFamily: 'Roboto Regular',
    fontWeight: isActive ? 500 : 400,
    fontSize: '18px',
    color: isActive ? TRUE_BLUE : 'black',
  }),
);
