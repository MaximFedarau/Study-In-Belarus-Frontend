//Types
import { STYLING_SIZES } from 'types/enum';

//MUI
import { styled, Box, AppBar } from '@mui/material';

//Constants
import { WINDOWS_BLUE, TRUE_BLUE } from 'constants/colors';
import { mobileCSS } from 'utils/mobileCSS';

// * Default

export const Container = styled(Box)(
  ({ width, height }: { width?: string; height?: string }) => ({
    display: 'flex',
    flexDirection: 'row',
    width,
    height,
    alignItems: 'center',
  }),
);

// * Outlet Container
export const OutletContainer = styled(Box)({
  display: 'flex',
  marginTop: '72px',
});

// * Navigation

export const NavigationContainer = styled(AppBar)({
  justifyContent: 'center',
  display: 'flex',
  background: 'white',
  width: '100%',
  height: '72px',
  boxShadow: 'none',
});

export const NavigationContentContainer = styled(Container)({
  justifyContent: 'space-between',
  alignSelf: 'center',
});

export const NavigationButtonsContainer = styled(Container)({
  gap: '5vw',
});

export const NavigationActionsContainer = styled(Container)({
  gap: '1vw',
});

export const NavigationDrawerLoginContainer = styled(Container)({
  marginTop: '59px',
  justifyContent: 'space-between',
  alignItems: 'unset',
});

export const NavigationDrawerItemsListContainer = styled(Container)({
  flexDirection: 'column',
  gap: '23px',
  alignItems: 'unset',
  margin: '42px 26px 0 25px',
});

export const NavigationDrawerLinksContainer = styled(Container)(
  ({ isSelected }: { isSelected?: boolean }) => ({
    alignItems: 'unset',
    flexDirection: 'column',
    gap: '14px',
    marginTop: '7px',
    display: isSelected ? 'flex' : 'none',
  }),
);

// * Footer

export const FooterMainContainer = styled('footer')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const FooterWaveContainer = styled(Container)({
  display: 'none',
  ...mobileCSS(STYLING_SIZES.SMALL_TABLET, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'end',
  }),
});

export const FooterContainer = styled(Container)(
  ({
    image,
    mobileBackground,
  }: {
    image?: string;
    mobileBackground?: string;
  }) => ({
    backgroundImage: `url(${image})`,
    width: '100vw',
    height: '588px',
    maxWidth: 2000,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: '',
    ...mobileCSS(STYLING_SIZES.SMALL_TABLET, {
      background: mobileBackground,
      height: '100%',
    }),
  }),
);

export const FooterContentContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  gap: '57px',
  alignItems: 'unset',
  marginTop: '5%',
  ...mobileCSS(STYLING_SIZES.SMALL_TABLET, {
    alignItems: 'center',
    gap: '40px',
    width: '100%',
    margin: 0,
  }),
});

export const FooterTextContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'unset',
  gap: '19px',
  ...mobileCSS(STYLING_SIZES.SMALL_TABLET, {
    flexDirection: 'column',
    alignItems: 'center',
  }),
});

export const FooterContactsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  gap: '40px',
  justifyContent: 'center',
  ...mobileCSS(STYLING_SIZES.SMALL_TABLET, {
    flexDirection: 'column',
    alignItems: 'center',
  }),
});

export const FooterContactsItemsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
});

export const FooterPhoneNumbersContainer = styled(Container)({
  flexDirection: 'column',
  alignItems: 'unset',
});

export const FooterNetworksContactsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '48px',
});

// * 404

export const NotFoundContainer = styled(Container)({
  width: '100vw',
  height: '100vh',
  background: WINDOWS_BLUE,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const NotFoundContentContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '64px',
});

// * Home Page

export const GreetingsHeader = styled('header')({
  maxWidth: 2000,
  marginTop: 'calc(200px - 10vw)',
  paddingLeft: '6%',
  width: '100%',
  '@media screen and (min-width: 1500px)': {
    marginTop: 50,
  },
});

export const MobileBubbleContainer = styled(Container)({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5vw', // ! for Safari
  // * borderBottom: '3px solid transparent', <- чтобы появлялась с нуля
  margin: 12,
  padding: 12,
  alignSelf: 'center',
  ':hover': {
    borderBottom: `3px solid ${TRUE_BLUE}`,
    borderRadius: '5%',
    transition: 'border 0.5s ease-in-out',
    '*': {
      color: TRUE_BLUE,
    },
    '> p': {
      position: 'static', // ! for Safari
      visibility: 'visible', // ! for Safari
      animation: 'bubble-animation 0.5s ease-in-out',
    },
  },
  '@keyframes bubble-animation': {
    '0%': {
      opacity: 0.3,
      transform: 'translateY(0)',
    },
    '50%': {
      opacity: 0.6,
      transform: 'translateY(10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

export const TopWaveContainer = styled(Container)({
  flexDirection: 'column',
});

export const BottomWaveContainer = styled(Container)({
  marginBottom: 100,
});

export const EducationMainImageContainer = styled(Container)({
  width: '100%',
  height: '100%',
  maxWidth: 653,
  maxHeight: 933,
  ...mobileCSS(STYLING_SIZES.LARGE_TABLET, {
    display: 'none',
  }),
});

export const PointItemContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  gap: 100,
  alignItems: 'center',
  ':hover': {
    '> p': {
      textShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
    },
  },
  ...mobileCSS(STYLING_SIZES.LARGE_TABLET, {
    gap: '7vw',
    cursor: 'pointer',
    ':hover': {
      '> div': {
        transform: 'scale(1.1) rotate(-30deg)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5);',
      },
      '> p': {
        borderBottom: '1px solid #fff',
      },
    },
  }),
});

export const CarouselArrowWrapper = styled(Container)({
  marginLeft: '3%',
  transform: 'rotate(180deg)',
  ':last-child': {
    marginRight: '3%',
    marginLeft: 0,
    transform: 'unset',
  },
});

export const HomeContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const LatestNewsHeader = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '80%',
  ...mobileCSS(STYLING_SIZES.SMALL_TABLET, {
    flexDirection: 'column',
    alignItems: 'center',
  }),
});

// * Advantages Page

export const AdvantagesContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: 64,
  width: '100%',
  ...mobileCSS(STYLING_SIZES.LARGE_PHONE, {
    marginBottom: '48px',
    gap: '48px',
  }),
});

export const AdvantagesHeaderContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'unset',
  width: '100%',
  maxWidth: 2000,
});

export const AdvantagesContentContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: 17,
  alignItems: 'unset',
  padding: '0 3%',
  maxWidth: 2000,
  ...mobileCSS(STYLING_SIZES.LARGE_PHONE, {
    padding: '0 5%',
    alignItems: 'center',
  }),
});

export const ArticleContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  gap: '34px',
  alignItems: 'unset',
  ...mobileCSS(STYLING_SIZES.LARGE_PHONE, {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 17,
  }),
});

export const ArrowContainer = styled('aside')({
  display: 'flex',
  margin: '2.2rem 20px 0 0',
  alignItems: 'unset',
  ...mobileCSS(STYLING_SIZES.LARGE_PHONE, {
    margin: 0,
    width: '100%',
    justifyContent: 'center',
  }),
});

export const ArticleNavigationContainer = styled('aside')({
  display: 'flex',
  gap: '42px',
  alignItems: 'unset',
  flexDirection: 'column',
  ...mobileCSS(STYLING_SIZES.LARGE_PHONE, {
    order: 0,
  }),
});

export const NavigationItemContainer = styled(Container)({
  gap: 24,
  width: '100%',
  ':hover': {
    '*': {
      color: TRUE_BLUE,
    },
  },
});
