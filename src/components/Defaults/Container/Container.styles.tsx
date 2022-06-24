//MUI
import { styled, Box, AppBar } from '@mui/material';

//Constants
import { WINDOWS_BLUE, WINDOWS_GRAY, TRUE_BLUE } from 'constants/colors';

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

export const FooterMainContainer = styled(Container)({
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

export const NotFoundHeaderContainer = styled(Container)({
  background: WINDOWS_GRAY,
  padding: '1px 12px 1px 12px',
});

export const NotFoundInfoContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '23px',
  alignItems: 'unset',
});

// * Advantages Page

export const AdvantagesContainer = styled(Container)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: '74px',
  '@media screen and (max-width: 800px)': {
    marginBottom: '48px',
    gap: '48px',
  },
});

export const AdvantagesContentContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '38px',
  alignItems: 'unset',
  padding: '0 3% 0 5%',
  '@media screen and (max-width: 800px)': {
    padding: '0 5% 0 5%',
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
  },
});

export const ArticleTextContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '38px',
  alignItems: 'unset',
  '@media screen and (max-width: 800px)': {
    alignItems: 'center',
    order: 1,
  },
});

export const SubarticleContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',
  width: '70%',
  alignItems: 'unset',
  '@media screen and (max-width: 800px)': {
    width: '100%',
  },
});

export const ArticleNavigationContainer = styled(Container)({
  gap: '42px',
  alignItems: 'unset',
  flexDirection: 'column',
});

export const NavigationItemContainer = styled(Container)({
  gap: 24,
  width: '100%',
  ':hover': {
    '*': {
      color: TRUE_BLUE,
    },
  },
  '@media screen and (max-width: 800px)': {
    order: 0,
  },
});
