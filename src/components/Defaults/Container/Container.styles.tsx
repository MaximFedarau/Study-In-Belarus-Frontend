//MUI
import { styled, Box } from '@mui/material';

//Constants
import { TRUE_BLUE } from '../../../constants/colors';

export const Container = styled(Box)(
  ({ width, height }: { width?: string; height?: string }) => ({
    display: 'flex',
    flexDirection: 'row',
    width,
    height,
    alignItems: 'center',
  }),
);

export const NavigationContainer = styled(Container)({
  justifyContent: 'center',
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

export const FooterContaner = styled(Container)(
  ({ image }: { image?: string }) => ({
    backgroundImage: `url(${image})`,
    width: '100vw',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }),
);

export const FooterContentContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'end',
  gap: '57px',
  alignItems: 'unset',
  marginBottom: '5%',
  '@media screen and (max-width: 1180px)': {
    alignItems: 'center',
    alignSelf: 'center',
    gap: '40px',
  },
});

export const FooterTextContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'unset',
  gap: '19px',
  '@media screen and (max-width: 1180px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const FooterContactsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  gap: '40px',
  justifyContent: 'center',
  '@media screen and (max-width: 1180px)': {
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

export const FooterNetworksContactsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '48px',
});
