//MUI
import { styled } from '@mui/material';

//Constants
import { TRUE_BLUE } from 'constants/constants/colors';

//Icons
import wave from 'assets/images/home/wave_with_sign.svg';

// * Default

export const Section = styled('section')(
  ({ width, height }: { width?: string; height?: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    width,
    height,
  }),
);

// * 404
export const NotFoundInfoContainer = styled(Section)({
  gap: '23px',
});

// * Home Page

export const GreetingsContainer = styled(Section)({
  minHeight: 2198,
  width: '100%',
  backgroundImage: `url(${wave})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  marginTop: 120,
  maxWidth: 2000,
  '@media screen and (max-width: 1170px)': {
    background: 'white',
    marginTop: 0,
    minHeight: 'unset',
  },
  '@media screen and (min-width: 1441px)': {
    height: 2500,
  },
  '@media screen and (min-width: 1641px)': {
    height: 2900,
  },
  '@media screen and (min-width: 1900px)': {
    height: 3080,
  },
});

export const SalutationMobileContainer = styled(Section)({
  display: 'none',
  '@media screen and (max-width: 1170px)': {
    display: 'block',
    marginBottom: '50px',
  },
});

export const EducationContainer = styled(Section)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  bottom: '1.45%',
  maxWidth: 2000,
  width: '100%',
  '@media screen and (max-width: 1170px)': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'unset',
    position: 'static',
    background: TRUE_BLUE,
    paddingBottom: 10,
  },
});

export const PointsSection = styled(Section)({
  gap: 87,
  marginLeft: '12%',
  '@media screen and (max-width: 1170px)': {
    marginLeft: 0,
    alignItems: 'center',
  },
});

export const BubblesContainer = styled(Section)({
  width: '100%',
  position: 'relative',
  alignItems: 'flex-end',
  zIndex: 2,
  maxWidth: 2000,
  bottom: '4.6%',
  left: '-5%',
  '@media screen and (min-width: 1500px)': {
    bottom: '5%',
  },
  '@media screen and (min-width: 1800px)': {
    bottom: '5%',
    left: '-9%',
  },
});

export const HorizontalBubbles = styled(Section)({
  flexDirection: 'row',
});

export const LastHorizontalBubbles = styled(Section)({
  position: 'relative',
  flexDirection: 'row',
  right: 250,
});

export const CarouselContainer = styled(Section)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50vh',
  width: '100%',
  maxWidth: 2000,
  position: 'relative',
  boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.3)',
});

export const CarouselStudentAdditionalInfo = styled(Section)({
  '@media screen and (max-width: 910px)': {
    alignItems: 'center',
  },
});

export const LatestNewsContainer = styled(Section)({
  width: '100%',
  maxWidth: 2000,
  background: TRUE_BLUE,
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 280,
  padding: '10% 0',
});

export const LatesNewsContent = styled(Section)({
  flexDirection: 'row',
  gap: 30,
  margin: '5% 10% 0 10.5%',
  '@media screen and (max-width: 1070px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const LatestNewsColumnContainer = styled(Section)({
  gap: '27px',
  flexDirection: 'column',
  maxWidth: 860,
  ':last-child': {
    '> section': {
      order: -1,
    },
  },
});

export const LatestNewsColumnSubcontainer = styled(Section)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 30,
});

// * Advantages Page
export const SubarticleContainer = styled(Section)({
  gap: '17px',
  width: '70%',
  alignItems: 'unset',
  '@media screen and (max-width: 800px)': {
    width: '100%',
  },
});
