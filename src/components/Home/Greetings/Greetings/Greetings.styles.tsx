//MUI
import { styled } from '@mui/material';

//Constants
import { TRUE_BLUE } from 'constants/constants/colors';

export const MobileWave = styled('img')(
  ({ reverse }: { reverse?: boolean }) => ({
    display: 'none',
    '@media screen and (max-width: 1170px)': {
      display: 'block',
      transform: reverse ? 'rotate(180deg)' : '',
      width: '100%',
    },
  }),
);

export const MobileTitle = styled('h1')({
  display: 'none',
  '@media screen and (max-width: 1170px)': {
    display: 'block',
    textTransform: 'uppercase',
    fontSize: '7vw',
    textAlign: 'center',
    position: 'sticky',
    top: 80,
    zIndex: -1,
    color: TRUE_BLUE,
  },
});
