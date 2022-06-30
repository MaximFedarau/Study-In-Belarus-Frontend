//Types
import { DEFAULT_SIZES } from 'constants/enum';

//MUI
import { styled, Box, AppBar } from '@mui/material';

//Constants
import { WINDOWS_BLUE, TRUE_BLUE } from 'constants/colors';
import { NEWS_ITEM_STYLING } from 'constants/constants';

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

export const Section = styled('section')(
  ({ width, height }: { width?: string; height?: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    width,
    height,
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
  '@media screen and (max-width: 1070px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'end',
  },
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
    '@media screen and (max-width: 1070px)': {
      background: mobileBackground,
      height: '100%',
    },
  }),
);

export const FooterContentContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  gap: '57px',
  alignItems: 'unset',
  marginTop: '5%',
  '@media screen and (max-width: 1070px)': {
    alignItems: 'center',
    gap: '40px',
    width: '100%',
    margin: 0,
  },
});

export const FooterTextContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'unset',
  gap: '19px',
  '@media screen and (max-width: 1070px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const FooterContactsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  gap: '40px',
  justifyContent: 'center',
  '@media screen and (max-width: 1070px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
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

export const NotFoundInfoContainer = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  gap: '23px',
  alignItems: 'unset',
});

// * Home Page
export const HomeContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const LatestNewsContainer = styled(Section)({
  width: '100%',
  maxWidth: 2000,
  background: TRUE_BLUE,
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 280,
  padding: '10% 0 10% 0',
});

export const LatestNewsHeader = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '80%',
  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const LatesNewsContent = styled(Section)({
  flexDirection: 'row',
  gap: 30,
  margin: '5% 10% 0 10.5%',
  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const LatestNewsColumnContainer = styled(Section)({
  gap: '27px',
  flexDirection: 'column',
  ':last-child': {
    flexDirection: 'column-reverse',
  },
});

export const LatestNewsColumnSubcontainer = styled(Section)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 30,
  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
  },
});

export const NewsItemContainer = styled('article')(
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
        color: 'black !important',
      },
    },
    ...NEWS_ITEM_STYLING[size!],
  }),
);

// * Advantages Page

export const AdvantagesContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: 64,
  width: '100%',
  '@media screen and (max-width: 800px)': {
    marginBottom: '48px',
    gap: '48px',
  },
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
  padding: '0 3% 0 3%',
  maxWidth: 2000,
  '@media screen and (max-width: 800px)': {
    padding: '0 5% 0 5%',
    alignItems: 'center',
  },
});

export const ArticleContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  gap: '34px',
  alignItems: 'unset',
  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 17,
  },
});

export const ArrowContainer = styled('aside')({
  display: 'flex',
  margin: '2.2rem 20px 0 0',
  alignItems: 'unset',
  '@media screen and (max-width: 800px)': {
    margin: 0,
    width: '100%',
    justifyContent: 'center',
  },
});

export const ArticleTextContainer = styled('article')({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  alignItems: 'unset',
  '@media screen and (max-width: 800px)': {
    alignItems: 'center',
    order: 1,
    marginTop: 13,
  },
});

export const SubarticleContainer = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',
  width: '70%',
  alignItems: 'unset',
  '@media screen and (max-width: 800px)': {
    width: '100%',
  },
});

export const ArticleNavigationContainer = styled('aside')({
  display: 'flex',
  gap: '42px',
  alignItems: 'unset',
  flexDirection: 'column',
  '@media screen and (max-width: 800px)': {
    order: 0,
  },
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
